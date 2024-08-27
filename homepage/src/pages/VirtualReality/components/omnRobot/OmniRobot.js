import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import PropTypes from "prop-types";

const OmniRobot = ({ onPositionChange }) => {
  const mountRef = useRef(null);
  const robotRef = useRef(null);
  const particleSystemRef = useRef(null); // This was missing in the previous code
  const dragging = useRef(false);

  useEffect(() => {
    let scene,
      camera,
      renderer,
      robot,
      quantumCore,
      dataField,
      nanoSurface,
      energyConduits,
      temporalDistortion,
      aiSynapses,
      dimensionalPhasing,
      thoughtParticles,
      particleSystem;
    let clock = new THREE.Clock();
    let mixer;
    let dragControls;
    let animationFrameId;

    const containerWidth = window.innerWidth / 2;
    const containerHeight = window.innerHeight / 2;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(containerWidth, containerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      mountRef.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0x00ffff, 1, 100);
      pointLight.position.set(0, 10, 10);
      scene.add(pointLight);

      robot = new THREE.Group();
      scene.add(robot);
      robotRef.current = robot;

      // Scale the robot to 50% of its original size
      robot.scale.set(0.5, 0.5, 0.5);

      quantumCore = createQuantumCore();
      robot.add(quantumCore);

      nanoSurface = createNanoSurface();
      robot.add(nanoSurface);

      dataField = createDataField();
      robot.add(dataField);

      energyConduits = createEnergyConduits();
      robot.add(energyConduits);

      temporalDistortion = createTemporalDistortion();
      scene.add(temporalDistortion);

      aiSynapses = createAISynapses();
      robot.add(aiSynapses);

      dimensionalPhasing = createDimensionalPhasing();
      robot.add(dimensionalPhasing);

      thoughtParticles = createThoughtParticles();
      robot.add(thoughtParticles);

      particleSystem = createParticleSystem();
      scene.add(particleSystem);
      particleSystemRef.current = particleSystem;

      camera.position.z = 2.5; // Adjusted to ensure the entire robot is visible

      mixer = new THREE.AnimationMixer(robot);

      // Add drag controls
      dragControls = new DragControls([robot], camera, renderer.domElement);
      dragControls.addEventListener("dragstart", () => {
        dragging.current = true;
        robot.position.z = 0; // Ensure the robot stays at the same depth while dragging
      });
      dragControls.addEventListener("drag", (event) => {
        // Update the particle system with the new position
        updateParticleSystem(event.object.position);
      });
      dragControls.addEventListener("dragend", () => {
        dragging.current = false;
        onPositionChange(robot.position);
      });
    };

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
        color: 0x00ffff, // Cyan color
        size: 0.01, // Smaller size
        transparent: true,
        opacity: 0.5, // Increase transparency (lower opacity)
        blending: THREE.AdditiveBlending,
      });

      const particleCount = 500; // Number of particles
      const positions = new Float32Array(particleCount * 3);

      const innerRadius = 0.6; // Just outside the quantum core
      const outerRadius = 1.0; // Inside the data field

      for (let i = 0; i < particleCount; i++) {
        const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
        const theta = Math.random() * Math.PI * 2; // Azimuthal angle
        const phi = Math.acos(Math.random() * 2 - 1); // Polar angle

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
              
              // Orbital motion for a flat ring (Saturn-like)
              float angle = time * 0.1 + atan(pos.x, pos.z); // Slow rotation
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

      const particleCount = 200; // Increased for denser rings
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      const innerRadius = 0.8; // Inner edge of the rings
      const outerRadius = 1.2; // Outer edge of the rings

      for (let i = 0; i < particleCount; i++) {
        const radius = innerRadius + Math.random() * (outerRadius - innerRadius); // Spread particles between inner and outer radius
        const theta = Math.random() * Math.PI * 2;

        positions[i * 3] = radius * Math.cos(theta);
        positions[i * 3 + 1] = Math.random() * 0.02 - 0.01; // Keep particles within a thin plane
        positions[i * 3 + 2] = radius * Math.sin(theta);

        colors[i * 3] = 0;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;

        sizes[i] = Math.random() * 0.01 + 0.001; // Tiny particles
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      return new THREE.Points(geometry, material);
    };

    const createParticleSystem = () => {
      const particleCount = 300; // Reduced particle count for subtle effect
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);

      // Initialize particle positions and velocities
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
        size: 0.02, // Smaller size for subtle effect
        transparent: true,
        opacity: 0.4, // Lower opacity for subtle effect
        blending: THREE.AdditiveBlending,
      });

      const particleSystem = new THREE.Points(geometry, material);
      return particleSystem;
    };

    const updateParticleSystem = (position) => {
      const positions = particleSystemRef.current.geometry.attributes.position.array;
      const velocities = particleSystemRef.current.geometry.attributes.velocity.array;

      // Update particle positions based on velocities
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        // If the particle is too far away, reset it near the robot
        if (Math.random() > 0.98) {
          // Increased likelihood of resetting for more subtle effect
          positions[i] = position.x;
          positions[i + 1] = position.y;
          positions[i + 2] = position.z;
        }
      }

      particleSystemRef.current.geometry.attributes.position.needsUpdate = true;
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Update all shader uniforms
      robot.traverse((child) => {
        if (child.material && child.material.uniforms) {
          child.material.uniforms.time.value = elapsedTime;
        }
      });

      // Rotate the entire robot slowly
      robot.rotation.y += 0.001;

      // Animate quantum core
      quantumCore.scale.x = 1 + Math.sin(elapsedTime * 2) * 0.1;
      quantumCore.scale.y = 1 + Math.sin(elapsedTime * 2.5) * 0.1;
      quantumCore.scale.z = 1 + Math.sin(elapsedTime * 3) * 0.1;

      // Animate dimensional phasing
      dimensionalPhasing.material.opacity = 0.5 + Math.sin(elapsedTime * 2) * 0.3;

      // Animate thought particles
      thoughtParticles.material.uniforms.time.value = elapsedTime;

      // Update the particle system
      if (dragging.current) {
        updateParticleSystem(robot.position);
      }

      // Update the animation mixer
      if (mixer) {
        mixer.update(delta);
      }

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    init();
    animate();

    // Initial animation
    gsap.from(robot.position, {
      y: -5, // Adjusted for the new scale
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(robot.position, {
          y: "+=0.1", // Adjusted for the new scale
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
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Dispose of Three.js objects
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [onPositionChange]);

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

export default OmniRobot;
