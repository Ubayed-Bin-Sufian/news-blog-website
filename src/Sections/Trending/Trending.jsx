import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "../../Components/Image/Image";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../Components/firebase";

import firstImage from "../../assets/images/AI.jpg";
import secondImage from "../../assets/images/Gadget_Apple_Vision_Pro.webp";
import thirdImage from "../../assets/images/Companies.jpg";
import forthImage from "../../assets/images/Yann_Lecun.webp";

function Trending() {
	const [bg_color, setbg_color] = useState("bg-[#222222] ")
	const [authorFirstImage, setAuthorFirstImage] = useState("")
	const [contentFirstImage, setContentFirstImage] = useState("")
	const [dateFirstImage, setDateFirstImage] = useState("")
	const [headingFirstImage, setHeadingFirstImage] = useState("")
	const [imageFirstImage, setImageFirstImage] = useState("")

	const [authorSecondImage, setAuthorSecondImage] = useState("")
	const [contentSecondImage, setContentSecondImage] = useState("")
	const [dateSecondImage, setDateSecondImage] = useState("")
	const [headingSecondImage, setHeadingSecondImage] = useState("")
	const [imageSecondImage, setImageSecondImage] = useState("")

	const [authorThirdImage, setAuthorThirdImage] = useState("")
	const [contentThirdImage, setContentThirdImage] = useState("")
	const [dateThirdImage, setDateThirdImage] = useState("")
	const [headingThirdImage, setHeadingThirdImage] = useState("")
	const [imageThirdImage, setImageThirdImage] = useState("")

	const [authorFourthImage, setAuthorFourthImage] = useState("")
	const [contentFourthImage, setContentFourthImage] = useState("")
	const [dateFourthImage, setDateFourthImage] = useState("")
	const [headingFourthImage, setHeadingFourthImage] = useState("")
	const [imageFourthImage, setImageFourthImage] = useState("")

	useEffect(() => {		
		fetchDocumentData();	
	  }, []);

	const fetchDocumentData = async () => {
		
		try {

			// FIRST IMAGE
		  const docRefFirstImage = doc(db, "news_info", "first_image");
		  const docSnapFirstImage = await getDoc(docRefFirstImage);		  
	
		  if (docSnapFirstImage.exists()) {
			const data = docSnapFirstImage.data();
			console.log("Document data:", data)

			setAuthorFirstImage(data.author)
			setContentFirstImage(data.content)
			setDateFirstImage(data.date)
			setHeadingFirstImage(data.heading)
			setImageFirstImage(data.image)
			
		  } else {
			console.log("No such document!");
		  }		  

		  	// SECOND IMAGE
		  const docRefSecondImage = doc(db, "news_info", "second_image");
		  const docSnapSecondImage = await getDoc(docRefSecondImage);		  
	
		  if (docSnapSecondImage.exists()) {
			const data = docSnapSecondImage.data();
			console.log("Document data:", data)

			setAuthorSecondImage(data.author)
			setContentSecondImage(data.content)
			setDateSecondImage(data.date)
			setHeadingSecondImage(data.heading)
			setImageSecondImage(data.image)
			
		  } else {
			console.log("No such document!");
		  }

		  	// THIRD IMAGE
		  const docRefThirdImage = doc(db, "news_info", "third_image");
		  const docSnapThirdImage = await getDoc(docRefThirdImage);		  
	
		  if (docSnapThirdImage.exists()) {
			const data = docSnapThirdImage.data();
			console.log("Document data:", data)

			setAuthorThirdImage(data.author)
			setContentThirdImage(data.content)
			setDateThirdImage(data.date)
			setHeadingThirdImage(data.heading)
			setImageThirdImage(data.image)
			
		  } else {
			console.log("No such document!");
		  }

		  	// FOURTH IMAGE
		  const docRefFourthImage = doc(db, "news_info", "fourth_image");
		  const docSnapFourthImage = await getDoc(docRefFourthImage);		  
	
		  if (docSnapFourthImage.exists()) {
			const data = docSnapFourthImage.data();
			console.log("Document data:", data)

			setAuthorFourthImage(data.author)
			setContentFourthImage(data.content)
			setDateFourthImage(data.date)
			setHeadingFourthImage(data.heading)
			setImageFourthImage(data.image)
			
		  } else {
			console.log("No such document!");
		  }
		  
		} catch (error) {
		  console.error("Error fetching document: ", error);		  
		}
	  };

	return (
		<>
			{/* <div className='flex justify-center md:justify-between'>
				<div className='flex flex-col justify-center items-center md:flex-row p-3 md:p-5 gap-1 md:gap-3'>
					<Link
						className={
							bg_color + " text-white px-2 py-1 text-xs text-center flex items-center"
						}>
						TRENDING NOW
					</Link>
					<div
						className='text-[#3d3d3d] font-[450] hover:cursor-pointer text-center'
						onMouseEnter={() => setbg_color("bg-[#4db2ec] ")}
						onMouseLeave={() => setbg_color("bg-[#222222] ")}>
						Another Big Apartment Project Slated for Broad Ripple Company
					</div>
				</div>
				<div
					className='md:flex items-center gap-2 hidden'
					onMouseEnter={() => setbg_color("bg-[#4db2ec] ")}
					onMouseLeave={() => setbg_color("bg-[#222222] ")}>
					<Link className='border p-1 text-slate-300 hover:bg-[#4db2ec] hover:text-white'>
						<MdKeyboardArrowLeft size={15} />
					</Link>
					<Link className='border p-1 text-slate-300 hover:bg-[#4db2ec] hover:text-white'>
						<MdKeyboardArrowRight size={15} />
					</Link>
				</div>
			</div> */}

			<div className='mt-24 flex flex-col md:flex-row gap-[2px]'>
				<div className='w-full h-[320px] md:w-[49%] md:h-[400px] lg:h-[470px]'>
					<Image
						image={imageFirstImage}
						heading={headingFirstImage}
						content={contentFirstImage}
						author={authorFirstImage}
						date={dateFirstImage}
					/>
				</div>
				<div className='w-full h-[180px] md:w-[51%] md:h-[400px] lg:h-[470px] overflow-x-scroll md:overflow-hidden flex md:flex-col gap-[2px]'>
					<div className='w-[400px] md:w-full h-full md:h-[248px] lg:h-[298px] gap[2px]'>
						<div className='w-[340px] sm:w-[400px] h-full md:w-full'>
							<Image
								image={imageSecondImage}
								heading={headingSecondImage}
								content={contentSecondImage}
								author={authorSecondImage}
								date={dateSecondImage}
							/>
						</div>
					</div>
					<div className='flex w-[800px] md:w-full md:h-[150px] lg:h-[200px] gap-[2px]'>
						<div className='w-[340px] sm:w-[400px] md:w-1/2 h-full'>
							<Image
								image={imageThirdImage}
								heading={headingThirdImage}
								content={contentThirdImage}
								author={authorThirdImage}
								date={dateThirdImage}
							/>
						</div>
						<div className='w-[340px] sm:w-[400px] md:w-1/2 h-full'>
							<Image
								image={imageFourthImage}
								heading={headingFourthImage}
								content={contentFourthImage}
								author={authorFourthImage}
								date={dateFourthImage}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Trending;
