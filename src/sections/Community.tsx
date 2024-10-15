import {
	ClipboardDocumentCheckIcon,
	ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

import communityIng from "../assets/images/illustration-3.png";

const Community: React.FC = () => {
	return (
		<section className="bg-brand pt-[120px] pb-[100px] px-4">
			<div className="container px-4 border-2 border-black md:px-20 lg:px-4 bg-secondary lg:max-w-[88%] rounded-xl">
				<div className="flex gap-4 p-3 mx-auto border-2 border-t-0 border-black w-fit bg-[#FFF9C9] rounded-b-md">
					<a className="bg-[#FFFBDF] p-2 border border-black shadow-[1px_1px_1px_0px] rounded-xl cursor-pointer">
						<ClipboardDocumentCheckIcon className="size-8" />
					</a>
					<a className="bg-[#FFFBDF] p-2 border border-black shadow-[1px_1px_1px_0px] rounded-xl cursor-pointer">
						<ClipboardDocumentIcon className="size-8" />
					</a>
				</div>
				<div className="mt-10 mb-5 space-y-4">
					<h2 className="text-5xl sm:text-6xl tracking-wider text-center font-brand text-[#fff9cd] text-outline  lg:text-7xl">
						Join our <br /> community
					</h2>
					<a className="block px-6 pt-3 pb-2 mx-auto border-2 border-black w-fit shadow-[4px_4px_0_0px] font-brand text-xl tracking-wider rounded-md xl:px-8 xl:pt-4 xl:pb-3 cursor-pointer">
						Buy $BUBU Now!
					</a>
				</div>
				<div className="lg:w-[60%] lg:mx-auto">
					<img
						src={communityIng}
						alt="illustration"
						className="block w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default Community;
