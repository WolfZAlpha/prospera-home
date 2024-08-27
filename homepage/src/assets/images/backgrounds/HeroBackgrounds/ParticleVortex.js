import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

function ParticleVortex() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    let camera, particleSystem, portalLight, sceneLight;

    const colorPicks = ["rgb(159, 73, 179)", "rgb(99, 63, 107)", "rgb(247, 209, 255)"];

    const init = () => {
      sceneRef.current = new THREE.Scene();

      portalLight = new THREE.PointLight(0x062d89, 30, 600, 1.7);
      portalLight.position.set(0, 0, 0);
      sceneRef.current.add(portalLight);

      sceneLight = new THREE.DirectionalLight(0xffffff, 0.5);
      sceneLight.position.set(0, 0, 1);
      sceneRef.current.add(sceneLight);

      camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.set(-328.5245281531663, -993.5355675304028, 293.4288988466695);
      camera.rotation.set(1.2836219807732512, -0.30708902289527645, 0.7970220788330016);

      rendererRef.current = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });

      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current.setPixelRatio(window.devicePixelRatio);
      rendererRef.current.setClearColor(0x000000, 1);

      if (mountRef.current) {
        mountRef.current.appendChild(rendererRef.current.domElement);
      }

      controlsRef.current = new OrbitControls(camera, rendererRef.current.domElement);
      controlsRef.current.enableDamping = true;
      controlsRef.current.dampingFactor = 0.05;
      controlsRef.current.screenSpacePanning = false;
      controlsRef.current.minDistance = 100;
      controlsRef.current.maxDistance = 500;
      controlsRef.current.maxPolarAngle = Math.PI / 2;

      const particleCount = 65000;
      const positions = [];
      const colors = [];
      const sizes = [];
      const angles = [];
      const particles = new THREE.BufferGeometry();

      function createParticle() {
        const length = Math.random() * (window.innerWidth / 2 - 35) + 35;
        const p = Math.random() * 360;
        const pX = length * Math.cos(p * (Math.PI / 180));
        const pY = length * Math.sin(p * (Math.PI / 180));
        const pZ = Math.random() * 50 - 130;

        colors.push(0, 0, 0);
        sizes.push(Math.random() * 60 + 10);
        positions.push(pX, pY, pZ);
        angles.push(p);
      }

      for (let p = 0; p < particleCount; p++) {
        createParticle();
      }

      particles.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      particles.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
      particles.setAttribute(
        "size",
        new THREE.Float32BufferAttribute(sizes, 1).setUsage(THREE.DynamicDrawUsage)
      );
      particles.setAttribute(
        "angle",
        new THREE.Float32BufferAttribute(angles, 1).setUsage(THREE.DynamicDrawUsage)
      );

      const pMaterial = new THREE.ShaderMaterial({
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        vertexColors: true,
        vertexShader: `
          attribute float size;
          varying vec3 vColor;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_PointSize = size * ( 300.0 / -mvPosition.z );
            gl_Position = projectionMatrix * mvPosition;
          }`,
        fragmentShader: `
          uniform sampler2D pointTexture;
          varying vec3 vColor;
          void main() {
            vec3 whiteColor = vec3(1,1,1);
            vec2 xy = gl_PointCoord.xy - vec2(0.5);
            float ll = 1.0 - length(xy)/0.1;
            vec3 mixColor = mix(vColor, whiteColor,ll);
            gl_FragColor = vec4(mixColor, smoothstep(0.0, 2.0,ll));
          }`,
      });

      particleSystem = new THREE.Points(particles, pMaterial);
      sceneRef.current.add(particleSystem);

      particleSystem.position.set(0, 0, 0);
      particleSystem.sortParticles = true;

      window.addEventListener("resize", onWindowResize, false);
    };

    const onWindowResize = () => {
      const parentHeight = mountRef.current.parentElement.clientHeight;
      camera.aspect = window.innerWidth / parentHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, parentHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      if (Math.random() > 0.9) {
        portalLight.power = 350 + Math.random() * 500;
      }

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      const angle = particleSystem.geometry.attributes.angle.array;
      const sizes = particleSystem.geometry.attributes.size.array;
      const colorsz = particleSystem.geometry.attributes.color.array;
      const positions = particleSystem.geometry.attributes.position.array;

      for (let x = 0; x < angle.length; x++) {
        angle[x] = angle[x] + Math.floor(Math.random() * 5) / 20;
      }
      particleSystem.geometry.attributes.angle.needsUpdate = true;

      for (let y = 0; y < positions.length; y += 3) {
        const distance = Math.sqrt(Math.pow(positions[y], 2) + Math.pow(positions[y + 1], 2));

        if (distance > 30) {
          if (sizes[y / 3] < 30) {
            sizes[y / 3] += Math.random();
          }
          positions[y] = (distance - Math.random() / 10) * Math.cos(angle[y / 3] * (Math.PI / 180));
          positions[y + 1] =
            (distance - Math.random() / 10) * Math.sin(angle[y / 3] * (Math.PI / 180));
          positions[y + 2] += 2 / distance;
        }
        if (distance < 30) {
          positions[y] =
            (distance - Math.random() * 0.1) * Math.cos(angle[y / 3] * (Math.PI / 180));
          positions[y + 1] =
            (distance - Math.random() * 0.1) * Math.sin(angle[y / 3] * (Math.PI / 180));
          positions[y + 2] += 4 / distance;
          colorsz[y] -= 0.001;
          colorsz[y + 1] -= 0.001;
          colorsz[y + 2] -= 0.001;
          sizes[y / 3] -= 0.0;
        }
        if (colorsz[y] <= 0 && colorsz[y + 1] <= 0 && colorsz[y + 2] <= 0) {
          const newStartDistance = Math.random() * (window.innerWidth / 2 - 35) + 35;
          angle[y / 3] = Math.random() * 360;
          positions[y] = newStartDistance * Math.cos(angle[y / 3] * (Math.PI / 180));
          positions[y + 1] = newStartDistance * Math.sin(angle[y / 3] * (Math.PI / 180));
          positions[y + 2] = Math.random() * 50 - 130;
          const color = new THREE.Color(colorPicks[Math.floor(Math.random() * colorPicks.length)]);
          colorsz[y] = color.r;
          colorsz[y + 1] = color.g;
          colorsz[y + 2] = color.b;
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.geometry.attributes.size.needsUpdate = true;
      particleSystem.geometry.attributes.color.needsUpdate = true;

      if (rendererRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, camera);
      }
    };

    init();
    animate();
    onWindowResize();

    return () => {
      window.removeEventListener("resize", onWindowResize);

      if (controlsRef.current) {
        controlsRef.current.dispose();
      }

      if (sceneRef.current && particleSystem) {
        sceneRef.current.remove(particleSystem);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (mountRef.current && mountRef.current.childNodes[0]) {
        mountRef.current.removeChild(mountRef.current.childNodes[0]);
      }
    };
  }, []);

  return (
    <MKBox
      ref={mountRef}
      width="100%"
      height="flex"
      position="absolute"
      top={0}
      left={0}
      zIndex={0}
      sx={{
        "& canvas": {
          display: "block",
        },
      }}
    />
  );
}

export default ParticleVortex;
