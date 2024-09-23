/** 
=========================================================
* PROSPERA DEFI DASHBOARD - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI DASHBOARD.
*/

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import PDBox from "../../components/PDBox";

function Globe({ canvasStyle, ...rest }) {
  const globeRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    function createGlobe() {
      const container = globeRef.current;
      const canvas = canvasRef.current;

      const globeRadius = 100;
      const globeWidth = 4098 / 2;
      const globeHeight = 1968 / 2;

      function convertFlatCoordsToSphereCoords(x, y) {
        let latitude = ((x - globeWidth) / globeWidth) * -180;
        let longitude = ((y - globeHeight) / globeHeight) * -90;
        latitude = (latitude * Math.PI) / 180;
        longitude = (longitude * Math.PI) / 180;
        const radius = Math.cos(longitude) * globeRadius;

        return {
          x: Math.cos(latitude) * radius,
          y: Math.sin(longitude) * globeRadius,
          z: Math.sin(latitude) * radius,
        };
      }

      function makeMagic(points) {
        const { width, height } = container.getBoundingClientRect();

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height);
        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: true,
        });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);

        const mergedGeometry = new THREE.BufferGeometry();

        const pointMaterial = new THREE.ShaderMaterial({
          uniforms: {
            color: { value: new THREE.Color(0x01ff02) },
            outlineColor: { value: new THREE.Color(0xffffff) },
            outlineWidth: { value: 0.1 },
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = 2.0;
            }
          `,
          fragmentShader: `
            uniform vec3 color;
            uniform vec3 outlineColor;
            uniform float outlineWidth;
            varying vec2 vUv;
            void main() {
              float dist = distance(gl_PointCoord, vec2(0.5));
              if (dist > 0.5) discard;
              if (dist > 0.5 - outlineWidth) {
                gl_FragColor = vec4(outlineColor, 1.0);
              } else {
                gl_FragColor = vec4(color, 1.0);
              }
            }
          `,
        });

        const positions = [];
        for (const point of points) {
          const { x, y, z } = convertFlatCoordsToSphereCoords(point.x, point.y, width, height);
          if (x && y && z) {
            positions.push(x, y, z);
          }
        }
        mergedGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

        const globeShape = new THREE.Points(mergedGeometry, pointMaterial);
        scene.add(globeShape);

        const loader = new FontLoader();
        loader.load(
          "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
          function (font) {
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0x01ff02 });

            function createCurvedText(text, startAngle, endAngle, yPosition, letterSpacing = 1) {
              const group = new THREE.Group();
              const angleStep = ((endAngle - startAngle) / (text.length - 1)) * letterSpacing;

              for (let i = 0; i < text.length; i++) {
                const charGeometry = new TextGeometry(text[i], {
                  font: font,
                  size: 8,
                  height: 2,
                });
                const charMesh = new THREE.Mesh(charGeometry, textMaterial);
                const angle = startAngle + i * angleStep;
                charMesh.position.set(
                  (globeRadius + 5) * Math.cos(angle),
                  yPosition,
                  (globeRadius + 5) * Math.sin(angle)
                );
                charMesh.rotation.y = Math.PI / 2 - angle;

                const outlineMaterial = new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  side: THREE.BackSide,
                });
                const outlineMesh = new THREE.Mesh(charGeometry, outlineMaterial);
                outlineMesh.position.copy(charMesh.position);
                outlineMesh.rotation.copy(charMesh.rotation);
                outlineMesh.scale.multiplyScalar(1.05);

                group.add(outlineMesh);
                group.add(charMesh);
              }
              scene.add(group);
            }

            createCurvedText("PROSPERA", Math.PI / 4, -Math.PI / 4, 0, 0.75);
            createCurvedText("C.C.I", Math.PI + Math.PI / 8, Math.PI - Math.PI / 8, 0, 0.75);
          }
        );

        container.classList.add("peekaboo");

        const controls = new OrbitControls(camera, canvas);
        controls.enableKeys = false;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableDamping = false;
        controls.enableRotate = true;
        controls.autoRotate = true;
        camera.position.z = -265;

        function animate() {
          controls.update();
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        }
        animate();
      }

      function hasWebGL() {
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        return gl && gl instanceof WebGLRenderingContext;
      }

      function init() {
        if (hasWebGL()) {
          window
            .fetch(
              "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/js/points.json"
            )
            .then((response) => response.json())
            .then((data) => makeMagic(data.points));
        }
      }

      return navigator.onLine
        ? init()
        : console.error(
            "Globe component can't load its data, please make sure that you're connected to the internet."
          );
    }

    createGlobe();
  }, []);

  return (
    <PDBox ref={globeRef} {...rest}>
      <canvas
        ref={canvasRef}
        width="700"
        height="600"
        style={{ outline: "none", ...canvasStyle }}
      />
    </PDBox>
  );
}

Globe.defaultProps = {
  canvasStyle: {},
};

Globe.propTypes = {
  canvasStyle: PropTypes.objectOf(PropTypes.any),
};

export default Globe;
