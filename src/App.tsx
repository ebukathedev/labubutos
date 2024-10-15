import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App: React.FC = () => {
	return (
		<main className="w-screen min-h-screen">
			<Navbar />
			<Hero />
			<Footer />
		</main>
	);
};

export default App;
