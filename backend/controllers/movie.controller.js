import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US&include_adult=true");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// New endpoint for Tamil trending movies
export async function getTamilTrendingMovie(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?with_original_language=ta&sort_by=popularity.desc&language=ta&include_adult=true");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// New endpoint for popular Tamil movies
export async function getPopularTamilMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?with_original_language=ta&sort_by=popularity.desc&page=1&include_adult=true");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// New endpoint for latest Tamil movies
export async function getLatestTamilMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?with_original_language=ta&sort_by=release_date.desc&page=1&include_adult=true");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// New endpoint for top-rated Tamil movies
export async function getTopRatedTamilMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?with_original_language=ta&sort_by=vote_average.desc&vote_count.gte=100&page=1&include_adult=true");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Search for specific Tamil movies by name
export async function searchTamilMovies(req, res) {
	const { query } = req.params;
	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=ta&page=1`
		);
		
		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchTamilMovies: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Telugu Movies Controllers
export async function getTrendingTeluguMovie(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=te&page=1&sort_by=popularity.desc&with_original_language=te");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getPopularTeluguMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=te&page=1&sort_by=popularity.desc&with_original_language=te");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function searchTeluguMovies(req, res) {
	const { query } = req.params;
	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=te&page=1`
		);
		
		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchTeluguMovies: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Malayalam Movies Controllers
export async function getTrendingMalayalamMovie(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=ml&page=1&sort_by=popularity.desc&with_original_language=ml");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getPopularMalayalamMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=ml&page=1&sort_by=popularity.desc&with_original_language=ml");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function searchMalayalamMovies(req, res) {
	const { query } = req.params;
	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=ml&page=1`
		);
		
		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchMalayalamMovies: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Kannada Movies Controllers
export async function getTrendingKannadaMovie(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=kn&page=1&sort_by=popularity.desc&with_original_language=kn");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getPopularKannadaMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=kn&page=1&sort_by=popularity.desc&with_original_language=kn");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function searchKannadaMovies(req, res) {
	const { query } = req.params;
	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=kn&page=1`
		);
		
		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchKannadaMovies: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Marathi Movies Controllers
export async function getTrendingMarathiMovie(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=mr&page=1&sort_by=popularity.desc&with_original_language=mr");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getPopularMarathiMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=mr&page=1&sort_by=popularity.desc&with_original_language=mr");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function searchMarathiMovies(req, res) {
	const { query } = req.params;
	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=mr&page=1`
		);
		
		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchMarathiMovies: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Bengali Movies Controllers
export async function getTrendingBengaliMovie(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=bn&page=1&sort_by=popularity.desc&with_original_language=bn");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getPopularBengaliMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=bn&page=1&sort_by=popularity.desc&with_original_language=bn");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function searchBengaliMovies(req, res) {
	const { query } = req.params;
	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=bn&page=1`
		);
		
		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchBengaliMovies: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Punjabi Movies Controllers
export async function getTrendingPunjabiMovie(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=pa&page=1&sort_by=popularity.desc&with_original_language=pa");
		const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.json({ success: true, content: randomMovie });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getPopularPunjabiMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=pa&page=1&sort_by=popularity.desc&with_original_language=pa");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function searchPunjabiMovies(req, res) {
	const { query } = req.params;
	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=pa&page=1`
		);
		
		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchPunjabiMovies: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Get popular Tamil movies from specific years (Kollywood classics and recent hits)
export async function getTamilMoviesByYear(req, res) {
	const { year } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/discover/movie?with_original_language=ta&primary_release_year=${year}&sort_by=popularity.desc&page=1&include_adult=true`);
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Get Tamil movies by specific actors (like Rajinikanth, Kamal Haasan, Vijay, Ajith, etc.)
export async function getTamilMoviesByActor(req, res) {
	const { actorId } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/discover/movie?with_original_language=ta&with_people=${actorId}&sort_by=popularity.desc&page=1&include_adult=true`);
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Hindi Movies Endpoints
export async function getPopularHindiMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.desc&page=1&include_adult=true");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getTrendingHindiMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.desc&language=hi&include_adult=true");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Korean Movies Endpoints
export async function getPopularKoreanMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?with_original_language=ko&sort_by=popularity.desc&page=1&include_adult=true");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getTrendingKoreanMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?with_original_language=ko&sort_by=popularity.desc&language=ko&include_adult=true");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Japanese Movies Endpoints
export async function getPopularJapaneseMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?with_original_language=ja&sort_by=popularity.desc&page=1&include_adult=true");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getTrendingJapaneseMovies(req, res) {
	try {
		const data = await fetchFromTMDB("https://api.themoviedb.org/3/discover/movie?with_original_language=ja&sort_by=popularity.desc&language=ja&include_adult=true");
		res.json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getMovieTrailers(req, res) {
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
		res.json({ success: true, trailers: data.results });
	} catch (error) {
		if (error.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getMovieDetails(req, res) {
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
		res.status(200).json({ success: true, content: data });
	} catch (error) {
		if (error.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getSimilarMovies(req, res) {
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1&include_adult=true`);
		res.status(200).json({ success: true, similar: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getMoviesByCategory(req, res) {
	const { category } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1&include_adult=true`);
		res.status(200).json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

// Get specific popular Tamil movies including Meiyazhagan, Ponniyin Selvan, 96 etc.
export async function getTamilBlockbusters(req, res) {
    try {
        const popularTamilMovieIds = [
            615469, // Ponniyin Selvan: I
            800497, // Ponniyin Selvan: II  
            486589, // 96
            524481, // Vikram
            1084736, // Leo
            980078, // Jailer
            447264, // Master
            574982, // Kaithi
            840326, // Varisu
            840705, // Thunivu
            447277, // K.G.F: Chapter 2
            509635, // RRR
            338967, // Baahubali 2
            259316  // Baahubali: The Beginning
        ];

        const movieDetails = [];
        
        for (const movieId of popularTamilMovieIds.slice(0, 12)) {
            try {
                const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&include_adult=true`);
                movieDetails.push(data);
            } catch (error) {
                console.log(`Failed to fetch movie ID ${movieId}:`, error.message);
            }
        }

        res.json({ 
            success: true, 
            content: movieDetails,
            category: "Tamil Blockbusters",
            total: movieDetails.length
        });

    } catch (error) {
        console.log("Error in getTamilBlockbusters: ", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// Get popular movies across all South Indian languages
export async function getSouthIndianBlockbusters(req, res) {
    try {
        const southIndianHits = [
            // Tamil
            615469, // Ponniyin Selvan: I
            486589, // 96
            524481, // Vikram
            1084736, // Leo
            // Telugu  
            509635, // RRR
            338967, // Baahubali 2
            259316, // Baahubali: The Beginning
            // Kannada
            447277, // K.G.F: Chapter 2
            // Malayalam
            820525, // Minnal Murali
            // Multi-language hits
            951491, // Jawan
            677179, // Pathaan
            980078  // Jailer
        ];

        const movieDetails = [];
        
        for (const movieId of southIndianHits) {
            try {
                const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&include_adult=true`);
                movieDetails.push(data);
            } catch (error) {
                console.log(`Failed to fetch movie ID ${movieId}:`, error.message);
            }
        }

        res.json({ 
            success: true, 
            content: movieDetails,
            category: "South Indian Blockbusters",
            total: movieDetails.length
        });

    } catch (error) {
        console.log("Error in getSouthIndianBlockbusters: ", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// Get recent hits across all Indian languages
export async function getRecentIndianHits(req, res) {
    try {
        const recentHits = [
            951491, // Jawan (2023)
            677179, // Pathaan (2023) 
            1084736, // Leo (2023)
            980078, // Jailer (2023)
            840326, // Varisu (2023)
            840705, // Thunivu (2023)
            615469, // Ponniyin Selvan: I (2022)
            800497, // Ponniyin Selvan: II (2023)
            524481, // Vikram (2022)
            447277, // K.G.F: Chapter 2 (2022)
            509635, // RRR (2022)
            486589  // 96 (2018) - Still very popular
        ];

        const movieDetails = [];
        
        for (const movieId of recentHits) {
            try {
                const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&include_adult=true`);
                movieDetails.push(data);
            } catch (error) {
                console.log(`Failed to fetch movie ID ${movieId}:`, error.message);
            }
        }

        res.json({ 
            success: true, 
            content: movieDetails,
            category: "Recent Indian Hits",
            total: movieDetails.length
        });

    } catch (error) {
        console.log("Error in getRecentIndianHits: ", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
