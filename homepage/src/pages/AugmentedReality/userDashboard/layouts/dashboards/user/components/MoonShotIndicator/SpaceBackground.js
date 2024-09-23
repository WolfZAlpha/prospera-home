/** 

=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.

*/

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const SpaceBackground = () => {
  const mountRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const lightSpeed = useRef(1);
  const animationRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog("#000000", 750, 1000);
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const stars = [];
    const starCount = 1000;
    const asteroids = [];
    const asteroidCount = 10;
    let asteroidSpawn = 100;
    let cameraZ = 0;
    let speedStop = false;

    const randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const newStar = () => {
      const geometry = new THREE.SphereGeometry(1, 8, 8);
      const material = new THREE.MeshBasicMaterial({ color: "white" });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      const w2 = width / 2;
      const h2 = height / 2;
      sphere.position.x = randint(-w2, w2);
      sphere.position.y = randint(-h2, h2);
      sphere.position.z = cameraZ - 1000;
      return { sphere };
    };

    const newAsteroid = () => {
      const geometry = new THREE.SphereGeometry(1, randint(3, 5), randint(2, 5));
      const material = new THREE.MeshBasicMaterial({ color: "gray" });
      const shape = new THREE.Mesh(geometry, material);
      scene.add(shape);
      const w2 = width / 2;
      const h2 = height / 2;
      shape.position.x = randint(-w2 / 100, w2 / 100);
      shape.position.y = randint(-h2 / 100, h2 / 100);
      shape.position.z = cameraZ - 1000;
      shape.scale.x = randint(1, 3);
      shape.scale.y = randint(1, 3);
      shape.scale.z = randint(1, 3);
      return { shape };
    };

    camera.position.z = cameraZ;

    const lightS = () => {
      if (isHovering) {
        lightSpeed.current = 2;
      }
    };

    mount.addEventListener("click", lightS, false);

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      mainloop();
      renderer.render(scene, camera);
    };

    const mainloop = () => {
      if (stars.length < starCount) {
        stars.push(newStar());
      }
      if (asteroids.length < asteroidCount) {
        asteroidSpawn -= 1;
        if (asteroidSpawn === 0) {
          asteroids.push(newAsteroid());
          asteroidSpawn = 100;
        }
      }

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (star.sphere.position.z > cameraZ) {
          scene.remove(star.sphere);
          stars.splice(i, 1);
        }
        star.sphere.scale.z = lightSpeed.current;
      }

      for (let i = 0; i < asteroids.length; i++) {
        const asteroid = asteroids[i];
        if (asteroid.shape.position.z > cameraZ) {
          scene.remove(asteroid.shape);
          asteroids.splice(i, 1);
        }
        asteroid.shape.rotation.x += 0.01;
        asteroid.shape.rotation.y += 0.01;
      }

      if (!speedStop) {
        if (lightSpeed.current > 1) {
          lightSpeed.current += 2;
        }
        if (lightSpeed.current > 300) {
          speedStop = true;
        }
      } else {
        lightSpeed.current -= 5;
        if (lightSpeed.current < 2) {
          speedStop = false;
          lightSpeed.current = 1;
        }
      }

      if (lightSpeed.current > 150) {
        cameraZ -= lightSpeed.current / 2;
      } else {
        cameraZ -= 1;
      }

      let lookX = 0;
      let lookY = 0;

      if (isHovering) {
        lookX = -(mousePosition.current.x - width / 2) / 50;
        lookY = (mousePosition.current.y - height / 2) / 50;
      }

      const lookAt = new THREE.Vector3(lookX, lookY, cameraZ - 10);
      camera.position.z = cameraZ;
      camera.lookAt(lookAt);
    };

    animate();

    const handleResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      mount.removeEventListener("click", lightS);
      mount.removeChild(renderer.domElement);
    };
  }, [isHovering]);

  const handleMouseMove = (event) => {
    if (isHovering) {
      const rect = mountRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }
  };

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    />
  );
};

export default SpaceBackground;
