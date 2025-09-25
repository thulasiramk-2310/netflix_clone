import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SMALL_IMG_BASE_URL } from "../utils/constants";

const RegionalMoviesPage = () => {
	const [tamilBlockbusters, setTamilBlockbusters] = useState([]);
	const [southIndianBlockbusters, setSouthIndianBlockbusters] = useState([]);
	const [recentIndianHits, setRecentIndianHits] = useState([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		const fetchRegionalMovies = async () => {
			try {
				setLoading(true);

				// Fetch Tamil Blockbusters
				const tamilRes = await fetch("/api/v1/movie/tamil/blockbusters");
				const tamilData = await tamilRes.json();
				if (tamilData.success) {
					setTamilBlockbusters(tamilData.content || []);
				}

				// Fetch South Indian Blockbusters
				const southRes = await fetch("/api/v1/movie/south-indian/blockbusters");
				const southData = await southRes.json();
				if (southData.success) {
					setSouthIndianBlockbusters(southData.content || []);
				}

				// Fetch Recent Indian Hits
				const recentRes = await fetch("/api/v1/movie/indian/recent-hits");
				const recentData = await recentRes.json();
				if (recentData.success) {
					setRecentIndianHits(recentData.content || []);
				}

			} catch (error) {
				console.error("Error fetching regional movies:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchRegionalMovies();
	}, []);

	if (loading) {
		return (
			<div className='min-h-screen bg-black text-white'>
				<Navbar />
				<div className='flex justify-center items-center h-96'>
					<div className='animate-spin rounded-full h-32 w-32 border-b-2 border-red-600'></div>
				</div>
			</div>
		);
	}

	const MovieSlider = ({ title, movies }) => (
		<div className='bg-black text-white relative px-5 md:px-20'>
			<h2 className='mb-4 text-2xl font-bold'>{title}</h2>
			<div className='flex space-x-4 overflow-x-scroll scrollbar-hide'>
				{movies.map((movie) => (
					<Link
						key={movie.id}
						to={`/watch/${movie.id}`}
						className='min-w-[250px] relative group'
					>
						<div className='rounded-lg overflow-hidden'>
							<img
								src={SMALL_IMG_BASE_URL + movie.poster_path}
								alt={movie.title}
								className='transition-transform duration-300 ease-in-out group-hover:scale-125'
								onError={(e) => {
									e.target.src = '/404.png';
								}}
							/>
							<div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
								<div className='text-center'>
									<h3 className='text-lg font-bold mb-2'>{movie.title}</h3>
									<p className='text-sm'>⭐ {movie.vote_average?.toFixed(1)}</p>
									<p className='text-xs'>{new Date(movie.release_date).getFullYear()}</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);

	return (
		<div className='bg-black min-h-screen text-white'>
			<Navbar />
			
			{/* Hero Section */}
			<div className='relative h-96 flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-600'>
				<div className='text-center z-10'>
					<h1 className='text-5xl font-bold mb-4'>Regional Cinema</h1>
					<p className='text-xl mb-8'>
						Discover the best of Tamil, Telugu, Malayalam, Kannada & Hindi movies
					</p>
					<div className='flex gap-4 justify-center'>
						<span className='px-4 py-2 bg-red-600 rounded'>Tamil</span>
						<span className='px-4 py-2 bg-blue-600 rounded'>Telugu</span>
						<span className='px-4 py-2 bg-green-600 rounded'>Malayalam</span>
						<span className='px-4 py-2 bg-yellow-600 rounded'>Kannada</span>
						<span className='px-4 py-2 bg-purple-600 rounded'>Hindi</span>
					</div>
				</div>
			</div>

			{/* Movie Sections */}
			<div className='py-10 space-y-12'>
				{tamilBlockbusters.length > 0 && (
					<MovieSlider 
						title="🎬 Tamil Blockbusters - Ponniyin Selvan, 96, Vikram & More"
						movies={tamilBlockbusters}
					/>
				)}

				{southIndianBlockbusters.length > 0 && (
					<MovieSlider 
						title="🌟 South Indian Blockbusters - RRR, Baahubali, K.G.F"
						movies={southIndianBlockbusters}
					/>
				)}

				{recentIndianHits.length > 0 && (
					<MovieSlider 
						title="🔥 Recent Indian Hits - Jawan, Pathaan, Leo, Jailer"
						movies={recentIndianHits}
					/>
				)}
			</div>

			{/* Language-wise Navigation */}
			<div className='px-5 md:px-20 py-10'>
				<h2 className='text-3xl font-bold mb-8 text-center'>Explore by Language</h2>
				<div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
					<Link 
						to="/tamil-movies" 
						className='bg-red-600 hover:bg-red-700 p-6 rounded-lg text-center transition-colors'
					>
						<h3 className='text-xl font-bold'>Tamil</h3>
						<p className='text-sm'>தமிழ்</p>
					</Link>
					<Link 
						to="/telugu-movies" 
						className='bg-blue-600 hover:bg-blue-700 p-6 rounded-lg text-center transition-colors'
					>
						<h3 className='text-xl font-bold'>Telugu</h3>
						<p className='text-sm'>తెలుగు</p>
					</Link>
					<Link 
						to="/malayalam-movies" 
						className='bg-green-600 hover:bg-green-700 p-6 rounded-lg text-center transition-colors'
					>
						<h3 className='text-xl font-bold'>Malayalam</h3>
						<p className='text-sm'>മലയാളം</p>
					</Link>
					<Link 
						to="/kannada-movies" 
						className='bg-yellow-600 hover:bg-yellow-700 p-6 rounded-lg text-center transition-colors'
					>
						<h3 className='text-xl font-bold'>Kannada</h3>
						<p className='text-sm'>ಕನ್ನಡ</p>
					</Link>
					<Link 
						to="/hindi-movies" 
						className='bg-purple-600 hover:bg-purple-700 p-6 rounded-lg text-center transition-colors'
					>
						<h3 className='text-xl font-bold'>Hindi</h3>
						<p className='text-sm'>हिन्दी</p>
					</Link>
				</div>
			</div>

			{/* Featured Movies Grid */}
			<div className='px-5 md:px-20 py-10'>
				<h2 className='text-3xl font-bold mb-8'>Featured Movies</h2>
				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
					{[...tamilBlockbusters, ...southIndianBlockbusters].slice(0, 12).map((movie) => (
						<Link
							key={movie.id}
							to={`/watch/${movie.id}`}
							className='relative group'
						>
							<img
								src={SMALL_IMG_BASE_URL + movie.poster_path}
								alt={movie.title}
								className='w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105'
								onError={(e) => {
									e.target.src = '/404.png';
								}}
							/>
							<div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
								<h3 className='text-sm font-bold truncate'>{movie.title}</h3>
								<p className='text-xs'>⭐ {movie.vote_average?.toFixed(1)}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default RegionalMoviesPage;