import React, { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import PropTypes from "prop-types";

const OmniRobot = ({ onPositionChange }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const robotRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const mixerRef = useRef(null);
  const dragControlsRef = useRef(null);
  const animationFrameId = useRef(null);
  const isDragging = useRef(false);
  const particleSystemRef = useRef(null);

  const initializeScene = useCallback(() => {
    const containerWidth = window.innerWidth / 2;
    const containerHeight = window.innerHeight / 2;

    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      containerWidth / containerHeight,
      0.1,
      1000
    );
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current.setSize(containerWidth, containerHeight);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(rendererRef.current.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040);
    sceneRef.current.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00ffff, 1, 100);
    pointLight.position.set(0, 10, 10);
    sceneRef.current.add(pointLight);

    robotRef.current = new THREE.Group();
    sceneRef.current.add(robotRef.current);
    robotRef.current.scale.set(0.5, 0.5, 0.5);

    cameraRef.current.position.z = 2.5;

    mixerRef.current = new THREE.AnimationMixer(robotRef.current);

    dragControlsRef.current = new DragControls(
      [robotRef.current],
      cameraRef.current,
      rendererRef.current.domElement
    );
    dragControlsRef.current.addEventListener("dragstart", () => {
      isDragging.current = true;
      robotRef.current.position.z = 0;
    });
    dragControlsRef.current.addEventListener("drag", (event) => {
      updateParticleSystem(event.object.position);
    });
    dragControlsRef.current.addEventListener("dragend", () => {
      isDragging.current = false;
      onPositionChange(robotRef.current.position);
    });

    createRobotParts();
  }, [onPositionChange]);

  const createRobotParts = useCallback(() => {
    const quantumCore = createQuantumCore();
    robotRef.current.add(quantumCore);

    const nanoSurface = createNanoSurface();
    robotRef.current.add(nanoSurface);

    const dataField = createDataField();
    robotRef.current.add(dataField);

    const energyConduits = createEnergyConduits();
    robotRef.current.add(energyConduits);

    const temporalDistortion = createTemporalDistortion();
    sceneRef.current.add(temporalDistortion);

    const aiSynapses = createAISynapses();
    robotRef.current.add(aiSynapses);

    const dimensionalPhasing = createDimensionalPhasing();
    robotRef.current.add(dimensionalPhasing);

    const thoughtParticles = createThoughtParticles();
    robotRef.current.add(thoughtParticles);

    particleSystemRef.current = createParticleSystem();
    sceneRef.current.add(particleSystemRef.current);
  }, []);

  const createQuantumCore = () => {
    const geometry = new THREE.IcosahedronGeometry(0.5, 4);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vNormal = normal;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vec3 color1 = vec3(0.0, 1.0, 1.0);
          vec3 color2 = vec3(1.0, 0.0, 1.0);
          vec3 color = mix(color1, color2, sin(vPosition.x * 10.0 + time) * 0.5 + 0.5);

          float intensity = sin(vPosition.x * 20.0 + time * 2.0) * 
                            sin(vPosition.y * 20.0 + time * 3.0) * 
                            sin(vPosition.z * 20.0 + time * 4.0);
          intensity = pow(0.5 + 0.5 * intensity, 2.0);

          gl_FragColor = vec4(color * intensity, 1.0);
        }
      `,
      wireframe: true,
    });
    return new THREE.Mesh(geometry, material);
  };

  const createNanoSurface = () => {
    const geometry = new THREE.SphereGeometry(0.7, 64, 64);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vNormal = normal;
          vPosition = position;
          vec3 newPosition = position + normal * (sin(position.x * 20.0 + time) * 0.02);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vec3 color = vec3(0.0, 0.5, 1.0);
          float intensity = pow(0.5 + 0.5 * sin(vPosition.x * 20.0 + vPosition.y * 20.0 + time * 2.0), 2.0);
          gl_FragColor = vec4(color * intensity, 0.7);
        }
      `,
      transparent: true,
    });
    return new THREE.Mesh(geometry, material);
  };

  const createDataField = () => {
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vNormal = normal;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vec3 color = vec3(0.0, 1.0, 1.0);
          float intensity = sin(vPosition.x * 20.0 + time * 2.0) * 
                            sin(vPosition.y * 20.0 + time * 3.0) * 
                            sin(vPosition.z * 20.0 + time * 4.0);
          intensity = pow(0.5 + 0.5 * intensity, 2.0);
          gl_FragColor = vec4(color, intensity * 0.2);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
    return new THREE.Mesh(geometry, material);
  };

  const createEnergyConduits = () => {
    const group = new THREE.Group();
    const conduitCount = 10;

    for (let i = 0; i < conduitCount; i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).multiplyScalar(0.5),
        new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).multiplyScalar(0.7),
        new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).multiplyScalar(0.5),
      ]);
      const geometry = new THREE.TubeGeometry(curve, 64, 0.01, 8, false);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          varying vec2 vUv;

          void main() {
            float energy = sin(vUv.x * 20.0 - time * 5.0) * 0.5 + 0.5;
            vec3 color = mix(vec3(0.0, 1.0, 1.0), vec3(1.0, 1.0, 1.0), energy);
            gl_FragColor = vec4(color, energy);
          }
        `,
        transparent: true,
      });
      const conduit = new THREE.Mesh(geometry, material);
      group.add(conduit);
    }

    return group;
  };

  const createTemporalDistortion = () => {
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vNormal = normal;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vec3 color = vec3(0.5, 0.0, 1.0);
          float distortion = sin(vPosition.x * 10.0 + time) * 
                             sin(vPosition.y * 10.0 + time * 1.1) * 
                             sin(vPosition.z * 10.0 + time * 1.2);
          float intensity = pow(0.2 + 0.2 * distortion, 2.0);
          gl_FragColor = vec4(color, intensity * 0.1);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
    return new THREE.Mesh(geometry, material);
  };

  const createAISynapses = () => {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.01,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);

    const innerRadius = 0.6;
    const outerRadius = 1.0;

    for (let i = 0; i < particleCount; i++) {
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return new THREE.Points(geometry, material);
  };

  const createDimensionalPhasing = () => {
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vNormal = normal;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vec3 color = vec3(1.0, 0.5, 1.0);
          float phase = sin(vPosition.x * 10.0 + time * 2.0) * 
                        sin(vPosition.y * 10.0 + time * 3.0) * 
                        sin(vPosition.z * 10.0 + time * 4.0);
          float intensity = pow(0.5 + 0.5 * phase, 2.0);
          gl_FragColor = vec4(color, intensity * 0.5);
        }
      `,
      transparent: true,
    });
    return new THREE.Mesh(geometry, material);
  };

  const createThoughtParticles = () => {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
          attribute float size;
          uniform float time;
          varying vec3 vColor;

          void main() {
            vColor = color;
            vec3 pos = position;

            float angle = time * 0.1 + atan(pos.x, pos.z);
            float radius = length(vec2(pos.x, pos.z));
            pos.x = cos(angle) * radius;
            pos.z = sin(angle) * radius;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
      fragmentShader: `
          uniform float time;
          varying vec3 vColor;

          void main() {
            float d = distance(gl_PointCoord, vec2(0.5));
            if(d > 0.5) discard;
            gl_FragColor = vec4(vColor, 1.0 - (d * 2.0));
          }
        `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const innerRadius = 0.8;
    const outerRadius = 1.2;

    for (let i = 0; i < particleCount; i++) {
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
      const theta = Math.random() * Math.PI * 2;

      positions[i * 3] = radius * Math.cos(theta);
      positions[i * 3 + 1] = Math.random() * 0.02 - 0.01;
      positions[i * 3 + 2] = radius * Math.sin(theta);

      colors[i * 3] = 0;
      colors[i * 3 + 1] = 1;
      colors[i * 3 + 2] = 1;

      sizes[i] = Math.random() * 0.01 + 0.001;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    return new THREE.Points(geometry, material);
  };

  const createParticleSystem = () => {
    const particleCount = 300;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = positions[i * 3 + 1] = positions[i * 3 + 2] = 0;
      velocities[i * 3] = (Math.random() - 0.5) * 0.05;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.05;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.05;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.02,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    return new THREE.Points(geometry, material);
  };

  const updateParticleSystem = (position) => {
    if (!particleSystemRef.current) return;

    const positions = particleSystemRef.current.geometry.attributes.position.array;
    const velocities = particleSystemRef.current.geometry.attributes.velocity.array;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += velocities[i];
      positions[i + 1] += velocities[i + 1];
      positions[i + 2] += velocities[i + 2];

      if (Math.random() > 0.98) {
        positions[i] = position.x;
        positions[i + 1] = position.y;
        positions[i + 2] = position.z;
      }
    }

    particleSystemRef.current.geometry.attributes.position.needsUpdate = true;
  };

  const animate = useCallback(() => {
    animationFrameId.current = requestAnimationFrame(animate);

    const delta = clockRef.current.getDelta();
    const elapsedTime = clockRef.current.getElapsedTime();

    robotRef.current.traverse((child) => {
      if (child.material && child.material.uniforms) {
        child.material.uniforms.time.value = elapsedTime;
      }
    });

    robotRef.current.rotation.y += 0.001;

    if (isDragging.current) {
      updateParticleSystem(robotRef.current.position);
    }

    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }, []);

  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    cameraRef.current.aspect = newWidth / newHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(newWidth, newHeight);
  }, []);

  useEffect(() => {
    initializeScene();
    animate();

    gsap.from(robotRef.current.position, {
      y: -5,
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(robotRef.current.position, {
          y: "+=0.1",
          duration: 1.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      },
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId.current);
      if (mountRef.current && rendererRef.current.domElement) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      sceneRef.current.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      rendererRef.current.dispose();
    };
  }, [initializeScene, animate, handleResize]);

  return (
    <div
      ref={mountRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        zIndex: 1000,
      }}
    />
  );
};

OmniRobot.propTypes = {
  onPositionChange: PropTypes.func.isRequired,
};

export default React.memo(OmniRobot);
