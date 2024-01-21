/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const data = {
	title: "DON'T MISS",
	categories: [
		"All",
		"Style Hunter",
		"Vogue",
		"Health & Fitness",
		"Travel",
		"Gadgets",
	],
};
function Heading({ hover_color, border_color, bg_color, text_color }) {
	return (
		<div className={`w-full flex justify-between ${border_color}`}>
			<div
				className={
					"flex item-center p-[3px] px-3 text-[14px] font-medium " + bg_color
				}>
				{data.title}
			</div>
			<div className='flex item-center gap-3'>
				{data.categories.map((category, index) => (
					<Link
						key={index}
						className={`text-[#3d3d3d] text-sm font-medium ${hover_color} ${
							index == 0 && text_color
						}`}>
						{category}
					</Link>
				))}
			</div>
		</div>
	);
}

export default Heading;
