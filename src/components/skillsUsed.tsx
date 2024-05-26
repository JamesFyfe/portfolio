interface SkillsUsedProps {
	skills: string[];
}

const SkillsUsed: React.FC<SkillsUsedProps> = (props) => {
	return(
		<div className="space-x-2">
			{props.skills.map((skill, index) => 
				<span key={index} className="border border-blue-300 text-xs p-1 rounded-lg text-blue-300">{skill}</span>
			)}
		</div>
	);
}

export default SkillsUsed;