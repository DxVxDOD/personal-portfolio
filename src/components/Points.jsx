/* eslint-disable react/no-unknown-property */
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useCallback, useMemo, useRef } from 'react';
import * as THREE from 'three';
import circleSVG from '../assets/Untitled (3).svg';

function Points() {
  const svgTexture = useLoader(THREE.TextureLoader, circleSVG);
  const bufferRef = useRef();

  let t = 0;
  const f = 0.008;
  const a = 4;
  const grapher = useCallback((x, z) => Math.sin(
    f * (x ** 2 + (z * 2) * 4 + 2000 + t),
  ) * a, [t, a, f]);

  const count = 300;
  const space = 0.2;
  const positions = useMemo(() => {
    const positionsArray = [];

    for (let xi = 0; xi < count; xi += 1) {
      for (let zi = 0; zi < count; zi += 1) {
        const x = space * (xi - count / 2);
        const z = space * (zi - count / 2);
        const y = grapher(x, z);
        positionsArray.push(x, y, z);
      }
    }

    return new Float32Array(positionsArray);
  }, [count, space, grapher]);

  useFrame(() => {
    t += 0.4;
    const positionsBufferRef = bufferRef.current.array;
    let i = 0;

    for (let xi = 0; xi < count; xi += 1) {
      for (let zi = 0; zi < count; zi += 1) {
        const x = space * (xi - count / 2);
        const z = space * (zi - count / 2);
        positionsBufferRef[i + 1] = grapher(x, z);
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
        size={0.25}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

export default Points;
