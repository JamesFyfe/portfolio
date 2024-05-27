import { useFrame } from "@react-three/fiber";
import type CelestialBody from "../classes/CelestialBody";
import InvertedLightShaderMaterial from '../shaders/InvertedLightShaderMaterial';
import * as THREE from 'three';
import { useRef } from "react";

export function Clouds({ earth, rotationSpeed = 0.002 }: { earth: CelestialBody, rotationSpeed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const distFromSurface = 0.02;
  const loader = new THREE.TextureLoader();
  const texture = loader.load("/images/earth_clouds.png");

  useFrame((state, delta) => {
    meshRef.current?.rotateY(-rotationSpeed * delta);
  });

  return (
    <mesh ref={meshRef} name={"Earth clouds"} userData={{ bodyId: earth.id }}>
      <sphereGeometry args={[earth.physicalData.radius + distFromSurface, 80, 40]}></sphereGeometry>
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
};

export function CityLights({ earth }: { earth: CelestialBody }) {
  const loader = new THREE.TextureLoader();
  const texture = loader.load("/images/earth_lights.png");
  const distFromSurface = 0.01;

  const cityLightsMat = new InvertedLightShaderMaterial({
    uniforms: {
      sunDirection: { value: new THREE.Vector3(-1, 0, 0) },
      map: { value: texture },
    },
    transparent: true,
  });

  useFrame(() => {
    if (earth.rotatingGroupRef.current) {
      const earthPosition = earth.position;
      const sunPosition = earth.parent!.position;
      const sunDirection = new THREE.Vector3().subVectors(sunPosition, earthPosition).normalize();

      // Create a quaternion representing the Earth's rotation
      const earthRotation = new THREE.Quaternion().setFromEuler(earth.rotatingGroupRef.current.rotation);

      // Apply the inverse of the Earth's rotation to the sunDirection
      sunDirection.applyQuaternion(earthRotation.invert());

      if (cityLightsMat.uniforms.sunDirection && cityLightsMat.uniforms.sunDirection.value instanceof THREE.Vector3) {
        cityLightsMat.uniforms.sunDirection.value.copy(sunDirection);
      }
    }
  });

  return (
    <mesh name={"Earth city lights"} userData={{ bodyId: earth.id }}>
      <sphereGeometry args={[earth.physicalData.radius + distFromSurface, 80, 40]}></sphereGeometry>
      <primitive object={cityLightsMat} attach="material" />
    </mesh>
  );
};