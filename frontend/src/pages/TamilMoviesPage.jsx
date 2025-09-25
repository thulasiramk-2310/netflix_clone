import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { SMALL_IMG_BASE_URL, POPULAR_INDIAN_MOVIES } from '../utils/constants';


const TamilMoviesPage = () => {
    const [movies, setMovies] = useState({
        trending: [],
        popular: [],
        latest: [],
        topRated: [],
        search: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                // Use dedicated Tamil movie endpoints
                const trendingRes = await axios.get('/api/v1/movie/tamil/trending');
                const popularRes = await axios.get('/api/v1/movie/tamil/popular');
                const latestRes = await axios.get('/api/v1/movie/tamil/latest');
                const topRatedRes = await axios.get('/api/v1/movie/tamil/top-rated');

                setMovies({
                    trending: trendingRes.data.content || [],
                    popular: popularRes.data.content || [],
                    latest: latestRes.data.content || [],
                    topRated: topRatedRes.data.content || [],
                    search: []
                });
            } catch (error) {
                console.error('Error fetching Tamil movies:', error);
                // Fallback to general endpoints if Tamil-specific ones fail
                try {
                    const fallbackRes = await axios.get('/api/v1/movie/trending');
                    const filterTamilMovies = (movies) => {
                        return movies.filter(movie => {
                            const title = movie.title || movie.name;
                            return title && (
                                POPULAR_INDIAN_MOVIES.TAMIL.some(tamilMovie => 
                                    title.toLowerCase().includes(tamilMovie.toLowerCase()) ||
                                    tamilMovie.toLowerCase().includes(title.toLowerCase())
                                ) ||
                                /tamil|kollywood/i.test(movie.overview || '') ||
                                movie.original_language === 'ta'
                            );
                        });
                    };
                    
                    const filteredMovies = filterTamilMovies(Array.isArray(fallbackRes.data.content) ? fallbackRes.data.content : []);
                    setMovies({
                        trending: filteredMovies,
                        popular: filteredMovies,
                        latest: filteredMovies.slice(0, 10),
                        topRated: filteredMovies.slice(10, 20),
                        search: []
                    });
                } catch (fallbackError) {
                    console.error('Fallback fetch also failed:', fallbackError);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const MovieCard = ({ movie }) => (
        <div className="min-w-[250px] relative group cursor-pointer">
            <div className="rounded-lg overflow-hidden">
                <img 
                    src={SMALL_IMG_BASE_URL + movie.poster_path} 
                    alt={movie.title || movie.name}
                    className="w-full h-[375px] object-cover"
                />
            </div>
            <div className="mt-2">
                <h3 className="text-white font-semibold truncate">{movie.title || movie.name}</h3>
            </div>
        </div>
    );

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-black flex items-center justify-center">
                    <div className="text-white text-xl">Loading Tamil Movies...</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black text-white p-6">
                <h1 className="text-4xl font-bold mb-8">Tamil Movies</h1>
                <div className="flex gap-4 overflow-x-auto">
                    {movies.trending.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default TamilMoviesPage;
