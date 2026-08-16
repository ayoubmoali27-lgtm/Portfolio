"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const loadVanta = async () => {
      const VantaClouds = (await import("vanta/dist/vanta.clouds.min")).default;

      if (!mounted || !vantaRef.current || effectRef.current) return;

      effectRef.current = VantaClouds({
        el: vantaRef.current,
        THREE,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200,
        minWidth: 200,

        skyColor: 0x131313,
        cloudColor: 0x4361ee,
        cloudShadowColor: 0x090909,

        sunColor: 0xffffff,
        sunGlareColor: 0x4361ee,
        sunlightColor: 0xbac3ff,

        speed: 1.2,
      });
    };

    loadVanta();

    return () => {
      mounted = false;

      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full"
      style={{
        zIndex: 0,
      }}
    />
  );
}