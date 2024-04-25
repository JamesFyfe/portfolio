import { Nav } from "./nav";
import { Links } from "./links";

export function LeftSide() {
  return (
		<>
			<h1 className="text-6xl font-semibold">James Fyfe</h1>
			<h2>Front-end Engineer</h2>
			<p>I build websites and stuff with exciting and performant 3D scenes.</p>
			<Nav />
			<Links />
		</>
  );
}
