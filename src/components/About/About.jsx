import { useState } from 'react';

const About = () => {
	const [skills] = useState([
		{ name: 'Javascript', fileName: 'javascript.svg' },
		{ name: 'React', fileName: 'react.svg' },
		{ name: 'Vite', fileName: 'vitejs.svg' },
		{ name: 'Vitest', fileName: 'vitest.svg' },
		{ name: 'Jest', fileName: 'jest.svg' },
		{ name: 'Webpack', fileName: 'webpack.svg' },
		{ name: 'Tailwind', fileName: 'tailwind.svg' },
		{ name: 'npm', fileName: 'npm.svg' },
		{ name: 'Git', fileName: 'git.svg' },
	]);

	return (
		<>
			<section>
				<h3
					id="about-me"
					className="text-3xl p-2"
				>
					About Me
				</h3>
				<div className="flex flex-col lg:flex-row justify-evenly items-center m-5">
					{/* <div className="text-xl"> */}
						<p className="text-center text-xl">
							Hi, I&apos;m Christopher Bentley, a front end web developer in the
							Metro-Atlanta area. {/* <br></br> */} When not coding, I enjoy watching
							baseball, playing video games, {/* <br></br> */} learning about new
							technologies and spending time with loved ones.
						</p>
					{/* </div> */}

					<img
						src="../assets/icons/computer.svg"
						className="h-auto w-2/4 lg:w-1/5"
						alt=""
					/>
				</div>
			</section>
			<section className="">
				<h4 className="text-2xl p-2">Skills & Tools</h4>
				<div className="flex flex-row flex-wrap m-7 justify-center">
					{skills.map((skill, index) => {
						return (
							<div
								key={index}
								className="flex flex-col justify-center items-center gap-3 m-3 hover:-translate-y-5 ease-in-out duration-300"
							>
								<img
									src={'../assets/icons/' + skill.fileName}
									alt=""
									className="h-16 w-16"
								/>
								<p>{skill.name}</p>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default About;
