import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const NavBar = ({ windowSize }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [navLinks] = useState([
		{ name: 'Home', href: '/' },
		{ name: 'About Me', href: '#about-me' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Resume', href: '#resume' },
	]);

	const handleOpen = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="flex justify-center">
			{windowSize <= 1000 ? (
				<div className="flex justify-center flex-col w-4/5">
					<button
						className="p-2 m-2 self-start "
						onClick={handleOpen}
					>
						Menu
					</button>
					{menuOpen && (
						<div className="flex flex-col origin-top animate-[expand_500ms_ease-in-out]">
							{navLinks.map((link, index) => {
								return (
									<a
										className="text-lg p-1"
										key={index}
										href={link.href}
									>
										{link.name}
									</a>
								);
							})}
						</div>
					)}
				</div>
			) : (
				<div className="flex justify-end w-4/5">
					{navLinks.map((link, index) => {
						return (
							<a
								className="p-2 text-xl transition-all duration-300 hover:scale-110"
								key={index}
								href={link.href}
							>
								{link.name}
							</a>
						);
					})}
				</div>
			)}
		</nav>
	);
};

export default NavBar;
