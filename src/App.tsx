import About from "./sections/About";
import Banner from "./sections/Banner";
import Community from "./sections/Community";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Roadmap from "./sections/Roadmap";
import Tokenomics from "./sections/Tokenomics";

const App: React.FC = () => {
	return (
		<main className="w-screen min-h-screen overflow-hidden font-montserrat">
			<Navbar />
			<Hero />
			<About />
			<Banner className="bg-brand" />
			<Tokenomics />
			<Roadmap />
			<Banner className="bg-tertiary" />
			<Community />
			{/* <Footer /> */}
		</main>
	);
};

export default App;
