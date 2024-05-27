import { useState } from "react";
import CelestialBody, { createCelestialBodyFromJSON } from "../classes/CelestialBody";
import { AnimationLoop } from "../utils/AnimationLoop";
import { CelestialBodyRenderer } from "./CelestialBodyRenderer";

export default function RenderedBodies({dateRef}: {dateRef: React.MutableRefObject<Date>}) {
  const data = require('../data/PlanetData.json');
  const sun = createCelestialBodyFromJSON(data[0]);
  const earth = sun.children[0] as CelestialBody;
  const moon = earth.children[0] as CelestialBody;
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