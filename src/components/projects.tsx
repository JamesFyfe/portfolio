import SkillsUsed from "./skillsUsed";

const Projects: React.FC = () => {

	return (
		<div className="space-y-12">
			<ProjectSection 
				title="Solar System Simulation"
				skills={["React", "Three.js/R3F", "TypeScript"]}
				description="Explore the Planets and Moons of Solar System with this accurate, to-scale simulation built using React Three Fiber."
				link="https://solar-system-sim3d.vercel.app/"
				imageName="solarSystemProject.png"
			/>
    </div>
	);
}


interface ProjectSectionProps {
  title: string;
  skills: string[];
	description: string;
	link: string;
	imageName: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = (props) => {
  const handleClick = () => {
    window.open(props.link, '_blank');
  };

  return (
    <div
      className="grid grid-cols-3 space-y-2 space-x-2 cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="col-span-1 my-2"
        src={`/images/${props.imageName}`}
        alt={props.title}
      />
      <div className="col-span-2 space-y-4">
        <h1 className="text-gray-200">{props.title}</h1>
        <p className="text-sm opacity-80">{props.description}</p>
        <SkillsUsed skills={props.skills} />
      </div>
    </div>
  );
};

export default Projects;