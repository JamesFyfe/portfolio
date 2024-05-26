import { Nav } from "./nav";
import { Links } from "./links";

export default function Profile() {
  return (
		<div className="space-y-4 pt-24 px-8 text-gray-400">
			<h1 className="text-5xl font-semibold text-gray-200">James Fyfe</h1>
			<h2 className="text-xl text-gray-200">Front-end Engineer</h2>
			<p>I build websites and stuff with exciting and performant 3D scenes.</p>
			<Nav />
			<div className="absolute bottom-24 max-lg:static">
				<Links />
			</div>
		</div>
  );
}
