import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Points from './Points';

const AnimationCanvas = () => {
  return (
    <Canvas 
    camera={{position: [100, 100, 10], fov: 15}} >
      <Suspense fallback={null} >
        <Points />
      </Suspense>
    </Canvas>
  )
}

export default AnimationCanvas