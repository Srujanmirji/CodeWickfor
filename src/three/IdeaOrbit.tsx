import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text, Line } from '@react-three/drei';
import * as THREE from 'three';

const EXPERTS = [
  { name: 'Fox', color: '#ff7b00', radius: 3, speed: 0.5 },
  { name: 'Owl', color: '#4cc9f0', radius: 3.5, speed: 0.4 },
  { name: 'Shark', color: '#3a0ca3', radius: 4, speed: 0.6 },
  { name: 'Bee', color: '#fca311', radius: 4.5, speed: 0.3 },
  { name: 'Wolf', color: '#7209b7', radius: 5, speed: 0.45 },
  { name: 'Cheetah', color: '#f72585', radius: 5.5, speed: 0.7 },
  { name: 'Peacock', color: '#4361ee', radius: 6, speed: 0.35 },
  { name: 'Eagle', color: '#48cae4', radius: 6.5, speed: 0.55 },
];

function OrbitingExpert({ expert, index }: { expert: any, index: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const lineRef = useRef<any>(null);
  
  const initialAngle = (index / EXPERTS.length) * Math.PI * 2;

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      const angle = initialAngle + t * expert.speed;
      
      const x = Math.cos(angle) * expert.radius;
      const z = Math.sin(angle) * expert.radius;
      const y = Math.sin(t * 2 + index) * 0.5;

      groupRef.current.position.set(x, y, z);
      groupRef.current.lookAt(state.camera.position);

      if (lineRef.current) {
        lineRef.current.geometry.setPositions([0, 0, 0, x, y, z]);
      }
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <Sphere ref={sphereRef} args={[0.2, 16, 16]}>
          <meshStandardMaterial 
            color={expert.color} 
            emissive={expert.color} 
            emissiveIntensity={2} 
            toneMapped={false} 
          />
        </Sphere>
        <Text
          position={[0, -0.4, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {expert.name}
        </Text>
      </group>
      <Line
        ref={lineRef}
        points={[[0, 0, 0], [0, 0, 0]]} // Initial points, updated in useFrame
        color={expert.color}
        lineWidth={1}
        transparent
        opacity={0.3}
      />
    </>
  );
}


export default function IdeaOrbit() {
  const centerSphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (centerSphereRef.current) {
      // Pulse effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      centerSphereRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      {/* Central Idea Sphere */}
      <Sphere ref={centerSphereRef} args={[1.5, 32, 32]}>
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#4c1d95" 
          emissiveIntensity={1.5} 
          wireframe 
          transparent 
          opacity={0.8} 
        />
      </Sphere>
      
      {/* Inner glowing core */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} />
      </Sphere>

      {/* Orbiting Experts */}
      {EXPERTS.map((expert, index) => (
        <OrbitingExpert key={expert.name} expert={expert} index={index} />
      ))}
    </group>
  );
}
