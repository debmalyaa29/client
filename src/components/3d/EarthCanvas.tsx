"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface EarthCanvasProps {
  className?: string;
  onExploreLocation?: () => void;
}

export default function EarthCanvas({ className = "" }: EarthCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.2);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Earth Globe Group
    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = 0.35; // tilt
    scene.add(globeGroup);

    // Core Sphere: Warm Ivory/Cream
    const sphereRadius = 1.6;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#F7F2E8"),
      roughness: 0.85,
      metalness: 0.08,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(coreSphere);

    // Latitude & Longitude Rings (Muted Brushed Gold)
    const ringMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#B08A3E"),
      transparent: true,
      opacity: 0.32,
    });

    // Latitudes
    for (let lat = -60; lat <= 60; lat += 20) {
      const radiusAtLat = sphereRadius * Math.cos((lat * Math.PI) / 180) * 1.002;
      const yAtLat = sphereRadius * Math.sin((lat * Math.PI) / 180);
      const ringGeo = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radiusAtLat, yAtLat, Math.sin(theta) * radiusAtLat));
      }
      ringGeo.setFromPoints(points);
      const line = new THREE.Line(ringGeo, ringMat);
      globeGroup.add(line);
    }

    // Longitudes
    for (let lon = 0; lon < 180; lon += 30) {
      const ringGeo = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const x = sphereRadius * 1.002 * Math.sin(theta) * Math.cos((lon * Math.PI) / 180);
        const y = sphereRadius * 1.002 * Math.cos(theta);
        const z = sphereRadius * 1.002 * Math.sin(theta) * Math.sin((lon * Math.PI) / 180);
        points.push(new THREE.Vector3(x, y, z));
      }
      ringGeo.setFromPoints(points);
      const line = new THREE.Line(ringGeo, ringMat);
      globeGroup.add(line);
    }

    // Continental Point Cloud (Warm Charcoal Land masses)
    // Approximate land coordinates points for major continents
    const pointCount = 1400;
    const landCoords: THREE.Vector3[] = [];

    // Pseudo-continents point distribution
    const landCentres = [
      { lat: 23, lon: 82, radius: 25 }, // India / South Asia
      { lat: 35, lon: 104, radius: 35 }, // East Asia
      { lat: 50, lon: 15, radius: 30 }, // Europe
      { lat: 5, lon: 20, radius: 40 }, // Africa
      { lat: 40, lon: -100, radius: 40 }, // North America
      { lat: -15, lon: -60, radius: 35 }, // South America
      { lat: -25, lon: 135, radius: 25 }, // Australia
    ];

    for (let i = 0; i < pointCount; i++) {
      const center = landCentres[Math.floor(Math.random() * landCentres.length)];
      const lat = center.lat + (Math.random() - 0.5) * center.radius * 2;
      const lon = center.lon + (Math.random() - 0.5) * center.radius * 2;

      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      const r = sphereRadius * 1.008;
      const x = -(r * Math.sin(phi) * Math.cos(theta));
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = r * Math.cos(phi);

      landCoords.push(new THREE.Vector3(x, y, z));
    }

    const dotGeo = new THREE.BufferGeometry().setFromPoints(landCoords);
    const dotMat = new THREE.PointsMaterial({
      color: new THREE.Color("#25221D"),
      size: 0.045,
      transparent: true,
      opacity: 0.85,
    });
    const landDots = new THREE.Points(dotGeo, dotMat);
    globeGroup.add(landDots);

    // Calcutta / India Pin Beacon (Latitude: 22.57, Longitude: 88.36)
    const calcuttaPhi = (90 - 22.57) * (Math.PI / 180);
    const calcuttaTheta = (88.36 + 180) * (Math.PI / 180);
    const rPin = sphereRadius * 1.015;
    const pinX = -(rPin * Math.sin(calcuttaPhi) * Math.cos(calcuttaTheta));
    const pinZ = rPin * Math.sin(calcuttaPhi) * Math.sin(calcuttaTheta);
    const pinY = rPin * Math.cos(calcuttaPhi);

    // Gold Beacon Pin Mesh
    const beaconGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#B08A3E"),
    });
    const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
    beaconMesh.position.set(pinX, pinY, pinZ);
    globeGroup.add(beaconMesh);

    // Pulsing Outer Gold Beacon Ring
    const pulseRingGeo = new THREE.RingGeometry(0.08, 0.12, 32);
    const pulseRingMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#D6BC7A"),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
    });
    const pulseRing = new THREE.Mesh(pulseRingGeo, pulseRingMat);
    pulseRing.position.set(pinX * 1.01, pinY * 1.01, pinZ * 1.01);
    pulseRing.lookAt(new THREE.Vector3(pinX * 2, pinY * 2, pinZ * 2));
    globeGroup.add(pulseRing);

    // Atmosphere Outer Glow Shell
    const glowGeo = new THREE.SphereGeometry(sphereRadius * 1.15, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#D6BC7A"),
      transparent: true,
      opacity: 0.06,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(glowGeo, glowMat);
    scene.add(atmosphere);

    // Orbiting Dust Particles (Gold & Ivory)
    const dustCount = 80;
    const dustPoints: THREE.Vector3[] = [];
    for (let i = 0; i < dustCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = sphereRadius * 1.25 + Math.random() * 0.45;
      const sinPhi = Math.sin(phi);
      dustPoints.push(
        new THREE.Vector3(
          r * sinPhi * Math.cos(theta),
          r * Math.cos(phi),
          r * sinPhi * Math.sin(theta)
        )
      );
    }
    const dustGeo = new THREE.BufferGeometry().setFromPoints(dustPoints);
    const dustMat = new THREE.PointsMaterial({
      color: new THREE.Color("#B08A3E"),
      size: 0.025,
      transparent: true,
      opacity: 0.45,
    });
    const dustMesh = new THREE.Points(dustGeo, dustMat);
    scene.add(dustMesh);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff8eb, 2.5);
    dirLight.position.set(5, 4, 3);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0xb08a3e, 1.8);
    rimLight.position.set(-5, -2, -2);
    scene.add(rimLight);

    // 5. Mouse Interaction / Smooth Drag
    let mouseX = 0;
    const targetRotationY = -1.2; // Start angled towards India
    globeGroup.rotation.y = targetRotationY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseX = relX * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

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

    // 6. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Steady rotation with subtle interactive response
      globeGroup.rotation.y += 0.002 + mouseX * 0.01;
      dustMesh.rotation.y += 0.0008;

      // Pulse the Calcutta beacon
      const pulseScale = 1.0 + Math.sin(elapsedTime * 3) * 0.25;
      pulseRing.scale.set(pulseScale, pulseScale, pulseScale);
      pulseRingMat.opacity = 0.45 + Math.sin(elapsedTime * 3) * 0.35;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      dotGeo.dispose();
      dotMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div
        ref={mountRef}
        className="w-full h-full min-h-[360px] md:min-h-[520px] cursor-grab active:cursor-grabbing"
      />
      {/* Editorial Marker Tag */}
      <div className="absolute bottom-4 left-6 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F0E6]/90 backdrop-blur-md border border-[#B08A3E]/30 text-xs font-mono text-[#25221D] shadow-sm">
        <span className="inline-block w-2 h-2 rounded-full bg-[#B08A3E] animate-ping" />
        <span className="font-semibold tracking-wider text-[#806329]">HQ: SODEPUR, KOLKATA</span>
        <span className="text-gray-400">|</span>
        <span className="text-[#635C52]">LAT 22.71° N, LON 88.38° E</span>
      </div>
    </div>
  );
}
