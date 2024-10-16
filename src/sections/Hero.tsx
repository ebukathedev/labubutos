import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(
			"0xce1a44fa48a726258a11a499797bc38befa6bc2ef4019b686c59e0a301b1a1c8::BUBU::BUBU"
		);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section
			id="home"
			className="flex-1 bg-brand pt-[180px] pb-[100px] border-b-[3px] border-black"
		>
			<div className="container flex flex-col-reverse gap-10 px-4 md:items-center md:flex-row">
				<div className="w-full md:w-1/2">
					<div className="space-y-4 sm:text-center md:text-left">
						<h1 className="text-4xl italic tracking-wide sm:text-5xl lg:text-6xl font-brand text-outline-light">
							Welcome to{" "}
							<span className="whitespace-nowrap">
								LABUBUTOS! 🚀
							</span>
						</h1>
						<p className="text-lg font-semibold md:text-xl">
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
									0xce1a44fa48a726258a11a499797bc38befa6bc2ef4019b686c59e0a301b1a1c8::BUBU::BUBU
								</span>
								<button
									className="px-3 py-2 bg-black rounded-md text-brand"
									onClick={handleCopy}
								>
									{copied ? (
										<FontAwesomeIcon
											icon={faClipboardCheck}
											className="block text-brand size-6"
										/>
									) : (
										<FontAwesomeIcon
											icon={faCopy}
											className="block text-white size-6"
										/>
									)}
								</button>
							</div>
						</div>
						<div className="flex gap-2 max-[375px]:flex-col mt-5">
							<a
								href="https://app.panora.exchange/swap"
								target="_blank"
								rel="noreferrer"
								className="block w-full px-4 py-2 mx-auto text-2xl tracking-widest text-center text-white rounded-md text-outline bg-accent font-brand"
							>
								Buy $BUBU
							</a>
							<a
								href="https://dexscreener.com/aptos/liquidswapv0p5-11262"
								target="_blank"
								rel="noreferrer"
								className="block w-full px-4 py-2 mx-auto text-2xl tracking-widest text-center text-white rounded-md text-outline bg-accent font-brand"
							>
								Chart
							</a>
						</div>
					</div>
				</div>
				<div className="md:w-1/2">
					<div className="border-2 border-black rounded-full w-[70%] bg-secondary mx-auto md:w-[90%] bg-hero-pattern">
						<img
							src={`https://res.cloudinary.com/drtebxtdt/image/upload/v1729040403/labubutos/mascot_faakjr.png`}
							alt="Labubutos Mascot"
							className="md:-translate-x-1 md:translate-y-4"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
