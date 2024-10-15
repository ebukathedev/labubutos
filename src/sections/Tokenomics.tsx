import tokenomicsIng from "../assets/images/illustration-2.png";

const Tokenomics: React.FC = () => {
	return (
		<section className="bg-secondary pt-[120px] pb-[100px]">
			<div className="container px-4 md:px-20 lg:px-4 lg:w-[80%]">
				<div className="flex flex-col-reverse gap-16 md:gap-8 lg:flex-row-reverse lg:items-center">
					<div className="lg:w-1/2 shadow-[2px_2px_0_3px] h-fit rounded-xl border-2 border-black">
						<img
							src={tokenomicsIng}
							alt="illustration"
							className="block w-full"
						/>
					</div>
					<div className="lg:w-1/2">
						<h2 className="text-4xl sm:tracking-wide font-brand xl:text-5xl">
							How it works
						</h2>
						<div className="mt-6 space-y-3 font-medium">
							<p className="px-2 py-3 text-2xl font-semibold tracking-wide text-center border-2 border-black xl:text-3xl font-brand text-brand text-outline">
								Total Supply: <br className="sm:hidden" />{" "}
								<span className="whitespace-nowrap">
									1,000,000,000 $BUBU
								</span>
							</p>
							<div className="p-5 space-y-3 border-2 border-black bg-tertiary rounded-b-xl">
								<p>
									The LABUBUTOS ecosystem revolves around its
									token, BUBU, with a fixed total supply of
									1,000,000,000 BUBU tokens. This finite
									supply ensures the scarcity of BUBU,
									creating a foundation for long-term value.
								</p>
								<p>
									By capping the total supply at 1 billion
									tokens, LABUBUTOS maintains transparency and
									predictability in its tokenomics. As the
									project grows and demand increases, the
									fixed supply guarantees that no additional
									tokens will be minted, preserving the value
									for holders and participants.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tokenomics;
