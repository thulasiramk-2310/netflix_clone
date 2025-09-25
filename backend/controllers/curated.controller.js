import { fetchFromTMDB } from "../services/tmdb.service.js";

// Curated lists of popular movie IDs for each language
const CURATED_MOVIES = {
    tamil: {
        blockbusters: [
            // Recent hits and classics
            { tmdbId: 524481, title: "Vikram", year: 2022 },
            { tmdbId: 615469, title: "Ponniyin Selvan: I", year: 2022 },
            { tmdbId: 800497, title: "Ponniyin Selvan: II", year: 2023 },
            { tmdbId: 509635, title: "RRR", year: 2022 },
            { tmdbId: 447277, title: "K.G.F: Chapter 2", year: 2022 },
            { tmdbId: 338967, title: "Baahubali 2: The Conclusion", year: 2017 },
            { tmdbId: 259316, title: "Baahubali: The Beginning", year: 2015 },
            { tmdbId: 486589, title: "96", year: 2018 },
            { tmdbId: 385128, title: "F2: Fun and Frustration", year: 2019 },
            { tmdbId: 574982, title: "Kaithi", year: 2019 },
            { tmdbId: 447264, title: "Master", year: 2021 }
        ],
        recent: [
            { tmdbId: 1084736, title: "Leo", year: 2023 },
            { tmdbId: 951491, title: "Jawan", year: 2023 },
            { tmdbId: 677179, title: "Pathaan", year: 2023 },
            { tmdbId: 840326, title: "Varisu", year: 2023 },
            { tmdbId: 840705, title: "Thunivu", year: 2023 },
            { tmdbId: 980078, title: "Jailer", year: 2023 }
        ],
        classics: [
            { tmdbId: 19995, title: "Avatar", year: 2009 }, // Popular in Tamil dubbing
            { tmdbId: 299536, title: "Avengers: Infinity War", year: 2018 },
            { tmdbId: 299534, title: "Avengers: Endgame", year: 2019 },
            { tmdbId: 557, title: "Spider-Man", year: 2002 }
        ]
    },
    malayalam: {
        blockbusters: [
            { tmdbId: 447277, title: "K.G.F: Chapter 2", year: 2022 },
            { tmdbId: 509635, title: "RRR", year: 2022 },
            { tmdbId: 338967, title: "Baahubali 2: The Conclusion", year: 2017 },
            { tmdbId: 615457, title: "Nobody", year: 2021 },
            { tmdbId: 820525, title: "Minnal Murali", year: 2021 }
        ],
        recent: [
            { tmdbId: 951491, title: "Jawan", year: 2023 },
            { tmdbId: 677179, title: "Pathaan", year: 2023 },
            { tmdbId: 1084736, title: "Leo", year: 2023 }
        ]
    },
    telugu: {
        blockbusters: [
            { tmdbId: 509635, title: "RRR", year: 2022 },
            { tmdbId: 338967, title: "Baahubali 2: The Conclusion", year: 2017 },
            { tmdbId: 259316, title: "Baahubali: The Beginning", year: 2015 },
            { tmdbId: 385128, title: "F2: Fun and Frustration", year: 2019 },
            { tmdbId: 447277, title: "K.G.F: Chapter 2", year: 2022 }
        ],
        recent: [
            { tmdbId: 951491, title: "Jawan", year: 2023 },
            { tmdbId: 677179, title: "Pathaan", year: 2023 },
            { tmdbId: 1084736, title: "Leo", year: 2023 }
        ]
    },
    kannada: {
        blockbusters: [
            { tmdbId: 447277, title: "K.G.F: Chapter 2", year: 2022 },
            { tmdbId: 447264, title: "K.G.F: Chapter 1", year: 2018 },
            { tmdbId: 509635, title: "RRR", year: 2022 },
            { tmdbId: 338967, title: "Baahubali 2: The Conclusion", year: 2017 }
        ],
        recent: [
            { tmdbId: 951491, title: "Jawan", year: 2023 },
            { tmdbId: 677179, title: "Pathaan", year: 2023 }
        ]
    },
    hindi: {
        blockbusters: [
            { tmdbId: 951491, title: "Jawan", year: 2023 },
            { tmdbId: 677179, title: "Pathaan", year: 2023 },
            { tmdbId: 524481, title: "Vikram", year: 2022 },
            { tmdbId: 509635, title: "RRR", year: 2022 },
            { tmdbId: 447277, title: "K.G.F: Chapter 2", year: 2022 },
            { tmdbId: 338967, title: "Baahubali 2: The Conclusion", year: 2017 },
            { tmdbId: 299534, title: "Avengers: Endgame", year: 2019 },
            { tmdbId: 299536, title: "Avengers: Infinity War", year: 2018 }
        ],
        recent: [
            { tmdbId: 1084736, title: "Leo", year: 2023 },
            { tmdbId: 840326, title: "Varisu", year: 2023 },
            { tmdbId: 840705, title: "Thunivu", year: 2023 },
            { tmdbId: 980078, title: "Jailer", year: 2023 }
        ]
    }
};

// Function to get curated movie collection by language and category
export async function getCuratedMovies(req, res) {
    const { language, category } = req.params;
    
    try {
        if (!CURATED_MOVIES[language] || !CURATED_MOVIES[language][category]) {
            return res.status(404).json({ 
                success: false, 
                message: "Language or category not found" 
            });
        }

        const movieList = CURATED_MOVIES[language][category];
        const movieDetails = [];

        // Fetch details for each curated movie
        for (const movie of movieList.slice(0, 10)) { // Limit to 10 movies per request
            try {
                const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?language=en-US&include_adult=false`);
                movieDetails.push(data);
            } catch (error) {
                console.log(`Failed to fetch movie ${movie.title}:`, error.message);
                // Continue with other movies even if one fails
            }
        }

        res.json({ 
            success: true, 
            content: movieDetails,
            language: language,
            category: category,
            total: movieDetails.length
        });

    } catch (error) {
        console.log("Error in getCuratedMovies: ", error.message);
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
                const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&include_adult=false`);
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
                const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&include_adult=false`);
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
                const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&include_adult=false`);
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