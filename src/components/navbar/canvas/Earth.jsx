import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Earth = () => {
  const { scene } = useGLTF('./planet/scene.gltf'); // Replace with the correct path

  return (
    <primitive
      object={scene}
      scale={[8, 8, 8]} // Example scale (adjust as needed)
      position={[0, 0, 0]} // Set the Earth at the center (or any desired position)
      rotation={[0, Math.PI/2, 0]} // Rotate the Earth to face the camera (adjust as needed)
    />
  );
};

const EarthCanvas = () => {
  const canvasRef = useRef();

  return (
    <div style={{ width: '80vw', height: '80vh' }}>
      <Canvas
        ref={canvasRef}
        shadows
        frameloop='demand'
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 20], near: 0.1, far: 1000 }}
      >
        <OrbitControls autoRotate enableZoom={false} />
        <Earth />
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
