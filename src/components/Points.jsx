/* eslint-disable react/no-unknown-property */
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useCallback, useMemo, useRef } from 'react';
import * as THREE from 'three';
import circleSVG from '../assets/Untitled (3).svg';

function Points() {
  const svgTexture = useLoader(THREE.TextureLoader, circleSVG);
  const bufferRef = useRef();

  let t = 0;
  const f = 0.005;
  const a = 4;
  const graph = useCallback((x, z) => Math.sin(
    f * (x ** 2 + (z * 8) * 8 + t),
  ) * a, [t, a, f]);

  const count = 250;
  const sep = 0.25;
  const positions = useMemo(() => {
    const positionsArray = [];

    for (let xi = 0; xi < count; xi += 1) {
      for (let zi = 0; zi < count; zi += 1) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y = graph(x, z);
        positionsArray.push(x, y, z);
      }
    }

    return new Float32Array(positionsArray);
  }, [count, sep, graph]);

  useFrame(() => {
    t += 0.5;
    const positionsBufferRef = bufferRef.current.array;
    let i = 0;

    for (let xi = 0; xi < count; xi += 1) {
      for (let zi = 0; zi < count; zi += 1) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        positionsBufferRef[i + 1] = graph(x, z);
        i += 3;
      }
    }
    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry
        attach="geometry"
      >
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={svgTexture}
        size={0.2}
        sizeAttenuation
        transparent={false}
        alphaTest={0.2}
        opacity={1.0}
      />
    </points>
  );
}

export default Points;
