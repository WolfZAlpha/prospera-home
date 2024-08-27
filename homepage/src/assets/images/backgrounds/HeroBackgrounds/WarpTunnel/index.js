import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import audioFile from "../../../../music/homepage/CoccolinoDeepTheMatrix.mp3";
import "./WarpTunnel.css";

const WarpTunnel = ({ isPlaying, onStart, onStop }) => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const [audioContext, setAudioContext] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  WarpTunnel.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
  };

  useEffect(() => {
    let audio, audioSrc, analyser;
    let animationFrameId;

    const MATHPI2 = Math.PI * 2;

    let w, h;
    let canvas, context;
    let imageData, data;

    let mouseActive = false;
    let mouseDown = false;
    let mousePos = { x: 0, y: 0 };

    const fov = 250;
    const speed = 0.75;
    const smoothingTimeConstant = 0.65;
    const fftSize = 8192;

    let circleHolder = [];
    let time = 0;
    let colorInvertValue = 0;

    let rgb = {
      r: Math.random() * MATHPI2,
      g: Math.random() * MATHPI2,
      b: Math.random() * MATHPI2,
    };

    let rgb2 = {
      r: Math.random() * MATHPI2,
      g: Math.random() * MATHPI2,
      b: Math.random() * MATHPI2,
    };

    function getRGBColor(color) {
      const r = Math.sin((color.r += 0.01)) * 1 + 1;
      const g = Math.sin((color.g += 0.007)) * 1 + 1;
      const b = Math.sin((color.b += 0.013)) * 1 + 1;
      return { r, g, b };
    }

    function getRGBColor2(color) {
      const r = Math.sin((color.r += 0.04)) * 1 + 1;
      const g = Math.sin((color.g += 0.028)) * 1 + 1;
      const b = Math.sin((color.b += 0.052)) * 1 + 1;
      return { r, g, b };
    }

    function limitRGBColor(color, percent = 0.45) {
      color.r = Math.max(color.r, percent);
      color.g = Math.max(color.g, percent);
      color.b = Math.max(color.b, percent);
    }

    function init() {
      canvas = canvasRef.current;
      canvas.addEventListener("mousedown", mouseDownHandler, false);
      canvas.addEventListener("mouseup", mouseUpHandler, false);
      canvas.addEventListener("mousemove", mouseMoveHandler, false);
      canvas.addEventListener("mouseenter", mouseEnterHandler, false);
      canvas.addEventListener("mouseleave", mouseLeaveHandler, false);

      context = canvas.getContext("2d");

      window.addEventListener("resize", onResize, false);
      onResize();

      addCircles();

      clearImageData();
      render();
      context.putImageData(imageData, 0, 0);

      animate();
    }

    function audioSetup() {
      audio = audioRef.current;
      audio.loop = true;
      audio.crossOrigin = "anonymous";

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const newAudioContext = new AudioContext();
      setAudioContext(newAudioContext);

      analyser = newAudioContext.createAnalyser();
      analyser.connect(newAudioContext.destination);
      analyser.smoothingTimeConstant = smoothingTimeConstant;
      analyser.fftSize = fftSize;

      audioSrc = newAudioContext.createMediaElementSource(audio);
      audioSrc.connect(analyser);

      // Prepare audio to play
      audio.load();
    }

    function startAudio() {
      if (audioContext && audioContext.state === "suspended") {
        audioContext.resume();
      }
      audio.play().catch((e) => console.error("Audio play failed:", e));
    }

    function stopAudio() {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }

    function clearImageData() {
      for (let i = 0, l = data.length; i < l; i += 4) {
        data[i] = 0;
        data[i + 1] = 0;
        data[i + 2] = 0;
        data[i + 3] = 255;
      }
    }

    function setPixel(x, y, r, g, b, a) {
      const i = (x + y * imageData.width) * 4;
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      data[i + 3] = a;
    }

    function drawLine(x1, y1, x2, y2, r, g, b, a) {
      const dx = Math.abs(x2 - x1);
      const dy = Math.abs(y2 - y1);
      const sx = x1 < x2 ? 1 : -1;
      const sy = y1 < y2 ? 1 : -1;
      let err = dx - dy;

      let x = x1;
      let y = y1;

      while (x !== x2 || y !== y2) {
        if (x >= 0 && x < w && y >= 0 && y < h) {
          setPixel(x, y, r, g, b, a);
        }

        const e2 = 2 * err;
        if (e2 > -dy) {
          err -= dy;
          x += sx;
        }
        if (e2 < dx) {
          err += dx;
          y += sy;
        }
      }
      // Set the final pixel
      if (x2 >= 0 && x2 < w && y2 >= 0 && y2 < h) {
        setPixel(x2, y2, r, g, b, a);
      }
    }

    function getCirclePosition(centerX, centerY, radius, index, segments) {
      const angle = index * (MATHPI2 / segments) + time;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      return { x, y };
    }

    function drawCircle(centerPosition, radius, segments) {
      const coordinates = [];
      const radiusSave = radius;

      for (let i = 0; i <= segments; i++) {
        const radiusRandom = i === 0 || i === segments ? radiusSave : radius;
        const position = getCirclePosition(
          centerPosition.x,
          centerPosition.y,
          radiusRandom,
          i,
          segments
        );
        coordinates.push({
          x: position.x,
          y: position.y,
          index: i,
          radius: radiusRandom,
          segments: segments,
        });
      }

      return coordinates;
    }

    function addCircleSegment(x, y, z, audioBufferIndex) {
      return {
        x,
        y,
        z,
        x2d: 0,
        y2d: 0,
        audioBufferIndex,
      };
    }

    function addCircles() {
      const audioBufferIndexMin = 8;
      const audioBufferIndexMax = 1024;
      const centerPosition = { x: 0, y: 0 };
      const center = { x: 0, y: 0 };
      const mp = { x: Math.random() * w, y: Math.random() * h };

      for (let z = -fov; z < fov; z += 5) {
        const coordinates = drawCircle(centerPosition, 75, 64);
        const circleObj = {
          segmentsOutside: [],
          segmentsInside: [],
          segmentsInside2: [],
          segmentsCount: 0,
          index: circleHolder.length,
          z,
          center,
          circleCenter: { x: 0, y: 0 },
          mp: { x: mp.x, y: mp.y },
          radius: coordinates[0].radius,
          color: { r: 0, g: 0, b: 0 },
        };

        const toggle = circleHolder.length % 2;

        coordinates.forEach((coordinate, i) => {
          if (i % 2 === toggle) {
            const audioBufferIndex =
              Math.floor(Math.random() * (audioBufferIndexMax - audioBufferIndexMin)) +
              audioBufferIndexMin;
            const circleSegmentOutside = addCircleSegment(
              coordinate.x,
              coordinate.y,
              z,
              audioBufferIndex
            );
            circleSegmentOutside.active = true;
            circleSegmentOutside.index = coordinate.index;
            circleSegmentOutside.radius = coordinate.radius;
            circleSegmentOutside.radiusAudio = circleSegmentOutside.radius;
            circleSegmentOutside.segments = coordinate.segments;

            const prevCoordinate = i > 0 ? coordinates[i - 1] : coordinates[coordinates.length - 1];

            circleSegmentOutside.subs = [
              addCircleSegment(prevCoordinate.x, prevCoordinate.y, z, audioBufferIndex),
              addCircleSegment(coordinate.x, coordinate.y, z - 5, audioBufferIndex),
              addCircleSegment(prevCoordinate.x, prevCoordinate.y, z - 5, audioBufferIndex),
              addCircleSegment(coordinate.x, coordinate.y, z, audioBufferIndex),
              addCircleSegment(prevCoordinate.x, prevCoordinate.y, z, audioBufferIndex),
              addCircleSegment(coordinate.x, coordinate.y, z - 5, audioBufferIndex),
              addCircleSegment(prevCoordinate.x, prevCoordinate.y, z - 5, audioBufferIndex),
            ];

            circleSegmentOutside.subs.forEach((sub, index) => {
              sub.index = index % 2 === 0 ? prevCoordinate.index : coordinate.index;
            });

            circleObj.segmentsOutside.push(circleSegmentOutside);
          } else {
            circleObj.segmentsOutside.push({ active: false });
          }
        });

        circleHolder.push(circleObj);
      }
    }

    function render() {
      const aa = analyser !== undefined;
      let frequencySource;

      if (aa) {
        frequencySource = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(frequencySource);
      }

      let sortArray = false;

      const col = getRGBColor2(rgb);
      const col2 = getRGBColor(rgb2);

      limitRGBColor(col, 0.45);
      limitRGBColor(col2, 0.25);

      for (let i = 0, l = circleHolder.length; i < l; i++) {
        const circleObj = circleHolder[i];

        circleObj.color.r = col.r - (circleObj.z + fov) / fov;
        circleObj.color.g = col.g - (circleObj.z + fov) / fov;
        circleObj.color.b = col.b - (circleObj.z + fov) / fov;

        circleObj.color.r = Math.max(circleObj.color.r, col2.r);
        circleObj.color.g = Math.max(circleObj.color.g, col2.g);
        circleObj.color.b = Math.max(circleObj.color.b, col2.b);

        const circleObjBack = i > 0 ? circleHolder[i - 1] : null;

        if (mouseActive) {
          circleObj.mp = mousePos;
        } else {
          circleObj.mp.x += (w / 2 - circleObj.mp.x) * 0.00025;
          circleObj.mp.y += (h / 2 - circleObj.mp.y) * 0.00025;
        }

        circleObj.center.x = (w / 2 - circleObj.mp.x) * ((circleObj.z - fov) / 500) + w / 2;
        circleObj.center.y = (h / 2 - circleObj.mp.y) * ((circleObj.z - fov) / 500) + h / 2;

        for (let j = 0, k = circleObj.segmentsOutside.length; j < k; j++) {
          const circleSegmentOutside = circleObj.segmentsOutside[j];

          if (circleSegmentOutside.active) {
            const scale = fov / (fov + circleObj.z);
            const scaleBack = circleObjBack ? fov / (fov + circleObjBack.z) : null;

            circleSegmentOutside.x2d = circleSegmentOutside.x * scale + circleObj.center.x;
            circleSegmentOutside.y2d = circleSegmentOutside.y * scale + circleObj.center.y;

            let frequency, frequencyAdd;

            if (aa) {
              frequency = frequencySource[circleSegmentOutside.audioBufferIndex];
              frequencyAdd = frequency / 20;
              circleSegmentOutside.radiusAudio = circleSegmentOutside.radius - frequencyAdd;
            }

            const lineColorValue =
              j > 0
                ? aa && !audio.paused
                  ? Math.min(Math.round((i / l) * (55 + frequency)), 255)
                  : Math.round((i / l) * 200)
                : 0;

            if (i > 0 && i < l - 1 && circleSegmentOutside.subs) {
              circleSegmentOutside.subs.forEach((sub, index) => {
                if (sub) {
                  const subAngle = sub.index * (MATHPI2 / circleSegmentOutside.segments) + time;
                  sub.x2d =
                    sub.x * (index % 2 === 0 ? scale : scaleBack) +
                    (index % 2 === 0 ? circleObj.center.x : circleObjBack.center.x);
                  sub.y2d =
                    sub.y * (index % 2 === 0 ? scale : scaleBack) +
                    (index % 2 === 0 ? circleObj.center.y : circleObjBack.center.y);
                  sub.x =
                    circleObj.circleCenter.x +
                    Math.cos(subAngle) *
                      (index < 3 ? circleSegmentOutside.radiusAudio : circleSegmentOutside.radius);
                  sub.y =
                    circleObj.circleCenter.y +
                    Math.sin(subAngle) *
                      (index < 3 ? circleSegmentOutside.radiusAudio : circleSegmentOutside.radius);
                }
              });

              const cr = Math.round(circleObj.color.r * lineColorValue);
              const cg = Math.round(circleObj.color.g * lineColorValue);
              const cb = Math.round(circleObj.color.b * lineColorValue);

              if (frequencyAdd > 0 && circleSegmentOutside.subs.length >= 8) {
                const [p1, p2, p3, p4, p5, p6, p7, p8] = circleSegmentOutside.subs;

                if (p1 && p2 && p3 && p4 && p5 && p6 && p7 && p8) {
                  drawLine(p1.x2d | 0, p1.y2d | 0, p2.x2d | 0, p2.y2d | 0, cr, cg, cb, 255);
                  drawLine(p2.x2d | 0, p2.y2d | 0, p3.x2d | 0, p3.y2d | 0, cr, cg, cb, 255);
                  drawLine(p3.x2d | 0, p3.y2d | 0, p4.x2d | 0, p4.y2d | 0, cr, cg, cb, 255);
                  drawLine(p4.x2d | 0, p4.y2d | 0, p1.x2d | 0, p1.y2d | 0, cr, cg, cb, 255);

                  drawLine(p5.x2d | 0, p5.y2d | 0, p1.x2d | 0, p1.y2d | 0, cr, cg, cb, 255);
                  drawLine(p6.x2d | 0, p6.y2d | 0, p4.x2d | 0, p4.y2d | 0, cr, cg, cb, 255);
                  drawLine(p7.x2d | 0, p7.y2d | 0, p3.x2d | 0, p3.y2d | 0, cr, cg, cb, 255);
                  drawLine(p8.x2d | 0, p8.y2d | 0, p2.x2d | 0, p2.y2d | 0, cr, cg, cb, 255);

                  if (circleObj.z < fov / 2) {
                    drawLine(p5.x2d | 0, p5.y2d | 0, p6.x2d | 0, p6.y2d | 0, cr, cg, cb, 255);
                    drawLine(p6.x2d | 0, p6.y2d | 0, p7.x2d | 0, p7.y2d | 0, cr, cg, cb, 255);
                    drawLine(p7.x2d | 0, p7.y2d | 0, p8.x2d | 0, p8.y2d | 0, cr, cg, cb, 255);
                    drawLine(p8.x2d | 0, p8.y2d | 0, p5.x2d | 0, p5.y2d | 0, cr, cg, cb, 255);
                  }
                }
              }
            }

            const circleSegmentOutsideAngle =
              circleSegmentOutside.index * (MATHPI2 / circleSegmentOutside.segments) + time;
            circleSegmentOutside.x =
              circleObj.circleCenter.x +
              Math.cos(circleSegmentOutsideAngle) * circleSegmentOutside.radiusAudio;
            circleSegmentOutside.y =
              circleObj.circleCenter.y +
              Math.sin(circleSegmentOutsideAngle) * circleSegmentOutside.radiusAudio;
          }
        }

        if (mouseDown) {
          circleObj.z += speed;
          if (circleObj.z > fov) {
            circleObj.z -= fov * 2;
            sortArray = true;
          }
        } else {
          circleObj.z -= speed;
          if (circleObj.z < -fov) {
            circleObj.z += fov * 2;
            sortArray = true;
          }
        }
      }

      if (sortArray) {
        circleHolder.sort((a, b) => b.z - a.z);
      }

      if (mouseDown) {
        time -= 0.005;
      } else {
        time += 0.005;
      }

      // Soft invert colors
      if (mouseDown) {
        colorInvertValue = Math.min(colorInvertValue + 5, 255);
      } else {
        colorInvertValue = Math.max(colorInvertValue - 5, 0);
      }

      if (colorInvertValue > 0) {
        softInvert(colorInvertValue);
      }
    }

    function softInvert(value) {
      for (let j = 0, n = data.length; j < n; j += 4) {
        data[j] = Math.abs(value - data[j]);
        data[j + 1] = Math.abs(value - data[j + 1]);
        data[j + 2] = Math.abs(value - data[j + 2]);
        data[j + 3] = 255;
      }
    }

    function animate() {
      clearImageData();
      render();
      context.putImageData(imageData, 0, 0);
      animationFrameId = requestAnimationFrame(animate);
    }

    function onResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      context.fillStyle = "#000000";
      context.fillRect(0, 0, w, h);
      imageData = context.getImageData(0, 0, w, h);
      data = imageData.data;
    }

    function mouseDownHandler() {
      mouseDown = true;
    }

    function mouseUpHandler() {
      mouseDown = false;
    }

    function mouseEnterHandler() {
      mouseActive = true;
    }

    function mouseLeaveHandler() {
      mouseActive = false;
      mouseDown = false;
    }

    function mouseMoveHandler(event) {
      mousePos = getMousePos(canvas, event);
    }

    function getMousePos(canvas, event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }

    function initializeWarpTunnel() {
      init();
      audioSetup();
      startAudio();
      setIsInitialized(true);
      onStart();
    }

    function stopWarpTunnel() {
      stopAudio();
      cancelAnimationFrame(animationFrameId);
      setIsInitialized(false);
      onStop();
    }

    if (isPlaying && !isInitialized) {
      initializeWarpTunnel();
    } else if (!isPlaying && isInitialized) {
      stopWarpTunnel();
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (canvas) {
        canvas.removeEventListener("mousedown", mouseDownHandler);
        canvas.removeEventListener("mouseup", mouseUpHandler);
        canvas.removeEventListener("mousemove", mouseMoveHandler);
        canvas.removeEventListener("mouseenter", mouseEnterHandler);
        canvas.removeEventListener("mouseleave", mouseLeaveHandler);
      }
      cancelAnimationFrame(animationFrameId);
      if (audio) {
        audio.pause();
        audio.src = "";
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [isPlaying, isInitialized, onStart, onStop]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#000000",
        }}
      />
      <audio ref={audioRef} src={audioFile} style={{ display: "none" }} />
    </>
  );
};

export default WarpTunnel;
