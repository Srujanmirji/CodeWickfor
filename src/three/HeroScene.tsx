import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import IdeaOrbit from './IdeaOrbit';
import ParticleField from './ParticleField';

export default function HeroScene() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 2, 12], fov: 45 }}>
        <color attach="background" args={['#0a0514']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />
        
        <IdeaOrbit />
        <ParticleField count={1500} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
