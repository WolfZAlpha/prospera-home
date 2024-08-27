import React, { useEffect, useRef } from "./assets/theme/backgrounds/sections/team/react";

const SmokeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    const FloatArray = window.Float32Array || Array;

    function fuzzy(range, base = 0) {
      return base + (Math.random() - 0.5) * range * 2;
    }

    function makeOctaveNoise(width, height, octaves) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1 / octaves;
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < octaves; i++) {
        const octave = makeNoise(width >> i, height >> i);
        ctx.drawImage(octave, 0, 0, width, height);
      }
      return canvas;
    }

    function makeNoise(width, height) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.random() * 255;
        data[i + 1] = Math.random() * 255;
        data[i + 2] = Math.random() * 255;
        data[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);
      return canvas;
    }

    const defaults = {
      maxAge: 70,
      exposure: 0.1,
      damping: 0.8,
      noise: 1.0,
      fuzz: 1.0,
      intensity: 1.0,
      vx: 10,
      vy: 10,
      spawn: 5,
      octaves: 8,
      color: { r: 25, g: 100, b: 75 },
      width: WIDTH,
      height: HEIGHT,
      x: WIDTH * 0.5,
      y: HEIGHT * 0.5,
    };

    class Emitter {
      constructor(options) {
        Object.assign(this, defaults, options);

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d");

        this.noiseData = this.noiseCanvas
          .getContext("2d")
          .getImageData(0, 0, this.width, this.height).data;
        this.particles = [];

        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.imgdata = this.ctx.getImageData(0, 0, this.width, this.height);
        this.data = this.imgdata.data;
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.hdrdata = new FloatArray(this.data.length);
        for (let i = 0; i < this.noiseData.length; i++) {
          this.hdrdata[i] = 0;
        }
        this.velocity = {
          x: Math.random() - 0.5,
          y: Math.random() - 0.5,
        };

        this.update = this.update.bind(this);
      }

      tonemap(n) {
        return (1 - Math.pow(2, -n * 0.005 * this.exposure)) * 255;
      }

      getNoise(x, y, channel) {
        return this.noiseData[(~~x + ~~y * this.width) * 4 + channel] / 127 - 1.0;
      }

      update() {
        if (this.x < 0 || this.x > this.width || this.y < 0 || this.y > this.height) {
          return;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        const { x, y, vx, vy, width, color, maxAge, damping, noise, fuzz, intensity, spawn } = this;
        const { r, g, b } = color;

        for (let i = 0; i < spawn; i++) {
          this.particles.push({
            vx: fuzzy(vx),
            vy: fuzzy(vy),
            x: x,
            y: y,
            age: 0,
          });
        }

        const alive = [];

        this.particles.forEach((p) => {
          p.vx = p.vx * damping + this.getNoise(p.x, p.y, 0) * 4 * noise + fuzzy(0.1) * fuzz;
          p.vy = p.vy * damping + this.getNoise(p.x, p.y, 1) * 4 * noise + fuzzy(0.1) * fuzz;
          p.age++;
          for (let i = 0; i < 10; i++) {
            p.x += p.vx * 0.1;
            p.y += p.vy * 0.1;
            const index = (~~p.x + ~~p.y * width) * 4;
            this.data[index] = this.tonemap((this.hdrdata[index] += r * intensity));
            this.data[index + 1] = this.tonemap((this.hdrdata[index + 1] += g * intensity));
            this.data[index + 2] = this.tonemap((this.hdrdata[index + 2] += b * intensity));
          }
          if (p.age < maxAge) {
            alive.push(p);
          }
        });

        this.ctx.putImageData(this.imgdata, 0, 0);
        this.particles = alive;
      }
    }

    class Smoke {
      constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.width = WIDTH;
        this.height = HEIGHT;
        canvas.width = this.width;
        canvas.height = this.height;

        const noiseCanvas = makeOctaveNoise(this.width, this.height, 8);

        this.emitters = [
          new Emitter({
            name: "left",
            maxAge: 300,
            width: this.width,
            height: this.height,
            damping: 0.75,
            exposure: 0.05,
            intensity: 1.0,
            noiseCanvas: noiseCanvas,
          }),
        ];

        this.emitters[0].x = 0;
        this.emitters[0].y = this.height / 2;
        this.emitters[0].velocity.x = 1;
        this.emitters[0].velocity.y = 0;

        this.update = this.update.bind(this);
        this.loop = this.loop.bind(this);
        this.loop();
      }

      update() {
        this.ctx.globalCompositeOperation = "normal";
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.globalCompositeOperation = "lighter";
        this.emitters.forEach((emitter) => {
          emitter.update();
          this.ctx.drawImage(emitter.canvas, 0, 0);
          emitter.ctx.restore();
        });
      }

      loop() {
        this.update();
        requestAnimationFrame(this.loop);
      }
    }

    const smoke = new Smoke(canvasRef.current);

    return () => {
      // Cleanup if needed
      cancelAnimationFrame(smoke.loop);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  );
};

export default SmokeBackground;
