const AboutMe: React.FC = () => {
	const paragraph1 = `I discovered my passion for computer science and problem-solving while studying at City College of San Francisco in 2017. After earning my B.S. in Computer Science from UC Santa Cruz in 2023, I quickly transitioned from an internship to a key development role at Diagnose Early, where I was the sole developer of a mobile health app. I took the app from its early stages to full functionality, integrating features such as Bluetooth communication, data visualization, and an intuitive user interface.`
  const paragraph2 = `Throughout my journey, I've worked on various personal projects to challenge myself and expand my skill set. These projects include physics simulations, self-landing rockets using machine learning, and a Solar System simulation using React and Three.js. I am passionate about creating efficient, high-quality code and am excited to continue growing as a developer in the field of computer graphics engineering or other areas of software development.`
	return (
		<div className="space-y-4">
			<p>
				{paragraph1}
			</p>
			<p>
				{paragraph2}
			</p>
		</div>
	);
}

export default AboutMe;