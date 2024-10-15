import { useState } from "react";
import HamburgerButton from "../components/HamburgerButton";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed left-0 right-0 px-4 top-4">
			<div className="container bg-secondary py-4 px-4 flex items-center justify-between rounded-3xl shadow-[1px_2px_0_3px]">
				<div className="-mb-2 text-2xl tracking-widest font-brand text-outline ">
					LABUBUTOS
				</div>
				<HamburgerButton
					isMenuOpen={isMenuOpen}
					onClick={() => setIsMenuOpen((prev) => !prev)}
				/>
			</div>
		</header>
	);
};

export default Navbar;