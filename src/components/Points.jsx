import { useFrame, useLoader } from '@react-three/fiber'
import React, { useCallback, useMemo, useRef } from 'react'
import circlePNG from '../assets/Untitled (2).png'
import * as THREE from 'three'

const Points = () => {
    const pngTexture = useLoader(THREE.TextureLoader, circlePNG)
    const bufferRef = useRef()

    let t = 0;
    let f = 0.002;
    let a = 3;
    const graph = useCallback((x, z) => {
        return Math.sin(f * (x + (z ** 2) + t)) * a;
    }, [t, a, f])

    const count = 300
    const sep = 0.5
    const positions = useMemo(() => {
        let positions = [];
        
        for (let xi = 0; xi < count; xi++){
            for (let zi = 0; zi < count; zi++){
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                let y = graph(x, z);
                positions.push(x, y, z)
            }
        }

        return new Float32Array(positions)
    }, [count, sep, graph])

    useFrame(() => {
        t += 10;
        const positions = bufferRef.current.array
        let i = 0

        for (let xi = 0; xi < count; xi++){
            for (let zi = 0; zi < count; zi++){
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                positions[i + 1] = graph(x, z);
                i += 3
            }
        }
        bufferRef.current.needsUpdate = false;
    })

  return (
    <points>
        <bufferGeometry 
        attach="geometry">
            <bufferAttribute
            ref={bufferRef}
            attach='attributes-position'
            array={positions}
            count={positions.length / 3}
            itemSize={3}
             />
        </bufferGeometry>
        <pointsMaterial 
        attach="material"
        map={pngTexture}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0} />
    </points>
  )
}

export default Points