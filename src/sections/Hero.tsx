import { useState } from "react";
import {
	ClipboardDocumentCheckIcon,
	ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

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
		<section className="flex-1 bg-brand py-[180px]">
			<div className="container px-4">
				<div className="space-y-4">
					<h1 className="text-6xl italic tracking-wide font-brand text-outline-light">
						Welcome to LABUBUTOS! 🚀
					</h1>
					<p className="text-lg font-semibold">
						The #1 Fan Token on Aptos – Be Part of the Revolution!
					</p>
				</div>
				<div>
					<div className="mt-8">
						<div className="text-xl font-brand">
							Contact Address
						</div>
						<div className="shadow-[1px_2px_0_3px] bg-secondary rounded-md px-4 py-2 flex items-center gap-4">
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
					<a className="block w-full px-4 py-2 mt-5 text-2xl text-center text-white rounded-md bg-accent font-brand">
						Buy $LBT
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
