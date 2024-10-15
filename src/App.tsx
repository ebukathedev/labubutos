import About from "./sections/About";
import Banner from "./sections/Banner";
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
			<Banner />
			<Tokenomics />
			<Roadmap />
			{/* <Footer /> */}
		</main>
	);
};

export default App;
