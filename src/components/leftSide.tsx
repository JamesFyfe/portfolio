import { Nav } from "./nav";
import { Links } from "./links";

export function LeftSide() {
  return (
		<div className="space-y-4 w-80">
			<h1 className="text-5xl font-semibold">James Fyfe</h1>
			<h2 className="text-xl">Front-end Engineer</h2>
			<p className="text-base opacity-60">I build websites and stuff with exciting and performant 3D scenes.</p>
			<Nav />
			<div className="absolute bottom-32 max-md:static">
				<Links />
			</div>
		</div>
  );
}
