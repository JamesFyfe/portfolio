import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import type CelestialBody from '../classes/CelestialBody';
import Constants from '../Constants';
import { useRef } from 'react';

interface AnimationLoopOptions {
  visibleBodies: CelestialBody[];
}

export function AnimationLoop({ visibleBodies }: AnimationLoopOptions) {
  const camera = useThree((state) => state.camera);
  const dateRef = useRef(Constants.startDate);
  
  const earthRef = useRef(visibleBodies[1]!);

  camera.position.set(...earthRef.current.position.add(new THREE.Vector3(Constants.cameraDistance, 1, 0)).toArray());

	useFrame(( state, delta ) => {
    const earth = earthRef.current;
    if(!earth.threeGroupRef.current) {
      return;
    }
    dateRef.current = new Date(dateRef.current.getTime() + delta * 1000 * Constants.timeMultiple);

    // Update positions and rotations of celestial bodies
    visibleBodies.forEach((body) => {
      body.update(dateRef.current);
    });

    const sun = visibleBodies[0]!;
    const angle = Math.atan2(
      earth.position.z - sun.position.z,
      earth.position.x - sun.position.x
    );

    const offsetAngle = angle + (110 * Math.PI) / 180;

    // Calculate the camera position based on the offset angle
    const cameraX = earth.position.x + Math.cos(offsetAngle) * Constants.cameraDistance;
    const cameraZ = earth.position.z + Math.sin(offsetAngle) * Constants.cameraDistance;

    camera.position.set(cameraX, earth.position.y + 1, cameraZ);

    camera.lookAt(...earth.position.toArray());
  });
}
