export const SMALL_IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const ORIGINAL_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export const MOVIE_CATEGORIES = ["now_playing", "top_rated", "popular", "upcoming"];
export const TV_CATEGORIES = ["airing_today", "on_the_air", "popular", "top_rated"];

// Tamil content categories
export const TAMIL_MOVIE_CATEGORIES = ["trending", "popular", "latest", "top-rated"];
export const TAMIL_TV_CATEGORIES = ["trending", "popular"];

// Multi-language content for homepage - Indian Focus
export const MIXED_CONTENT_CATEGORIES = [
	{ 
		key: "hindi_trending", 
		label: "Trending Hindi Movies", 
		type: "hindi_movie", 
		category: "trending",
		language: "hi",
		flag: "🇮🇳"
	},
	{ 
		key: "tamil_popular", 
		label: "Popular Tamil Movies", 
		type: "tamil_movie", 
		category: "popular",
		language: "ta",
		flag: "��"
	},
	{ 
		key: "hindi_popular", 
		label: "Bollywood Blockbusters", 
		type: "hindi_movie", 
		category: "popular",
		language: "hi",
		flag: "🇮🇳"
	},
	{ 
		key: "tamil_trending", 
		label: "Kollywood Hits", 
		type: "tamil_movie", 
		category: "trending",
		language: "ta",
		flag: "🇮🇳"
	},
	{ 
		key: "telugu_popular", 
		label: "Tollywood Favorites", 
		type: "telugu_movie", 
		category: "popular",
		language: "te",
		flag: "��"
	},
	{ 
		key: "malayalam_popular", 
		label: "Malayalam Cinema", 
		type: "malayalam_movie", 
		category: "popular",
		language: "ml",
		flag: "🇮🇳"
	},
	{ 
		key: "kannada_popular", 
		label: "Sandalwood Movies", 
		type: "kannada_movie", 
		category: "popular",
		language: "kn",
		flag: "🇮🇳"
	},
	{ 
		key: "marathi_popular", 
		label: "Marathi Films", 
		type: "marathi_movie", 
		category: "popular",
		language: "mr",
		flag: "🇮🇳"
	},
	{ 
		key: "bengali_popular", 
		label: "Bengali Cinema", 
		type: "bengali_movie", 
		category: "popular",
		language: "bn",
		flag: "��"
	},
	{ 
		key: "punjabi_popular", 
		label: "Punjabi Movies", 
		type: "punjabi_movie", 
		category: "popular",
		language: "pa",
		flag: "��"
	},
	{ 
		key: "english_popular", 
		label: "Hollywood Movies", 
		type: "movie", 
		category: "popular",
		language: "en",
		flag: "🇺🇸"
	},
	{ 
		key: "korean_popular", 
		label: "K-Movies", 
		type: "korean_movie", 
		category: "popular",
		language: "ko",
		flag: "��"
	}
];

// Popular Indian movies across languages
export const POPULAR_INDIAN_MOVIES = {
	HINDI: [
		"Pathaan", "Jawan", "Tiger 3", "Brahmastra", "KGF Chapter 2", 
		"RRR", "Dangal", "Bajrangi Bhaijaan", "PK", "3 Idiots",
		"Zindagi Na Milegi Dobara", "Queen", "Pink", "Article 15", "Uri"
	],
	TAMIL: [
		"Meiyazhagan", "Ponniyin Selvan I", "Ponniyin Selvan II", 
		"Vikram", "Beast", "Master", "Bigil", "Sarkar", "Mersal", 
		"Theri", "Kabali", "Kaala", "2.0", "Enthiran", "Soorarai Pottru",
		"Asuran", "Super Deluxe", "96", "Karnan", "Jai Bhim"
	],
	TELUGU: [
		"RRR", "Baahubali", "Baahubali 2", "Pushpa", "KGF",
		"Arjun Reddy", "Geetha Govindam", "Ala Vaikunthapurramuloo",
		"Sarileru Neekevvaru", "F2", "Jersey", "Rangasthalam"
	],
	MALAYALAM: [
		"Hridayam", "Minnal Murali", "The Great Indian Kitchen",
		"Kumbakonam Gopals", "Drishyam", "Premam", "Bangalore Days"
	],
	KANNADA: [
		"KGF", "KGF Chapter 2", "Kantara", "777 Charlie", "Rakshit Shetty"
	],
	MARATHI: [
		"Sairat", "Natsamrat", "Court", "Fandry", "Harishchandrachi Factory"
	],
	BENGALI: [
		"Piku", "October", "Kahaani", "Pink", "Te3n", "Aparajito"
	],
	PUNJABI: [
		"Chal Mera Putt", "Qismat", "Shadaa", "Carry On Jatta"
	]
};

// Popular Tamil actors' TMDB IDs (you can find these from TMDB API)
export const TAMIL_ACTORS = {
	RAJINIKANTH: 73421,
	KAMAL_HAASAN: 73817,
	VIJAY: 42017,
	AJITH: 42016,
	SURIYA: 42018,
	DHANUSH: 73968,
	VIKRAM: 73422,
	SIVAKARTHIKEYAN: 1108726
};

// Language mapping for display
export const LANGUAGE_NAMES = {
	en: "English",
	ta: "Tamil",
	hi: "Hindi", 
	ko: "Korean",
	ja: "Japanese",
	es: "Spanish",
	fr: "French",
	de: "German",
	it: "Italian",
	pt: "Portuguese",
	ru: "Russian",
	zh: "Chinese"
};
