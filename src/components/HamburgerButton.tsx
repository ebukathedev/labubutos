import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isMenuOpen: boolean;
}

const HamburgerButton: React.FC<Props> = ({ isMenuOpen, ...rest }) => {
	return (
		<button
			{...rest}
			className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-black rounded-2xl size-12 md:hidden ml-auto ${rest.className}`}
		>
			<div
				className={`h-[1px] w-4 bg-secondary origin-center transition-all duration-300 ${
					isMenuOpen && "rotate-45 translate-y-[5px]"
				}`}
			></div>
			<div
				className={`h-[1px] w-4 bg-secondary  origin-center transition-all duration-300 ${
					isMenuOpen && "-rotate-45 -translate-y-[4px]"
				}`}
			></div>
		</button>
	);
};

export default HamburgerButton;
