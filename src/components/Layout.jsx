import React from 'react';
import '../App.css';
import { Canvas } from '@react-three/fiber';
import NameCard from './NameCard';
import NavCard from './NavCard';
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

function Layout() {
  return (
    <div className=" h-full border-solid bg-zinc-200 dark:bg-zinc-800 border-zinc-900
    dark:border-zinc-200 border flex justify-center items-center shadow-layoutBoxShadow "
    >
      <div className=" relative w-full h-full bg-black opacity-20">
        <AnimationCanvas />
      </div>
      <NameCard />
      <NavCard />
    </div>
  );
}

export default Layout;
