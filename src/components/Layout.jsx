import React from 'react';
import '../App.css';
import NameCard from './NameCard';
import NavCard from './NavCard';

function Layout() {
  return (
    <div className=" h-full border-solid bg-zinc-200 dark:bg-zinc-800 border-zinc-900
    dark:border-zinc-200 border flex justify-center items-center shadow-layoutBoxShadow "
    >
      <NameCard />
      <NavCard />
    </div>
  );
}

export default Layout;
