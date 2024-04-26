import { Nav } from "./nav";
import { Links } from "./links";

export function Profile() {
  return (
		<div className="space-y-4 pt-24 px-8 opacity-90">
			<h1 className="text-5xl font-semibold">James Fyfe</h1>
			<h2 className="text-xl">Front-end Engineer</h2>
			<p className="opacity-60">I build websites and stuff with exciting and performant 3D scenes.</p>
			<Nav />
			<div className="absolute bottom-24 max-lg:static">
				<Links />
			</div>
		</div>
  );
}
