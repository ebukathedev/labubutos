import { useEffect, useState } from "react";
import HamburgerButton from "../components/HamburgerButton";

const navLinks = ["Home", "About", "Tokenomics", "Roadmap", "Community"];

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const toggleMenu = () => {
		if (!isMenuOpen) {
			setIsVisible(true); // Make it visible right away
			setTimeout(() => setIsMenuOpen(true), 200); // Set the menu to open immediately
		} else {
			// Add a delay to allow the fade-out transition to complete before hiding
			setTimeout(() => setIsMenuOpen(false), 200); // Adjust delay based on your transition duration
		}
	};

	// Handle transition end to fully remove menu after fading out
	useEffect(() => {
		if (!isMenuOpen) {
			const timeoutId = setTimeout(() => {
				setIsVisible(false);
			}, 200); // Duration matching the CSS transition time

			return () => clearTimeout(timeoutId);
		} else {
			setIsVisible(true);
		}
	}, [isMenuOpen]);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 px-4 pt-5">
			<div className="relative container bg-secondary py-4 px-4 flex items-center justify-between rounded-3xl shadow-[1px_2px_0_3px] lg:max-w-[1024px]">
				<div className="-mb-2 text-2xl tracking-widest font-brand text-outline text-brand">
					LABUBUTOS
				</div>
				<HamburgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />

				{/* Desktop Nav */}
				<nav>
					<ul className="items-center hidden gap-2 pt-1 text-lg tracking-widest md:flex font-brand">
						{navLinks.map((link) => (
							<li key={link}>
								<a
									className="p-1 transition-all duration-200 ease-in hover:text-brand hover:text-outline"
									href={`#${link.toLowerCase()}`}
								>
									{link}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Mobile Nav */}
				{isVisible && (
					<nav
						className={`absolute right-0 border-2 border-black rounded-[10px] bg-secondary top-20 p-[10px] w-full max-w-[300px] transition-all duration-300 ease-in-out shadow-[0px_3px_0px] md:hidden ${
							isMenuOpen
								? "opacity-1 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}
					>
						<ul className="text-xl tracking-widest text-center font-brand bg-brand py-[30px] gap-8 flex flex-col rounded-2xl">
							{navLinks.map((link) => (
								<li key={link}>
									<a
										className="p-1 transition-all duration-200 ease-in hover:text-brand hover:text-outline"
										href={`#${link.toLowerCase()}`}
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Navbar;
