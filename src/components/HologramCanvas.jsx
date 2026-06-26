import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import * as THREE from 'three';

function HologramRubiksCube() {
  const pointsRef = useRef();

  // 1. GENERATE THE RUBIK'S CUBE POINT CLOUD MATRIX
  const { positions, totalPoints } = useMemo(() => {
    const tempPositions = [];
    const numBlocks = 3; 
    const spacing = 0.7; 
    const dotsPerEdge = 8; 

    for (let bx = 0; bx < numBlocks; bx++) {
      for (let by = 0; by < numBlocks; by++) {
        for (let bz = 0; bz < numBlocks; bz++) {
          
          const blockX = (bx - 1) * spacing;
          const blockY = (by - 1) * spacing;
          const blockZ = (bz - 1) * spacing;

          for (let e = 0; e < dotsPerEdge; e++) {
            const t = e / (dotsPerEdge - 1) - 0.5; 
            const size = 0.55; 

            // Edges na kahanay ng X axis
            tempPositions.push(blockX + t * size, blockY - size/2, blockZ - size/2);
            tempPositions.push(blockX + t * size, blockY + size/2, blockZ - size/2);
            tempPositions.push(blockX + t * size, blockY - size/2, blockZ + size/2);
            tempPositions.push(blockX + t * size, blockY + size/2, blockZ + size/2);

            // Edges na kahanay ng Y axis
            tempPositions.push(blockX - size/2, blockY + t * size, blockZ - size/2);
            tempPositions.push(blockX + size/2, blockY + t * size, blockZ - size/2);
            tempPositions.push(blockX - size/2, blockY + t * size, blockZ + size/2);
            tempPositions.push(blockX + size/2, blockY + t * size, blockZ + size/2);

            // Edges na kahanay ng Z axis
            tempPositions.push(blockX - size/2, blockY - size/2, blockZ + t * size);
            tempPositions.push(blockX + size/2, blockY - size/2, blockZ + t * size);
            tempPositions.push(blockX - size/2, blockY + size/2, blockZ + t * size);
            tempPositions.push(blockX + size/2, blockY + size/2, blockZ + t * size);
          }
        }
      }
    }

    return {
      positions: new Float32Array(tempPositions),
      totalPoints: tempPositions.length / 3
    };
  }, []);

  // 2. SWABE AT AKURADONG PAG-IKOT
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.25;
      pointsRef.current.rotation.x = time * 0.12;

      const posAttr = pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        if (Math.random() > 0.985) {
          const x = posAttr.getX(i);
          posAttr.setX(i, x + (Math.random() - 0.5) * 0.012);
        }
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={totalPoints}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3B82F6"
        size={0.024}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function HologramCanvas() {
  // Detection kung mobile ba o desktop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint ng Tailwind (1024px)
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div className="w-full h-full min-h-[440px] md:min-h-[500px] relative bg-[#0D1117]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* 🛠️ FIX: Idinagdag ang dynamic `pointer-events-none` sa wrapper kapag mobile (`isMobile`).
        Dahil dito, hindi haharangin ng Canvas ang gestures kaya makakapag-scroll nang maayos sa mobile view.
      */}
      <div className={`w-full h-full absolute inset-0 ${isMobile ? 'pointer-events-none' : ''}`}>
        <Canvas camera={{ position: [0, 0, 4.3], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <Center>
            <HologramRubiksCube />
          </Center>
          
          {/* Kung mobile, hindi na natin ire-render ang OrbitControls para mas magaan ang execution */}
          {!isMobile && (
            <OrbitControls 
              enableZoom={false} 
              enableRotate={true} 
            />
          )}
        </Canvas>
      </div>

      <div className="absolute bottom-4 left-4 font-mono text-[9px] text-blue-400/40 bg-black/50 px-2.5 py-1 rounded border border-blue-500/10 tracking-wider pointer-events-none z-10">
        3D_FRAME // VOLUMETRIC_RUBIKS_CUBE
      </div>
    </div>
  );
}