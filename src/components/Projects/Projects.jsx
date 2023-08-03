import { useState } from "react";
import { Share, Code } from "./svg";

const Projects = () => {
	const [projects] = useState([
		{
			name: "Where's Waldo",
			techStack: 'React, React Router, Firebase, Jest',
			description: "Photo tagging app similar to Where's Waldo where the user has to find three characters in a cluttered photo. ",
			imageName: 'waldoPreview.png',
			live: 'https://chrisrbentley.github.io/wheres-waldo/',
			source: 'https://github.com/chrisrbentley/wheres-waldo'
		},
		{
			name: 'CV Builder',
			techStack: 'React, CSS',
			description: 'CV Builder application where a user can enter information and generate a resume. This was the first React project I made.',
			imageName: 'cv.png',
			live: 'https://chrisrbentley.github.io/cv-app/',
			source: 'https://github.com/chrisrbentley/cv-app'
		},
		{
			name: 'Memory Card',
			techStack: 'React, CSS',
			description: 'Immerse yourself in the world of baseball with "Baseball Teams Matchup," a React-powered memory card game. Click cards to reveal logos of popular baseball teams, then reshuffle and match all 30 teams without repeating a card.',
			imageName: 'memoryCard.png',
			live: 'https://chrisrbentley.github.io/memory-card/',
			source: 'https://github.com/chrisrbentley/memory-card'
		}
	])
	return (
		<section>
			<h3
				id="projects"
				className="text-3xl p-2 m-3"
			>
				Projects
			</h3>
			{projects.map((project, index) => {
				return (
					<section key={index} className="flex flex-col items-center lg:flex-row m-8 drop-shadow-xl">
						<div className="">
							<h4 className="text-2xl">{project.name}</h4>
							<p className=""><span className="font-bold">Tech Stack:</span> {project.techStack}</p>
							<p className="">{project.description}</p>
							<div className="m-4 flex justify-center items-center gap-6">
								<a className="border-2 p-3 rounded-lg hover:border-[#77BFA3] hover:text-[#77BFA3] ease-in-out duration-300" href={project.live}>Live <span><Share /></span> </a>
								<a className="border-2 p-3 rounded-lg hover:border-[#77BFA3] hover:text-[#77BFA3] ease-in-out duration-300" href={project.source}>Source <Code />	</a>
							</div>
						</div>
						<img className="w-11/12 lg:w-1/2 border-4 border-[#77BFA3] rounded-lg" src={'../assets/projectImages/' + project.imageName } alt="" />

					</section>
				)
			})}
		</section>
	);
};

export default Projects;
