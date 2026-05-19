interface HeroTextProps {
	heroText: string;
	team: string;
	company: string;
}

const HeroText = ({ heroText, team, company }: HeroTextProps) => {
	return (
		<p className="hero-text">
			{heroText}
			<br />
			<br />
			{" Currently, I am on the "}
			<br />
			<span className="hero-team">{team}</span>
			{" @ "}
			<span className="hero-company">{company}</span>
		</p>
	);
};

export default HeroText;
