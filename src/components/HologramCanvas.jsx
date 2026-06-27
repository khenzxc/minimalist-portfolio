import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import * as THREE from 'three';

function HologramSaktoKG() {
  const pointsRef = useRef();

  // 1. GENERATE CLEAN & BALANCED 3D BLOCK FOR "KG"
  const { positions, totalPoints } = useMemo(() => {
    const tempPositions = [];
    const dotsPerEdge = 7; 

    const addCleanBlock = (bx, by, bz, w, h, d) => {
      const hw = w / 2;
      const hh = h / 2;
      const hd = d / 2;

      for (let e = 0; e < dotsPerEdge; e++) {
        const t = e / (dotsPerEdge - 1) - 0.5;

        // X-axis edges
        tempPositions.push(bx + t * w, by - hh, bz - hd);
        tempPositions.push(bx + t * w, by + hh, bz - hd);
        tempPositions.push(bx + t * w, by - hh, bz + hd);
        tempPositions.push(bx + t * w, by + hh, bz + hd);

        // Y-axis edges
        tempPositions.push(bx - hw, by + t * h, bz - hd);
        tempPositions.push(bx + hw, by + t * h, bz - hd);
        tempPositions.push(bx - hw, by + t * h, bz + hd);
        tempPositions.push(bx + hw, by + t * h, bz + hd);

        // Z-axis edges
        tempPositions.push(bx - hw, by - hh, bz + t * d);
        tempPositions.push(bx + hw, by - hh, bz + t * d);
        tempPositions.push(bx - hw, by + hh, bz + t * d);
        tempPositions.push(bx + hw, by + hh, bz + t * d);
      }
    };

    const bWidth = 0.3;  
    const bDepth = 0.35; 

    // ==================== LETTER K ====================
    const kX = -0.8;
    addCleanBlock(kX, 0, 0, bWidth, 1.6, bDepth);

    for (let i = 0; i < 5; i++) {
      const t = i / 4;
      const x = kX + 0.15 + t * 0.6;
      const y = 0.15 + t * 0.65;
      addCleanBlock(x, y, 0, bWidth, bWidth, bDepth);
    }

    for (let i = 0; i < 5; i++) {
      const t = i / 4;
      const x = kX + 0.15 + t * 0.6;
      const y = -0.15 - t * 0.65;
      addCleanBlock(x, y, 0, bWidth, bWidth, bDepth);
    }

    // ==================== LETTER G ====================
    const gX = 0.65;
    addCleanBlock(gX - 0.3, 0, 0, bWidth, 1.6, bDepth);
    addCleanBlock(gX, 0.65, 0, 0.7, bWidth, bDepth);
    addCleanBlock(gX, -0.65, 0, 0.7, bWidth, bDepth);
    addCleanBlock(gX + 0.3, -0.25, 0, bWidth, 0.6, bDepth);
    addCleanBlock(gX + 0.1, 0.05, 0, 0.45, bWidth, bDepth);

    return {
      positions: new Float32Array(tempPositions),
      totalPoints: tempPositions.length / 3
    };
  }, []);

  // 2. 🔄 PURE SIDE-TO-SIDE (Y-AXIS ONLY) ROTATION 
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      // Dito natin ni-lock ang ikot: Tanging .rotation.y lang ang nagbabago, naka-0 ang x at z
      pointsRef.current.rotation.y = time * 0.35; 
      pointsRef.current.rotation.x = 0; // Lock top-to-bottom tilted frame
      pointsRef.current.rotation.z = 0; // Lock side tilting

      // Micro-shimmer matrix particle glitch
      const posAttr = pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        if (Math.random() > 0.985) {
          const x = posAttr.getX(i);
          posAttr.setX(i, x + (Math.random() - 0.5) * 0.008);
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div className="w-full h-full min-h-[440px] md:min-h-[500px] relative bg-[#0D1117]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className={`w-full h-full absolute inset-0 ${isMobile ? 'pointer-events-none' : ''}`}>
        <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <Center>
            <HologramSaktoKG />
          </Center>
          {!isMobile && (
            <OrbitControls 
              enableZoom={false} 
              enableRotate={true} 
            />
          )}
        </Canvas>
      </div>

      <div className="absolute bottom-4 left-4 font-mono text-[9px] text-blue-400/40 bg-black/50 px-2.5 py-1 rounded border border-blue-500/10 tracking-wider pointer-events-none z-10">
        3D_FRAME // TURNTABLE_KG_BLOCKS
      </div>
    </div>
  );
}