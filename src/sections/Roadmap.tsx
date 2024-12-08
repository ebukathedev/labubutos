import { memo } from "react";

const roadmap = [
	{
		id: 1,
		title: "Token Launch & Community Building 🚀",
		description:
			"Launch of LABUBUTOS on the market, focusing on building a strong and engaged community.",
	},
	{
		id: 2,
		title: "Community Engagement & Collaborations 🎉",
		description:
			"Expanding our reach through community growth and strategic partnerships.",
	},
	{
		id: 3,
		title: "CEX Listing & Expansion 🔥",
		description:
			"After launching on DEX, we'll secure listings on major centralized exchanges (CEX).",
	},
	{
		id: 4,
		title: "Global Partnerships & Utility Growth 🌐",
		description:
			"Partnering with key players worldwide and expanding real-world use cases for $BUBU.",
	},
] as const;

const RoadmapCard = memo(({ id, title, description }: typeof roadmap[number]) => (
  <div className="border-2 border-black shadow-[1px_2px_0_3px] rounded-xl">
    <div>
      <div className="pt-2 pb-1 text-2xl tracking-wider text-center bg-yellow-200 border-b-2 border-black font-brand rounded-t-xl">
        Phase {id}
      </div>
      <div className="px-3 py-1 text-sm font-bold text-center border-b-2 border-black">
        {title}
      </div>
    </div>
    <p className="px-4 py-2 pb-4 font-medium text-center">
      {description}
    </p>
  </div>
));

const Roadmap: React.FC = () => {
	return (
		<section
			id="roadmap"
			className="flex-1 bg-secondary pt-[120px] pb-[100px] border-b-[3px] border-black"
		>
			<div className="container px-4 md:px-20 lg:px-4 lg:w-[80%] space-y-8">
				<h2 className="text-4xl text-center sm:tracking-wide font-brand xl:text-5xl">
					Roadmap
				</h2>
				<div className="grid gap-6 max-w-[440px] mx-auto md:grid-cols-2 md:max-w-none md:mx-0 xl:grid-cols-4">
					{roadmap.map((item) => (
						<RoadmapCard key={item.id} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default memo(Roadmap);
