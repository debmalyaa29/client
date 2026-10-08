"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface MachineryCanvasProps {
  machineType: "destoner" | "sortex";
  exploded: boolean;
  onSelectPart?: (partName: string) => void;
  className?: string;
}

export default function MachineryCanvas({
  machineType,
  exploded,
  className = "",
}: MachineryCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(3.5, 2.5, 4.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Machine Main Group
    const machineGroup = new THREE.Group();
    scene.add(machineGroup);

    // Materials - Luxury Industrial Finish
    const mainBodyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#25221D"),
      roughness: 0.35,
      metalness: 0.65,
    });
    const ivoryPanelMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#EFE7D8"),
      roughness: 0.5,
      metalness: 0.2,
    });
    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#B08A3E"),
      roughness: 0.3,
      metalness: 0.85,
    });
    const steelMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#9CA3AF"),
      roughness: 0.25,
      metalness: 0.9,
    });

    // Sub-components references for animation
    const parts: { mesh: THREE.Object3D; basePos: THREE.Vector3; explodePos: THREE.Vector3; name: string }[] = [];

    if (machineType === "destoner") {
      // 1. Heavy Base Frame
      const baseGeo = new THREE.BoxGeometry(2.4, 0.4, 1.8);
      const baseMesh = new THREE.Mesh(baseGeo, mainBodyMat);
      baseMesh.position.set(0, -0.9, 0);
      machineGroup.add(baseMesh);
      parts.push({ mesh: baseMesh, basePos: new THREE.Vector3(0, -0.9, 0), explodePos: new THREE.Vector3(0, -1.3, 0), name: "Rigid Cast Iron Sub-Base" });

      // 2. Twin Eccentric Vibratory Motors (Gold accents)
      const motorGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 16);
      const motorLeft = new THREE.Mesh(motorGeo, goldAccentMat);
      motorLeft.rotation.z = Math.PI / 2;
      motorLeft.position.set(-0.7, -0.5, 0.85);
      machineGroup.add(motorLeft);
      parts.push({ mesh: motorLeft, basePos: new THREE.Vector3(-0.7, -0.5, 0.85), explodePos: new THREE.Vector3(-1.2, -0.8, 1.4), name: "Twin Eccentric Vibratory Drive" });

      // 3. Multi-Deck Sieve Box Body
      const sieveBoxGeo = new THREE.BoxGeometry(2.1, 0.9, 1.5);
      const sieveBox = new THREE.Mesh(sieveBoxGeo, ivoryPanelMat);
      sieveBox.position.set(0, -0.15, 0);
      sieveBox.rotation.z = -0.08; // 8 degree inclination
      machineGroup.add(sieveBox);
      parts.push({ mesh: sieveBox, basePos: new THREE.Vector3(0, -0.15, 0), explodePos: new THREE.Vector3(0, 0.2, 0), name: "Double-Deck Fluidized Sieve Chamber" });

      // 4. Stainless Steel Screen Deck (Internal visible)
      const screenGeo = new THREE.BoxGeometry(1.9, 0.05, 1.3);
      const screenMesh = new THREE.Mesh(screenGeo, steelMat);
      screenMesh.position.set(0, 0.1, 0);
      screenMesh.rotation.z = -0.08;
      machineGroup.add(screenMesh);
      parts.push({ mesh: screenMesh, basePos: new THREE.Vector3(0, 0.1, 0), explodePos: new THREE.Vector3(0, 0.8, 0), name: "Precision Perforated Woven Separation Screen" });

      // 5. Upper Negative Pressure Aspiration Hood
      const hoodGeo = new THREE.ConeGeometry(0.8, 0.9, 4);
      const hoodMesh = new THREE.Mesh(hoodGeo, mainBodyMat);
      hoodMesh.rotation.y = Math.PI / 4;
      hoodMesh.position.set(0, 0.95, 0);
      machineGroup.add(hoodMesh);
      parts.push({ mesh: hoodMesh, basePos: new THREE.Vector3(0, 0.95, 0), explodePos: new THREE.Vector3(0, 1.6, 0), name: "Negative Pressure Aspiration Exhaust Hood" });

      // 6. Air Regulation Valve & Sight Glass
      const valveGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.3, 16);
      const valveMesh = new THREE.Mesh(valveGeo, goldAccentMat);
      valveMesh.position.set(0, 1.5, 0);
      machineGroup.add(valveMesh);
      parts.push({ mesh: valveMesh, basePos: new THREE.Vector3(0, 1.5, 0), explodePos: new THREE.Vector3(0, 2.3, 0), name: "Micro-Differential Air Regulator" });
    } else {
      // Sortex Color Sorter Structure
      // 1. Column Cabinet Enclosure
      const cabGeo = new THREE.BoxGeometry(1.8, 2.4, 1.4);
      const cabMesh = new THREE.Mesh(cabGeo, ivoryPanelMat);
      cabMesh.position.set(0, 0, 0);
      machineGroup.add(cabMesh);
      parts.push({ mesh: cabMesh, basePos: new THREE.Vector3(0, 0, 0), explodePos: new THREE.Vector3(0, 0, -0.6), name: "Dust-Sealed Precision Inspection Cabinet" });

      // 2. Cascade Gravity Chutes (Gold)
      const chuteGeo = new THREE.BoxGeometry(1.4, 1.6, 0.15);
      const chuteMesh = new THREE.Mesh(chuteGeo, goldAccentMat);
      chuteMesh.rotation.x = 0.25;
      chuteMesh.position.set(0, 0.2, 0.45);
      machineGroup.add(chuteMesh);
      parts.push({ mesh: chuteMesh, basePos: new THREE.Vector3(0, 0.2, 0.45), explodePos: new THREE.Vector3(0, 0.4, 1.1), name: "Anodized Ultra-Smooth Cascading Chutes" });

      // 3. High-Resolution Optical CCD Camera Head
      const camGeo = new THREE.BoxGeometry(1.5, 0.35, 0.45);
      const camMesh = new THREE.Mesh(camGeo, mainBodyMat);
      camMesh.position.set(0, 0.5, 0.9);
      machineGroup.add(camMesh);
      parts.push({ mesh: camMesh, basePos: new THREE.Vector3(0, 0.5, 0.9), explodePos: new THREE.Vector3(0, 1.1, 1.7), name: "5400-px Tri-chromatic Dual CCD Optical Matrix" });

      // 4. High-Speed Pneumatic Ejector Valve Manifold
      const valveManifoldGeo = new THREE.BoxGeometry(1.4, 0.25, 0.3);
      const valveManifold = new THREE.Mesh(valveManifoldGeo, steelMat);
      valveManifold.position.set(0, -0.4, 0.7);
      machineGroup.add(valveManifold);
      parts.push({ mesh: valveManifold, basePos: new THREE.Vector3(0, -0.4, 0.7), explodePos: new THREE.Vector3(0, -0.9, 1.5), name: "Microsecond Response Magnetic Ejector Nozzle Array" });

      // 5. Intelligent Touchscreen Industrial HMI Terminal
      const hmiGeo = new THREE.BoxGeometry(0.6, 0.45, 0.08);
      const hmiMesh = new THREE.Mesh(hmiGeo, goldAccentMat);
      hmiMesh.position.set(1.0, 0.7, 0.4);
      hmiMesh.rotation.y = -0.3;
      machineGroup.add(hmiMesh);
      parts.push({ mesh: hmiMesh, basePos: new THREE.Vector3(1.0, 0.7, 0.4), explodePos: new THREE.Vector3(1.6, 1.0, 0.7), name: "Smart Linux Touchscreen Controller & AI Defect Diagnostic" });
    }

    // Circular Base Turntable Platform
    const tableGeo = new THREE.CylinderGeometry(1.8, 1.9, 0.08, 48);
    const tableMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#EAE0CD"),
      roughness: 0.7,
      metalness: 0.1,
    });
    const turntable = new THREE.Mesh(tableGeo, tableMat);
    turntable.position.set(0, -1.3, 0);
    scene.add(turntable);

    // Muted Gold Target Grid Ring on Turntable
    const gridRingGeo = new THREE.RingGeometry(1.4, 1.45, 48);
    const gridRingMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#B08A3E"),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const gridRing = new THREE.Mesh(gridRingGeo, gridRingMat);
    gridRing.rotation.x = Math.PI / 2;
    gridRing.position.set(0, -1.25, 0);
    scene.add(gridRing);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff5e6, 2.2);
    dirLight.position.set(4, 5, 4);
    scene.add(dirLight);

    const goldFill = new THREE.PointLight(0xb08a3e, 1.6, 10);
    goldFill.position.set(-3, 2, -2);
    scene.add(goldFill);

    // Interaction Variables
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      machineGroup.rotation.y += deltaX * 0.01;
      machineGroup.rotation.x = Math.max(-0.4, Math.min(0.4, machineGroup.rotation.x + deltaY * 0.005));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      machineGroup.rotation.y += deltaX * 0.01;
      machineGroup.rotation.x = Math.max(-0.4, Math.min(0.4, machineGroup.rotation.x + deltaY * 0.005));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    // Reduced motion check
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Auto slow rotate when not interacting and reduced-motion not requested
      if (!isDragging && !prefersReducedMotion) {
        machineGroup.rotation.y += 0.003;
      }

      // Smoothly interpolate between assembled and exploded positions
      parts.forEach((p) => {
        const targetPos = exploded ? p.explodePos : p.basePos;
        p.mesh.position.lerp(targetPos, 0.08);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [machineType, exploded]);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <div
        ref={mountRef}
        data-cursor="drag"
        className="w-full h-full min-h-[380px] md:min-h-[480px] cursor-grab active:cursor-grabbing"
      />
      {/* Component Indicator HUD */}
      <div className="absolute top-4 left-4 z-10 bg-[#FBF8F1]/95 backdrop-blur-md border border-[#25221D]/15 px-3 py-2 rounded-sm text-xs font-mono shadow-sm">
        <div className="text-[10px] tracking-widest uppercase text-[#B08A3E] font-semibold">
          3D MODEL VIEWPORT
        </div>
        <div className="font-medium text-[#25221D] mt-0.5">
          {machineType === "destoner" ? "CAT-DS-1200 Gravity Destoner" : "CAT-CS-540X Optical CCD Sorter"}
        </div>
        <div className="text-[11px] text-[#635C52]">
          State: <span className="font-semibold text-[#806329]">{exploded ? "Exploded Assembly View" : "Unified Production Rig"}</span>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10 pointer-events-none text-[11px] font-mono text-[#635C52] bg-[#F5F0E6]/90 px-2.5 py-1 rounded border border-[#25221D]/10">
        🖱️ Drag to rotate 360°
      </div>
    </div>
  );
}
