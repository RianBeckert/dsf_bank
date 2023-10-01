import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';

interface EarthProps {
  scale: number;
}

export function Earth({ scale }: EarthProps) {
  const earth = useGLTF('/earth/scene.gltf');
  return <primitive object={earth.scene} scale={scale} />;
}

useGLTF.preload('/earth/scene.gltf');

export function EarthComponent() {
  const [scale, setScale] = useState<number>(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) return setScale(2);
      setScale(2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={0.05} />
        <spotLight position={[9, 6, 0]} intensity={0.5} penumbra={1} />
        <Earth scale={scale} />
      </Suspense>
    </Canvas>
  );
}
