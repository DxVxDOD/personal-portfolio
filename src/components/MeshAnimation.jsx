/* eslint-disable react/no-unknown-property */
import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import PropTypes from 'prop-types';

function MeshAnimation({
  position,
  rotation,
  grid: {
    width,
    height,
    sep,
  },
  colorOfXYZT,
  zOfXYT,
  animation: {
    init,
    update,
  },
}) {
  let t = init;
  const { positions, colors, normals } = useMemo(() => {
    const positionsArray = [];
    const colorsArray = [];
    const normalsArray = [];

    for (let yi = 0; yi < height; yi += 1) {
      for (let xi = 0; xi < width; xi += 1) {
        const x = sep * (xi - (width - 1) / 2);
        const y = sep * (yi - (width - 1) / 2);
        const z = zOfXYT(x, y, t);
        positionsArray.push(x, y, z);

        const color = colorOfXYZT(x, y, z, t);

        colorsArray.push(color.r, color.g, color.b);
        normalsArray.push(0, 0, 1);
      }
    }
    return {
      positions: new Float32Array(positionsArray),
      colors: new Float32Array(colorsArray),
      normals: new Float32Array(normalsArray),
    };
  }, [width, height, sep, zOfXYT, colorOfXYZT, t]);

  const indices = useMemo(() => {
    const index = [];
    let i = 0;
    for (let yi = 0; yi < height - 1; yi += 1) {
      for (let xi = 0; xi < width - 1; xi += 1) {
        index.push(i, i + 1, i + width + 1);
        index.push(i + width + 1, i + width, i);
        i += 1;
      }
      i += 1;
    }
    return new Uint16Array(index);
  }, [width, height]);

  const positionRef = useRef();
  const colorRef = useRef();

  useFrame(() => {
    t = update(t);

    const currentPositions = positionRef.current.array;
    const currentColors = colorRef.current.array;

    let i = 0;
    for (let yi = 0; yi < height; yi += 1) {
      for (let xi = 0; xi < width; xi += 1) {
        currentPositions[i + 2] = zOfXYT(
          currentPositions[i],
          currentPositions[i + 1],
          t,
        );
        const c = colorOfXYZT(
          currentPositions[i],
          currentPositions[i + 1],
          currentPositions[i + 2],
          t,
        );
        currentColors[i] = c.r;
        currentColors[i + 1] = c.g;
        currentColors[i + 2] = c.b;
        i = +3;
      }
    }
    positionRef.current.needsUpdate = false;
    colorRef.current.needsUpdate = false;
  });

  return (
    <mesh
      position={position}
      rotation={rotation}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          ref={positionRef}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          ref={colorRef}
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-normal"
          array={normals}
          count={normals.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          array={indices}
          count={indices.length / 3}
        />
      </bufferGeometry>
      <meshStandardMaterial
        vertexColors
        side={THREE.DoubleSide}
        wireframe={false}
      />
    </mesh>
  );
}

MeshAnimation.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
  grid: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    sep: PropTypes.number.isRequired,
  }).isRequired,
  colorOfXYZT: PropTypes.func.isRequired,
  zOfXYT: PropTypes.func.isRequired,
  animation: PropTypes.shape({
    init: PropTypes.number.isRequired,
    update: PropTypes.func.isRequired,
  }).isRequired,
};

export default MeshAnimation;
