import React from 'react';

function NameCard() {
  return (
    <div className="border border-black dark:border-zinc-200 dark:bg-zinc-800 bg-zinc-200 px-1 shadow-cardBoxShadow absolute bottom-14 right-14
     animate-cardToBottomRight"
    >
      <span className="text-2xl dark:text-zinc-200">Orbang David</span>
      <p />
      <span className="dark:text-zinc-200">Front-End Developer</span>
    </div>
  );
}

export default NameCard;
