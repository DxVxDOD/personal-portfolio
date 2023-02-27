import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Points from './Points';

function AnimationCanvas() {
  return (
    <Canvas
      camera={{ position: [60, 25, 0], fov: 10 }}
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
}

export default AnimationCanvas;
