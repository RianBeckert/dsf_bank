import React from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

interface CreditCardProps {
  url: string;
}

export function CreditCard({ url }: CreditCardProps) {
  const creditCard = useGLTF(url);

  return (
    <primitive
      object={creditCard.scene}
      scale={1.5}
      position={[0, -1.5, 0]}
      rotation={[0, 2.8, 0]}
    />
  );
}

useGLTF.preload('/credit_card_white/scene.gltf');

export function CreditCardComponent() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <spotLight position={[-3, 2, 1]} intensity={0.5} penumbra={1} />
        <CreditCard url="/credit_card_white/scene.gltf" />
      </Suspense>
    </Canvas>
  );
}
