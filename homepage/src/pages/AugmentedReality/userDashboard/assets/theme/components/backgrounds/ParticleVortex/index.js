/** 
=========================================================
* PROSPERA DEFI USER DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

import React, { useRef, useEffect } from "react";

const ParticleVortex = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let vars;

    function project3D(x, y, z, vars) {
      let p, d;
      x -= vars.camX;
      y -= vars.camY - 8;
      z -= vars.camZ;
      p = Math.atan2(x, z);
      d = Math.sqrt(x * x + z * z);
      x = Math.sin(p - vars.yaw) * d;
      z = Math.cos(p - vars.yaw) * d;
      p = Math.atan2(y, z);
      d = Math.sqrt(y * y + z * z);
      y = Math.sin(p - vars.pitch) * d;
      z = Math.cos(p - vars.pitch) * d;
      let rx1 = -1000;
      let ry1 = 1;
      let rx2 = 1000;
      let ry2 = 1;
      let rx3 = 0;
      let ry3 = 0;
      let rx4 = x;
      let ry4 = z;
      let uc = (ry4 - ry3) * (rx2 - rx1) - (rx4 - rx3) * (ry2 - ry1);
      let ua = ((rx4 - rx3) * (ry1 - ry3) - (ry4 - ry3) * (rx1 - rx3)) / uc;
      let ub = ((rx2 - rx1) * (ry1 - ry3) - (ry2 - ry1) * (rx1 - rx3)) / uc;
      if (!z) z = 0.000000001;
      if (ua > 0 && ua < 1 && ub > 0 && ub < 1) {
        return {
          x: vars.cx + (rx1 + ua * (rx2 - rx1)) * vars.scale,
          y: vars.cy + (y / z) * vars.scale,
          d: x * x + y * y + z * z,
        };
      } else {
        return { d: -1 };
      }
    }

    function elevation(x, y, z) {
      let dist = Math.sqrt(x * x + y * y + z * z);
      if (dist && z / dist >= -1 && z / dist <= 1) return Math.acos(z / dist);
      return 0.00000001;
    }

    function rgb(col) {
      col += 0.000001;
      let r = parseInt((0.5 + Math.sin(col) * 0.5) * 16);
      let g = parseInt((0.5 + Math.cos(col) * 0.5) * 16);
      let b = parseInt((0.5 - Math.sin(col) * 0.5) * 16);
      return "#" + r.toString(16) + g.toString(16) + b.toString(16);
    }

    function rgbArray(col) {
      col += 0.000001;
      let r = parseInt((0.5 + Math.sin(col) * 0.5) * 256);
      let g = parseInt((0.5 + Math.cos(col) * 0.5) * 256);
      let b = parseInt((0.5 - Math.sin(col) * 0.5) * 256);
      return [r, g, b];
    }

    function colorString(arr) {
      let r = parseInt(arr[0]);
      let g = parseInt(arr[1]);
      let b = parseInt(arr[2]);
      return (
        "#" +
        ("0" + r.toString(16)).slice(-2) +
        ("0" + g.toString(16)).slice(-2) +
        ("0" + b.toString(16)).slice(-2)
      );
    }

    function interpolateColors(RGB1, RGB2, degree) {
      let w2 = degree;
      let w1 = 1 - w2;
      return [
        w1 * RGB1[0] + w2 * RGB2[0],
        w1 * RGB1[1] + w2 * RGB2[1],
        w1 * RGB1[2] + w2 * RGB2[2],
      ];
    }

    function spawnParticle(vars) {
      let p, ls;
      let pt = {};
      p = Math.PI * 2 * Math.random();
      ls = Math.sqrt(Math.random() * vars.distributionRadius);
      pt.x = Math.sin(p) * ls;
      pt.y = -vars.vortexHeight / 2;
      pt.vy = vars.initV / 20 + Math.random() * vars.initV;
      pt.z = Math.cos(p) * ls;
      pt.radius = 200 + 800 * Math.random();
      pt.color = pt.radius / 1000 + vars.frameNo / 250;
      vars.points.push(pt);
    }

    function process(vars) {
      if (vars.points.length < vars.initParticles) for (let i = 0; i < 5; ++i) spawnParticle(vars);
      let p, d, t;
      p = Math.atan2(vars.camX, vars.camZ);
      d = Math.sqrt(vars.camX * vars.camX + vars.camZ * vars.camZ);
      d -= Math.sin(vars.frameNo / 80) / 25;
      t = Math.cos(vars.frameNo / 300) / 165;
      vars.camX = Math.sin(p + t) * d;
      vars.camZ = Math.cos(p + t) * d;
      vars.camY = -Math.sin(vars.frameNo / 220) * 15;
      vars.yaw = Math.PI + p + t;
      vars.pitch = elevation(vars.camX, vars.camZ, vars.camY) - Math.PI / 2;

      for (let i = 0; i < vars.points.length; ++i) {
        let x = vars.points[i].x;
        let y = vars.points[i].y;
        let z = vars.points[i].z;
        d = Math.sqrt(x * x + z * z) / 1.0075;
        t = 0.1 / (1 + (d * d) / 5);
        p = Math.atan2(x, z) + t;
        vars.points[i].x = Math.sin(p) * d;
        vars.points[i].z = Math.cos(p) * d;
        vars.points[i].y += vars.points[i].vy * t * ((Math.sqrt(vars.distributionRadius) - d) * 2);
        if (vars.points[i].y > vars.vortexHeight / 2 || d < 0.25) {
          vars.points.splice(i, 1);
          spawnParticle(vars);
        }
      }
    }

    function drawFloor(vars) {
      let x, y, z, d, point, a, size;
      for (let i = -25; i <= 25; i += 1) {
        for (let j = -25; j <= 25; j += 1) {
          x = i * 2;
          z = j * 2;
          y = vars.floor;
          d = Math.sqrt(x * x + z * z);
          point = project3D(x, y - (d * d) / 85, z, vars);
          if (point.d !== -1) {
            size = 1 + 15000 / (1 + point.d);
            a = 0.15 - Math.pow(d / 50, 4) * 0.15;
            if (a > 0) {
              vars.ctx.fillStyle = colorString(
                interpolateColors(
                  rgbArray(d / 26 - vars.frameNo / 40),
                  [0, 128, 32],
                  0.5 + Math.sin(d / 6 - vars.frameNo / 8) / 2
                )
              );
              vars.ctx.globalAlpha = a;
              vars.ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
            }
          }
        }
      }
      vars.ctx.fillStyle = "#82f";
      for (let i = -25; i <= 25; i += 1) {
        for (let j = -25; j <= 25; j += 1) {
          x = i * 2;
          z = j * 2;
          y = -vars.floor;
          d = Math.sqrt(x * x + z * z);
          point = project3D(x, y + (d * d) / 85, z, vars);
          if (point.d !== -1) {
            size = 1 + 15000 / (1 + point.d);
            a = 0.15 - Math.pow(d / 50, 4) * 0.15;
            if (a > 0) {
              vars.ctx.fillStyle = colorString(
                interpolateColors(
                  rgbArray(-d / 26 - vars.frameNo / 40),
                  [32, 0, 128],
                  0.5 + Math.sin(-d / 6 - vars.frameNo / 8) / 2
                )
              );
              vars.ctx.globalAlpha = a;
              vars.ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
            }
          }
        }
      }
    }

    function sortFunction(a, b) {
      return b.dist - a.dist;
    }

    function draw(vars) {
      vars.ctx.globalAlpha = 0.15;
      vars.ctx.fillStyle = "#000";
      vars.ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawFloor(vars);

      let point, x, y, z, a, size, d;
      for (let i = 0; i < vars.points.length; ++i) {
        x = vars.points[i].x;
        y = vars.points[i].y;
        z = vars.points[i].z;
        point = project3D(x, y, z, vars);
        if (point.d !== -1) {
          vars.points[i].dist = point.d;
          size = 1 + vars.points[i].radius / (1 + point.d);
          d = Math.abs(vars.points[i].y);
          a = 0.8 - Math.pow(d / (vars.vortexHeight / 2), 1000) * 0.8;
          vars.ctx.globalAlpha = a >= 0 && a <= 1 ? a : 0;
          vars.ctx.fillStyle = rgb(vars.points[i].color);
          if (
            point.x > -1 &&
            point.x < vars.canvas.width &&
            point.y > -1 &&
            point.y < vars.canvas.height
          )
            vars.ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
        }
      }
      vars.points.sort(sortFunction);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (vars) {
        vars.canvas.width = canvas.width;
        vars.canvas.height = canvas.height;
        vars.cx = vars.canvas.width / 2;
        vars.cy = vars.canvas.height / 2;
      }
    }

    function initVars() {
      vars = {};
      vars.canvas = canvas;
      vars.ctx = ctx;
      vars.canvas.width = canvas.width;
      vars.canvas.height = canvas.height;
      vars.frameNo = 0;
      vars.camX = 0;
      vars.camY = 0;
      vars.camZ = -14;
      vars.pitch = elevation(vars.camX, vars.camZ, vars.camY) - Math.PI / 2;
      vars.yaw = 0;
      vars.cx = vars.canvas.width / 2;
      vars.cy = vars.canvas.height / 2;
      vars.bounding = 10;
      vars.scale = 500;
      vars.floor = 26.5;
      vars.points = [];
      vars.initParticles = 1000;
      vars.initV = 0.01;
      vars.distributionRadius = 800;
      vars.vortexHeight = 25;
    }

    function frame() {
      if (vars === undefined) {
        initVars();
      }

      vars.frameNo++;
      animationFrameId = requestAnimationFrame(frame);

      process(vars);
      draw(vars);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    frame();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleVortex;
