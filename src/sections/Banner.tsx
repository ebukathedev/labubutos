import Marquee from "react-fast-marquee";

const Banner: React.FC = () => {
	return (
		<div className="bg-brand border-b-[3px] border-black py-5 gap-4">
			<Marquee autoFill>
				<div className="text-lg lg:text-2xl">
					<span className="ml-8 tracking-wider text-black font-brand">
						$LABUBUTOS
					</span>
				</div>
			</Marquee>
		</div>
	);
};

export default Banner;
