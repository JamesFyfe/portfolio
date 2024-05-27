import { Canvas } from '@react-three/fiber';
import BackgroundStars from './BackgroudStars';
import RenderedBodies from './RenderedBodies';


const SolarSystem = () => {
  return (
    <div className='h-full overflow-hidden'>
      <Canvas camera={{ far: 2500000 }} gl={{logarithmicDepthBuffer: true}}>
        <ambientLight intensity={0.07}></ambientLight>
        <RenderedBodies />
        <BackgroundStars />
      </Canvas>
    </div>
  );
}

export default SolarSystem;
