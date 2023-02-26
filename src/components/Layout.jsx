import React, { Suspense } from 'react';
import '../App.css';
import NameCard from './NameCard';
import NavCard from './NavCard';
import AnimationCanvas from './AnimationCanvas';

function Layout() {
  return (
    <div className=" h-full border-solid bg-zinc-200 dark:bg-zinc-800 border-zinc-900
    dark:border-zinc-200 border flex justify-center items-center shadow-layoutBoxShadow "
    >
      <div className=" relative w-full h-full">
        <Suspense fallback={<div>Loading....</div>} >
          <AnimationCanvas />
        </Suspense>
      </div>
      <NameCard />
      <NavCard />
    </div>
  );
}

export default Layout;
