"use client"

import SolarSystem from "./components/SolarSystem"

export default function BackgroundScene() {
  return (
    <div className="fixed w-full h-full -z-10 opacity-75">
      <SolarSystem />
    </div>
  );
}
