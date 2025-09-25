import { useEffect, useRef, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";
import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL, LANGUAGE_NAMES } from "../utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MultiLanguageMovieSlider = ({ category, title, type, language, flag }) => {
	const { contentType } = useContentStore();
	const [content, setContent] = useState([]);
	const [showArrows, setShowArrows] = useState(false);

	const sliderRef = useRef(null);

	useEffect(() => {
		const getContent = async () => {
			try {
				let apiUrl;
				
				// Determine API URL based on type and category
				if (type === "tamil_movie") {
					apiUrl = `/api/movie/tamil/${category}`;
				} else if (type === "hindi_movie") {
					apiUrl = `/api/movie/hindi/${category}`;
				} else if (type === "telugu_movie") {
					apiUrl = `/api/movie/telugu/${category}`;
				} else if (type === "malayalam_movie") {
					apiUrl = `/api/movie/malayalam/${category}`;
				} else if (type === "kannada_movie") {
					apiUrl = `/api/movie/kannada/${category}`;
				} else if (type === "marathi_movie") {
					apiUrl = `/api/movie/marathi/${category}`;
				} else if (type === "bengali_movie") {
					apiUrl = `/api/movie/bengali/${category}`;
				} else if (type === "punjabi_movie") {
					apiUrl = `/api/movie/punjabi/${category}`;
				} else if (type === "korean_movie") {
					apiUrl = `/api/movie/korean/${category}`;
				} else if (type === "japanese_movie") {
					apiUrl = `/api/movie/japanese/${category}`;
				} else {
					// Default to regular movie/tv categories
					apiUrl = `/api/${type}/${category}`;
				}

				const res = await axios.get(apiUrl);
				setContent(res.data.content || []);
			} catch (error) {
				console.error("Error fetching content:", error);
				setContent([]);
			}
		};

		getContent();
	}, [contentType, category, type]);

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
		}
	};
	
	const scrollRight = () => {
		sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
	};

	if (!content || content.length === 0) {
		return null;
	}

	return (
		<div
			className='bg-black text-white relative px-5 md:px-20'
			onMouseEnter={() => setShowArrows(true)}
			onMouseLeave={() => setShowArrows(false)}
		>
			<h2 className='mb-4 text-2xl font-bold flex items-center gap-2'>
				{flag && <span className="text-2xl">{flag}</span>}
				{title}
				{language && (
					<span className="bg-gray-800 text-xs px-2 py-1 rounded-full">
						{LANGUAGE_NAMES[language] || language.toUpperCase()}
					</span>
				)}
			</h2>

			<div className='flex space-x-4 overflow-x-scroll scrollbar-hide' ref={sliderRef}>
				{content.map((item) => (
					<Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
						<div className='rounded-lg overflow-hidden'>
							<img
								src={SMALL_IMG_BASE_URL + item.poster_path}
								alt={item.title || item.name}
								className='transition-transform duration-300 ease-in-out group-hover:scale-125'
								onError={(e) => {
									e.target.src = '/404.png';
								}}
							/>
							
							{/* Language badge */}
							{item.original_language && (
								<div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
									{LANGUAGE_NAMES[item.original_language] || item.original_language.toUpperCase()}
								</div>
							)}
							
							{/* Rating badge */}
							{item.vote_average > 0 && (
								<div className="absolute top-2 right-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded flex items-center">
									⭐ {item.vote_average.toFixed(1)}
								</div>
							)}

							{/* Release year */}
							{(item.release_date || item.first_air_date) && (
								<div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
									{(item.release_date || item.first_air_date).split('-')[0]}
								</div>
							)}
						</div>
						
						{/* Movie title */}
						<p className='mt-2 text-center text-sm font-semibold'>
							{item.title || item.name}
						</p>
						
						{/* Original title if different */}
						{item.original_title && item.original_title !== item.title && (
							<p className='text-center text-xs text-gray-400 italic'>
								{item.original_title}
							</p>
						)}
					</Link>
				))}
			</div>

			{/* Arrow buttons */}
			{showArrows && content.length > 5 && (
				<>
					<button
						className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
						size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
						onClick={scrollLeft}
					>
						<ChevronLeft size={24} />
					</button>

					<button
						className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
						size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
						onClick={scrollRight}
					>
						<ChevronRight size={24} />
					</button>
				</>
			)}
		</div>
	);
};

export default MultiLanguageMovieSlider;