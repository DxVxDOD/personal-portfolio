import React from 'react';
import MeshAnimation from './MeshAnimation';
import noise from './Noise';

function Animation() {
  const seed = Math.floor(Math.random() * (2 ** 16));
  noise.seed(seed);

  const sampleNoise = (x, y, z) => {
    const scale = 1 / 8;
    const octaves = 20;
    const persistance = 0.6;
    const lacunarity = 2;

    let amp = 1;
    let freq = 1;

    let value = 0;

    for (let i = 0; i < octaves; i += 1) {
      value += amp * noise.perlin3(x * freq * scale, y * freq * scale, z);
      amp *= persistance;
      freq *= lacunarity;
    }
    return value;
  };

  const zOfXYT = (x, y, t) => sampleNoise(x, y, t);
  const colorOfXYZT = (x, y, z) => ({
    r: z,
    g: z / 5,
    b: Math.sqrt(x ** 2 + y ** 2) / 75,
  });
  return (
    <MeshAnimation
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      grid={{
        width: 200,
        height: 200,
        sep: 0.3,
      }}
      zOfXYT={zOfXYT}
      colorOfXYZT={colorOfXYZT}
      animation={{
        init: 0,
        update: (t) => t + 0.002,
      }}
    />
  );
}

export default Animation;
