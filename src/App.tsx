import { lazy, Suspense } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const About = lazy(() => import("./sections/About"));
const Banner = lazy(() => import("./sections/Banner"));
const Community = lazy(() => import("./sections/Community"));
const Footer = lazy(() => import("./sections/Footer"));
const Roadmap = lazy(() => import("./sections/Roadmap"));
const Tokenomics = lazy(() => import("./sections/Tokenomics"));

const App: React.FC = () => {
	return (
		<main className="w-screen min-h-screen overflow-hidden font-montserrat">
			<Navbar />
			<Hero />
			<Suspense fallback={<div className="h-screen bg-brand animate-pulse" />}>
				<About />
				<Banner className="bg-brand" />
				<Tokenomics />
				<Roadmap />
				<Banner className="bg-tertiary" />
				<Community />
				<Footer />
			</Suspense>
		</main>
	);
};

export default App;
