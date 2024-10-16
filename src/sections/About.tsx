import bgIcon1 from "../assets/images/bg-icon-1.svg";
import bgIcon2 from "../assets/images/bg-icon-2.svg";
import bgIcon3 from "../assets/images/bg-icon-3.svg";
import bgIcon4 from "../assets/images/bg-icon-4.svg";

const About: React.FC = () => {
	return (
		<section
			id="about"
			className="relative flex-1 bg-tertiary pt-[120px] pb-[100px] border-b-[3px] border-black overflow-hidden"
		>
			<div className="container relative z-10 px-4 md:px-20 lg:px-4">
				<div className="flex flex-col gap-16 md:gap-8 lg:flex-row lg:items-center">
					<div className="lg:w-1/2 shadow-[2px_2px_0_3px] h-fit rounded-xl border-2 border-black">
						<img
							src={`https://res.cloudinary.com/drtebxtdt/image/upload/v1729040403/labubutos/illustration-1_qmcquq.png`}
							alt="illustration"
							className="block w-full"
							width="500"
							height="500"
						/>
					</div>
					<div className="lg:w-1/2">
						<h2 className="text-4xl sm:tracking-wide font-brand text-outline-accent xl:text-5xl">
							The Story behind Labubutos
						</h2>
						<div className="mt-6 space-y-3 font-medium">
							<p>
								The maker of Labubu, an artist named Kasing Lung
								created the Labubu doll in 2015 and is now a
								target for hanging bags.
							</p>
							<p>
								Kasing Lung who created the Labubu doll was born
								in 1972 in Hong Kong. He and his family moved to
								the Netherlands as children. Growing up in the
								Windmill Country, he became interested in
								ferries and fairies found in Norse folklore,
								which influences his work today
							</p>
							<p>
								"When I was a child, I loved reading storybooks
								and was influenced by ancient European fairy
								legends. At that time, there was no game console
								or computer, so I had to draw a doll with a pen,
								so I had the idea to paint fairy tales since
								childhood," he said.
							</p>
							<p>
								Kasing Lung is now based in Belgium and
								frequently travels to Hong Kong. While living in
								Belgium, she worked as a children's book
								illustrator. His book received an illustration
								award in Belgium.
							</p>
							<p>
								Labubu in "The Monsters" is described as a
								smiley monster with high, pointed ears and
								serrated teeth. Labubu's first impression looked
								evil, but his character was kind and helpful.
							</p>
						</div>
					</div>
				</div>
			</div>

			<img
				src={bgIcon1}
				alt="background icon"
				className="absolute w-[100px] top-10 left-0 opacity-75"
			/>
			<img
				src={bgIcon2}
				alt="background icon"
				className="absolute w-[100px] top-10 right-0 opacity-75"
			/>
			<img
				src={bgIcon3}
				alt="background icon"
				className="absolute w-[100px] bottom-0 left-0 opacity-75"
			/>
			<img
				src={bgIcon4}
				alt="background icon"
				className="absolute w-[200px] bottom-0 right-0 opacity-75"
			/>
		</section>
	);
};

export default About;
