import { Canvas, extend } from '@react-three/fiber';
import { Effects } from '@react-three/drei';
import { useRef, memo } from 'react';
import Constants from '../Constants';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import BackgroundStars from './BackgroudStars';
import RenderedBodies from './RenderedBodies';

extend({ UnrealBloomPass })

const SolarSystem = memo(() => {
  const dateRef = useRef(Constants.startDate);

  console.log("SOLAR SYSTEM");

  return (
    <div className='h-full overflow-hidden'>
      <Canvas camera={{ far: 25000000, near: Constants.cameraNear }} gl={{logarithmicDepthBuffer: true}}>
        <Effects multisamping={8} renderIndex={1} disableGamma={true}>
          <unrealBloomPass threshold={0.4} strength={2.5} radius={0.7} />
        </Effects>
        <ambientLight intensity={0.07}></ambientLight>
        <RenderedBodies dateRef={dateRef} />
        <BackgroundStars />
      </Canvas>
    </div>
  );
},
(prevProps, nextProps) => prevProps === nextProps
);

export default SolarSystem;
