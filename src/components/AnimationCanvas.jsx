import React from 'react';
import { Canvas } from '@react-three/fiber';
import Animation from './Animation';

function AnimationCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 2, 10], fov: 75 }}
    >
      <ambientLight />
      <Animation />
    </Canvas>
  );
}

export default AnimationCanvas;
