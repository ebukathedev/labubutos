import About from "./sections/About";
import Banner from "./sections/Banner";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Tokenomics from "./sections/Tokenomics";

const App: React.FC = () => {
	return (
		<main className="w-screen min-h-screen overflow-hidden font-montserrat">
			<Navbar />
			<Hero />
			<About />
			<Banner />
			<Tokenomics />
			{/* <Footer /> */}
		</main>
	);
};

export default App;
