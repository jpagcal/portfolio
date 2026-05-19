import ChatButton from "./assets/components/ChatButton";
import HeroText from "./assets/components/HeroText";
import ProjectsButton from "./assets/components/ProjectsButton";

function App() {
	const heroText = `
		I'm a software engineer with a passion for demystifying low-level constructs and
		exploring how high-performance systems operate at scale.
		`;
	const team = "Transaction Tooling Team";
	const company = "People Inc.";

	return (
		<>
			<section className="hero">
				<div className="hero-text-plus-buttons">
					<HeroText {...{ heroText, team, company }} />
					<div className="buttons">
						<ChatButton />
						<ProjectsButton />
					</div>
				</div>
			</section>
			<section className="projects">
				<div className="proj-nav"></div>
				<div className="proj-desc"></div>
			</section>
		</>
	);
}

export default App;
