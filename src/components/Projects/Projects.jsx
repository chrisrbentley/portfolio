import { useState } from 'react';
import { Share, Code } from './svg';

const Projects = () => {
	const [projects] = useState([
		{
			name: "Where's Waldo",
			techStack: 'React, React Router, Firebase, Jest',
			description:
				"Photo tagging app similar to Where's Waldo where the user has to find three characters in a cluttered photo. ",
			imageName: 'waldoPreview.png',
			live: 'https://chrisrbentley.github.io/wheres-waldo/',
			source: 'https://github.com/chrisrbentley/wheres-waldo',
			alt: "Preview of Where's Waldo app",
		},
		{
			name: 'CV Builder',
			techStack: 'React, CSS',
			description:
				'CV Builder application where a user can enter information and generate a resume. This was the first React project I made.',
			imageName: 'cv.png',
			live: 'https://chrisrbentley.github.io/cv-app/',
			source: 'https://github.com/chrisrbentley/cv-app',
			alt: 'Preview of CV Builder app',
		},
		{
			name: 'Memory Card',
			techStack: 'React, CSS',
			description:
				'Test your memory with Memory Card. Try to click all 30 teams without selecting a team twice.',
			imageName: 'memoryCard.png',
			live: 'https://chrisrbentley.github.io/memory-card/',
			source: 'https://github.com/chrisrbentley/memory-card',
			alt: 'Preview of Memory Card app app',
		},
	]);
	return (
		<section id="projects">
			<h3
				id="projects"
				className="text-3xl p-2 m-3"
			>
				Projects
			</h3>
			<section id="projects-container">
				{projects.map((project, index) => {
					return (
						<section
							key={index}
							className="m-8 flex flex-col justify-center items-center gap-3 lg:flex-row "
						>
							<div className="flex flex-col items-center gap-3 lg:w-1/2">
								<div
									id="project-head"
									className="flex flex-col gap-1"
								>
									<h4 className="text-2xl">{project.name}</h4>
									<p>Tech Stack: {project.techStack}</p>
									<p>{project.description}</p>
								</div>
								<div
									id="buttons"
									className="flex justify-evenly w-2/3"
								>
									<a
										className="border-2 p-3 rounded-lg hover:border-[#77BFA3] hover:text-[#77BFA3] ease-in-out duration-300"
										href={project.live}
									>
										Live{' '}
										<span>
											<Share />
										</span>
									</a>
									<a
										className="border-2 p-3 rounded-lg hover:border-[#77BFA3] hover:text-[#77BFA3] ease-in-out duration-300"
										href={project.source}
									>
										Source{' '}
										<span>
											<Code />
										</span>
									</a>
								</div>
							</div>

							<img
								src={'../assets/projectImages/' + project.imageName}
								alt={project.alt}
								className="max-w-full h-auto object-fit-cover border-2 border-[#77BFA3] rounded-lg lg:w-1/2"
							/>
						</section>
					);
				})}
			</section>
		</section>
	);
};

export default Projects;
