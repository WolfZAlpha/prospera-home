import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const LandscapeContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: "hidden",
  zIndex: 1,
});

const Landscape = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const WireframeLandscape = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawLandscape = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 20;
      const amplitude = 100;
      const frequency = 0.01;

      ctx.strokeStyle = "#01ff02";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        for (let z = 0; z < canvas.height + gridSize; z += gridSize) {
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(z - canvas.height / 2, 2)
          );
          const y = amplitude * Math.sin(frequency * distanceFromCenter + time * 0.001);

          // Apply perspective transformation
          const scale = 1 + z / canvas.height;
          const projectedX = (x - canvas.width / 2) * scale + canvas.width / 2;
          const projectedY = canvas.height / 2 - y * scale + z / 2;

          if (z === 0) {
            ctx.moveTo(projectedX, projectedY);
          } else {
            ctx.lineTo(projectedX, projectedY);
          }
        }
        ctx.stroke();
      }

      // Draw perpendicular lines
      for (let z = 0; z < canvas.height + gridSize; z += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(z - canvas.height / 2, 2)
          );
          const y = amplitude * Math.sin(frequency * distanceFromCenter + time * 0.001);

          // Apply perspective transformation
          const scale = 1 + z / canvas.height;
          const projectedX = (x - canvas.width / 2) * scale + canvas.width / 2;
          const projectedY = canvas.height / 2 - y * scale + z / 2;

          if (x === 0) {
            ctx.moveTo(projectedX, projectedY);
          } else {
            ctx.lineTo(projectedX, projectedY);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(drawLandscape);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawLandscape(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <LandscapeContainer>
      <Landscape>
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      </Landscape>
    </LandscapeContainer>
  );
};

export default WireframeLandscape;
