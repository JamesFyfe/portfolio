import * as THREE from 'three';
import { memo, useEffect } from "react";
import type CelestialBody from "../classes/CelestialBody";
import Atmosphere from "./Atmosphere";
import { Clouds } from "./EarthLayers";
import { CityLights } from "./EarthLayers";

export const CelestialBodyRenderer = memo(({ body }: { body: CelestialBody }) => {
  useEffect(() => {
    if(body.rotatingGroupRef.current) {
      body.rotatingGroupRef.current.rotation.order = 'ZXY';
      // rotate mesh by axis tilt
      body.rotatingGroupRef.current.rotation.z = -body.physicalData.axisTilt;
    }
  }, [body]);

  const loader = new THREE.TextureLoader();

  const getMeshProps = () => {
    const geometry = new THREE.SphereGeometry(body.physicalData.radius, 100, 50);
    const material = body.physicalData.lightIntensity ? 
      new THREE.MeshStandardMaterial({ emissive: "rgb(160, 160, 90)", emissiveIntensity: 3 }) :
      new THREE.MeshStandardMaterial({ });

      const texture = loader.load(`/images/${body.physicalData.textureName}`);
      if(body.name === "Sun") {
        material.emissiveMap = texture;
      } else {
        material.map = texture;
      }
    return { geometry, material };
  };

  return (
    <group ref={body.threeGroupRef} name={body.name} userData={{ bodyId: body.id }}>
      <group ref={body.rotatingGroupRef} name={`${body.name } rotating group`} userData={{ bodyId: body.id }}>
        <mesh name={`${body.name} mesh`} userData={{ bodyId: body.id }} {...getMeshProps()} />
        {body.name === "Earth" && 
          <>
            <CityLights earth={body}/>
            <Clouds earth={body} />
          </>
        }
      </group>
      {body.atmosphereData && <Atmosphere body={body} />}
      {body.physicalData.lightIntensity && 
      <>
        <pointLight
          ref={body.lightRef}
          intensity={body.physicalData.lightIntensity} position={body.position}>
        </pointLight>
      </>
      }
    </group>
  );
  },
  (prevProps, nextProps) => prevProps.body.id === nextProps.body.id
);

CelestialBodyRenderer.displayName = "CelestialBodyRenderer";
