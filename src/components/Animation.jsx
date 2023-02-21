import React, { useMemo } from 'react';

function MeshAnimation({
  position,
  rotation,
  grid: {
    width,
    heigth,
    sep,
  },
}) {
  const { positions, colors, normals } = useMemo(() => {
    const positions = []; const colors = []; const
      normals = [];

    for (let yi = 0; yi < heigth; yi++) {
      for (let xi = 0; xi < width; xi++) {
        const x = sep * (xi - (width - 1) / 2);
        const y = sep * (yi - (width - 1) / 2);
        const z = 0;
        positions.push(x, y, z);

        const color = {
          r: 1,
          g: 1,
          b: 1,
        };
        colors.push(color.r, color.g, color.b);
        normals.push(0, 0, 1);
      }
    }
    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      normals: new Float32Array(normals),
    };
  }, [width, heigth, sep]);
  //  index buffer
  let indicies = useMemo(() => {
    let indicies = [];
    let i = 0;
    for(let yi = 0; yi < heigth - 1; yi + 1)
  })
  return (
    <>
    </>
  );
}

function Animation() {
  return (
    <MeshAnimation />
  );
}

export default Animation;
