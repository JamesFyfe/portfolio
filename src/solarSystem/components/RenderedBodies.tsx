import { createCelestialBodyFromJSON } from "../classes/CelestialBody";
import type CelestialBody from "../classes/CelestialBody";
import type { CelestialBodyData } from "../classes/CelestialBody";
import { AnimationLoop } from "../utils/AnimationLoop";
import { CelestialBodyRenderer } from "./CelestialBodyRenderer";
import data from '../data/PlanetData.json';

export default function RenderedBodies() {
  const sun = createCelestialBodyFromJSON(data as CelestialBodyData);
  if(!sun.children) {
    return;
  }
  const earth = sun.children[0]!;
  if(!earth.children) {
    return;
  }
  const moon = earth.children[0]!;
  const visibleBodies: CelestialBody[] = [sun, earth, moon];

  AnimationLoop({ visibleBodies });
  console.log("Returning Solar System Scene");
  return (
    <>
      {visibleBodies.map((body: CelestialBody) => (
        <CelestialBodyRenderer key={body.id} body={body}/>
      ))}
    </>
  );
};