import React, { memo } from "react";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";

const SocialLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="bg-[#FFFBDF] p-2 border border-black shadow-[1px_1px_1px_0px] rounded-xl cursor-pointer hover:shadow-none transition-shadow"
  >
    {children}
  </a>
));

const Community: React.FC = () => {
	return (
		<section id="community" className="bg-brand pt-[120px] pb-[100px] px-4">
			<div className="container px-4 border-2 border-black md:px-20 lg:px-4 bg-secondary lg:max-w-[88%] rounded-xl">
				<div className="flex gap-4 p-3 mx-auto border-2 border-t-0 border-black w-fit bg-[#FFF9C9] rounded-b-md">
					<SocialLink href="https://x.com/labubuonaptos" >
						<FaXTwitter className="size-8"/>
					</SocialLink>
					<SocialLink href="https://t.me/labubuonaptos">
						<FaTelegram className="size-8"/>
					</SocialLink>
				</div>
				<div className="mt-10 mb-5 space-y-4">
					<h2 className="text-5xl sm:text-6xl tracking-wider text-center font-brand text-[#fff9cd] text-outline  lg:text-7xl">
						Join our <br /> community
					</h2>
					<a
						href="https://app.panora.exchange/swap"
						target="_blank"
						rel="noreferrer"
						className="block px-6 pt-3 pb-2 mx-auto border-2 border-black w-fit shadow-[4px_4px_0_0px] font-brand text-xl tracking-wider rounded-md xl:px-8 xl:pt-4 xl:pb-3 cursor-pointer"
					>
						Buy $BUBU Now!
					</a>
				</div>
				<div className="lg:w-[60%] lg:mx-auto">
					<img
						src={`https://res.cloudinary.com/drtebxtdt/image/upload/q_auto,f_auto,w_500/v1729040403/labubutos/illustration-3_hfv0f8.png`}
						alt="illustration"
						className="block w-full"
						width="500"
						height="500"
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>
		</section>
	);
};

export default memo(Community);
