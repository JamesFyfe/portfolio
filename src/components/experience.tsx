import SkillsUsed from "./skillsUsed";

const Experience: React.FC = () => {

	return (
		<div className="space-y-12">
			<ExperienceSection 
				position="Software Engineer"
				company="Diagnose Early"
				dates="July 2023 - February 2024"
				description="Lead mobile app developer using Flutter for iOS and Android.
				Implemented features such as Bluetooth communication, data visualization, and user authentication.
				Managed and collaborated with an experienced mobile app developer
				Deployed app for internal testing."
				skills={["Flutter", "Firmware testing"]}
			/>

			<ExperienceSection 
				position="Freelance programming"
				dates="2018 - 2022"
				description="Developed websites for a restaurant and an NFT team.
				Daily scheduling system for UC Santa Barbara Marine Science Institute Reef.
				Student scheduling system for the Aim High summer program attendees."
				skills={["JavaScript", "HTML", "CSS"]}
			/>

			<ExperienceSection 
				position="Teachers Assistant"
				company="Aim High Summer School"
				dates="2014 - 2019"
				description="Assisted in teaching physics and writing to underprivileged students.
				Led physics lessons for a class of ~20 students.
				Developed communication and teamwork skills."
				skills={["Teamwork", "Communication", "Leadership"]}
			/>
    </div>
	);
}


interface ExperienceSectionProps {
  position: string;
  company?: string;
	dates: string;
	description: string;
	skills?: string[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = (props) => {
	return(
		<div className="space-y-2">
			<div>
				<span className="text-gray-200">{props.position}</span>
				{props.company && <span className="text-gray-200"> - </span>}
				<span className="text-gray-200">{props.company}</span>
			</div>
			<div className="text-sm text-gray-500">{props.dates}</div>
			<div className="text-sm">{props.description}</div>
			{props.skills && <SkillsUsed skills={props.skills} />}
		</div>
	);
}

export default Experience;