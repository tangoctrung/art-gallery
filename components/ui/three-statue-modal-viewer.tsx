"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type ThreeStatueModalViewerProps = {
  modelSrc: string;
  title: string;
  className?: string;
};

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) {
      return;
    }

    child.geometry.dispose();

    const materials = Array.isArray(child.material)
      ? child.material
      : [child.material];

    materials.forEach((material) => {
      Object.values(material).forEach((value) => {
        if (value instanceof THREE.Texture) {
          value.dispose();
        }
      });

      material.dispose();
    });
  });
}

function centerModel(model: THREE.Object3D) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxAxis = Math.max(size.x, size.y, size.z);
  const scale = maxAxis > 0 ? 3.25 / maxAxis : 1;

  model.position.sub(center);
  model.scale.setScalar(scale);
}

export default function ThreeStatueModalViewer({
  modelSrc,
  title,
  className = "",
}: ThreeStatueModalViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    let isMounted = true;
    let frameId = 0;
    let statueObject: THREE.Object3D | null = null;

    setLoadFailed(false);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x090909, 7, 12);

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 1.15, 6.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.display = "block";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.style.width = "100%";
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 3.4;
    controls.maxDistance = 9;
    controls.target.set(0, 0.28, 0);
    controls.update();

    scene.add(new THREE.HemisphereLight(0xffffff, 0x1f1f1f, 1.45));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.7);
    keyLight.position.set(3, 4.2, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x9fc8ff, 1.6);
    rimLight.position.set(-3.5, 2.3, -4);
    scene.add(rimLight);

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(2.6, 96),
      new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.04,
        roughness: 0.72,
      }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.05;
    scene.add(floor);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      modelSrc,
      (gltf) => {
        if (!isMounted) {
          disposeObject(gltf.scene);
          return;
        }

        centerModel(gltf.scene);
        scene.add(gltf.scene);
        statueObject = gltf.scene;
      },
      undefined,
      () => {
        if (isMounted) {
          setLoadFailed(true);
        }
      },
    );

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();

      if (!width || !height) {
        return;
      }

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const render = () => {
      controls.update();
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      isMounted = false;
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();

      if (statueObject) {
        scene.remove(statueObject);
        disposeObject(statueObject);
      }

      floor.geometry.dispose();
      (floor.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.forceContextLoss();

      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [modelSrc]);

  return (
    <div
      ref={mountRef}
      className={`relative h-full min-h-[420px] w-full overflow-hidden rounded-[6px] bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.11),rgba(255,255,255,0)_38%),#050505] ${className}`}
      role="img"
      aria-label={`Mô hình 3D ${title}`}
    >
      {loadFailed ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm text-white/62">
          Không tải được file 3D.
        </div>
      ) : null}
    </div>
  );
}
