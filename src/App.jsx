import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
	const [windowSize, setWindowSize] = useState(window.innerWidth);

	useEffect(() => {
		console.log(windowSize);
		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<>
			<NavBar windowSize={windowSize} />
			<main>
				<Hero />
				<About />
				<Projects />
			</main>
		</>
	);
}

export default App;
