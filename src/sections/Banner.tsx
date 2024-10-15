import Marquee from "react-fast-marquee";

interface Props {
	className: string;
}

const Banner: React.FC<Props> = ({ className }) => {
	return (
		<div className={`border-b-[3px] border-black py-5 gap-4 ${className}`}>
			<Marquee autoFill>
				<div className="text-lg lg:text-2xl">
					<span className="ml-8 tracking-wider text-black font-brand">
						$BUBU
					</span>
				</div>
			</Marquee>
		</div>
	);
};

export default Banner;
