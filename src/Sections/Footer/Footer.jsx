import Card from "../../Components/Card/Card";
import footerImage from "../../assets/images/footer-bg1.jpg";

import image from "../../assets/images/house.webp";
import image_105 from "../../assets/images/105-218x150.jpg.webp";
import image_104 from "../../assets/images/104-218x150.jpg.webp";
import image_101 from "../../assets/images/101-218x150.jpg.webp";
import image_91 from "../../assets/images/91-218x150.jpg.webp";

import image_max from "../../assets/images/maxresdefault-7-485x360.jpg.webp";
import image_54 from "../../assets/images/54-485x360.jpg.webp";
import LinkArrows from "../../Components/LinkArrows/LinkArrows";
import { Link } from "react-router-dom";

const section_1 = [
	{
		image: image_105,
		content: "Have a look around this bold and colourful 1930s semi in London",
	},
	{
		image: image_104,
		content: "Outdoor Kitchen Decorating: Furnish and Accessorize with Flair",
	},
	{
		image: image_101,
		content: "Interior Design Tips: Decorating to Celebrate the Great Outdoors",
	},
];

function Footer() {
	return (
		<div className='flex w-full mt-10 text-white'>
			<div className='w-full relative  md:min-h-[800px] min-h-[1000px]'>
				<div className='absolute top-0 left-0 w-full h-full'>
					<img src={footerImage} className='w-full h-full object-cover' alt='' />
				</div>
				<div className='top-0 left-0 bottom-0 absolute w-full h-full bg-neutral-900 opacity-[0.9] z-10 text-white'>
					<div className='mx-auto max-w-[1070px] h-full flex flex-col px-6 md:px-2'>
						<div className='w-full pt-12'>
							<div className='flex flex-col md:flex-row md:gap-[2%]'>
								{["EDITOR PICKS", "POPULAR POSTS"].map((item, index) => (
									<>
										<div key={index} className='flex flex-col gap-4 w-full md:w-[32%]'>
											<div className='flex text-white font-semibold'>{item}</div>
											{section_1.map((section, index) => (
												<>
													<Card
														key={index}
														card_class={"flex gap-5 w-full"}
														image_class={
															"w-[100px] sm:w-[150px] sm:h-[90px] md:w-[100px] h-[60px] md:h-[80px]"
														}
														image={section.image}
														title={section.content}
														author={"author"}
														text_hover={" text-[#f9c100] "}
														text_size={"text-sm text-white"}
													/>
												</>
											))}
										</div>
									</>
								))}
								<div className='flex flex-col gap-4 w-full md:w-[32%]'>
									<div className='flex text-white font-semibold'>POPULAR CATEGORY</div>
									{[
										{ category: "Racing", score: 20 },
										{ category: "Interiors", score: 30 },
										{ category: "Architecture", score: 15 },
										{ category: "Make it Modern", score: 10 },
										{ category: "Decorating", score: 10 },
										{ category: "Travel", score: 25 },
									].map((item, index) => (
										<>
											<Link
												key={index}
												className='flex items-center justify-between w-full'>
												<span>{item.category}</span>
												<span>{item.score}</span>
											</Link>
										</>
									))}
								</div>
							</div>
						</div>
						<div className='w-full px-[10%] py-20'>
							<div className='w-full border-b-gray-500 border-b-[1px]'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
