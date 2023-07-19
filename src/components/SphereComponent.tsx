import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, OrbitControls} from '@react-three/drei';
import 'styles/FirstSection.css'


const SphereComponent = () => {
  return (
      <Canvas className="sphere-container" camera={{ fov: 25, position: [5, 5, 5] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 1]}/>
        <Sphere args={[1, 100, 100]} scale={1}>
          <MeshDistortMaterial
            color="#695dd8"
            attach="material"
            distort={0.7}
            speed={0.7}
          />
        </Sphere>
      </Canvas>
  )
}

export default SphereComponent