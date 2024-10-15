import { useState } from "react";
import {
	ClipboardDocumentCheckIcon,
	ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

import heroImg from "../assets/images/mascot.png";
// import Banner from "./Banner";

const Hero: React.FC = () => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(
			"0xAbC1234567890DefABC1234567890DefABC12345"
		);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section className="flex-1 bg-brand pt-[180px] pb-[100px] border-b-[3px] border-black">
			<div className="container flex flex-col-reverse gap-10 px-4 md:items-center md:flex-row">
				<div className="w-full md:w-1/2">
					<div className="space-y-4 sm:text-center md:text-left">
						<h1 className="text-4xl italic tracking-wide sm:text-5xl lg:text-6xl font-brand text-outline-light">
							Welcome to{" "}
							<span className="whitespace-nowrap">
								LABUBUTOS! 🚀
							</span>
						</h1>
						<p className="font-semibold md:text-xl">
							The #1 Meme Fan Token on Aptos – Be Part of the
							Revolution!
						</p>
					</div>
					<div className="max-w-lg mx-auto md:mx-0">
						<div className="mt-8">
							<div className="text-xl tracking-wider font-brand">
								Contact Address
							</div>
							<div className="shadow-[1px_2px_0_3px] bg-secondary rounded-md px-4 py-2 flex items-center justify-between gap-4">
								<span
									className="text-sm font-semibold truncate"
									onClick={handleCopy}
								>
									0xAbC1234567890DefABC1234567890DefABC1...
								</span>
								<button
									className="px-3 py-2 bg-black rounded-md text-brand"
									onClick={handleCopy}
								>
									{copied ? (
										<ClipboardDocumentCheckIcon className="block text-brand size-6" />
									) : (
										<ClipboardDocumentIcon className="block text-white size-6" />
									)}
								</button>
							</div>
						</div>
						<div className="flex gap-2">
							<a className="block w-full px-4 py-2 mx-auto mt-5 text-2xl tracking-widest text-center text-white rounded-md text-outline bg-accent font-brand">
								Buy $LBT
							</a>
							<a className="block w-full px-4 py-2 mx-auto mt-5 text-2xl tracking-widest text-center text-white rounded-md text-outline bg-accent font-brand">
								Chart
							</a>
						</div>
					</div>
				</div>
				<div className="md:w-1/2">
					<div className="border-2 border-black rounded-full w-[70%] bg-secondary mx-auto md:w-[90%] bg-hero-pattern">
						<img
							src={heroImg}
							alt="Labubutos Mascot"
							className="md:-translate-x-1 md:translate-y-4"
						/>
					</div>
				</div>
			</div>
			{/* <Banner /> */}
		</section>
	);
};

export default Hero;
