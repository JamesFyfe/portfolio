const FooterContent: React.FC = () => {
	return (
		<div className="mt-32 text-sm">
			<span className="text-gray-400">
				Built using the <ClickableLink link="https://t3.gg/" text="T3 stack" /> with <ClickableLink link="https://github.com/pmndrs/react-three-fiber" text="React Three Fiber" />, and <ClickableLink link="https://tailwindcss.com/" text="Tailwind CSS" />,
				deplayed with <ClickableLink link="https://vercel.com/" text="Vercel" />. 
				Layout inspired by <ClickableLink link="https://brittanychiang.com/" text="brittanychiang.com" />
			</span>
		</div>
	);
}

export default FooterContent;

interface ClickableLinkProps {
	link: string;
	text: string;
}

const ClickableLink: React.FC<ClickableLinkProps> = (props) => {
	return (
		<a href={props.link} target="_blank" rel="noopener noreferrer" className="text-gray-200">
			{props.text}
		</a>
	)
}
