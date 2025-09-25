import express from "express";
import {
	getMovieDetails,
	getMoviesByCategory,
	getMovieTrailers,
	getSimilarMovies,
	getTrendingMovie,
	// Tamil Movies
	getTamilTrendingMovie,
	getPopularTamilMovies,
	getLatestTamilMovies,
	getTopRatedTamilMovies,
	searchTamilMovies,
	getTamilMoviesByYear,
	getTamilMoviesByActor,
	// New Curated Collections
	getTamilBlockbusters,
	getSouthIndianBlockbusters,
	getRecentIndianHits,
	// Hindi Movies
	getPopularHindiMovies,
	getTrendingHindiMovies,
	// Telugu Movies
	getTrendingTeluguMovie,
	getPopularTeluguMovies,
	searchTeluguMovies,
	// Malayalam Movies
	getTrendingMalayalamMovie,
	getPopularMalayalamMovies,
	searchMalayalamMovies,
	// Kannada Movies
	getTrendingKannadaMovie,
	getPopularKannadaMovies,
	searchKannadaMovies,
	// Marathi Movies
	getTrendingMarathiMovie,
	getPopularMarathiMovies,
	searchMarathiMovies,
	// Bengali Movies
	getTrendingBengaliMovie,
	getPopularBengaliMovies,
	searchBengaliMovies,
	// Punjabi Movies
	getTrendingPunjabiMovie,
	getPopularPunjabiMovies,
	searchPunjabiMovies,
	// Korean Movies
	getPopularKoreanMovies,
	getTrendingKoreanMovies,
	// Japanese Movies
	getPopularJapaneseMovies,
	getTrendingJapaneseMovies,
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);

// Special Curated Collections
router.get("/tamil/blockbusters", getTamilBlockbusters);
router.get("/south-indian/blockbusters", getSouthIndianBlockbusters);
router.get("/indian/recent-hits", getRecentIndianHits);

// Tamil movie routes
router.get("/tamil/trending", getTamilTrendingMovie);
router.get("/tamil/popular", getPopularTamilMovies);
router.get("/tamil/latest", getLatestTamilMovies);
router.get("/tamil/top-rated", getTopRatedTamilMovies);
router.get("/tamil/search/:query", searchTamilMovies);
router.get("/tamil/year/:year", getTamilMoviesByYear);
router.get("/tamil/actor/:actorId", getTamilMoviesByActor);

// Hindi movie routes
router.get("/hindi/popular", getPopularHindiMovies);
router.get("/hindi/trending", getTrendingHindiMovies);

// Korean movie routes
router.get("/korean/popular", getPopularKoreanMovies);
router.get("/korean/trending", getTrendingKoreanMovies);

// Japanese movie routes
router.get("/japanese/popular", getPopularJapaneseMovies);
router.get("/japanese/trending", getTrendingJapaneseMovies);

// Telugu movie routes
router.get("/telugu/trending", getTrendingTeluguMovie);
router.get("/telugu/popular", getPopularTeluguMovies);
router.get("/telugu/search/:query", searchTeluguMovies);

// Malayalam movie routes
router.get("/malayalam/trending", getTrendingMalayalamMovie);
router.get("/malayalam/popular", getPopularMalayalamMovies);
router.get("/malayalam/search/:query", searchMalayalamMovies);

// Kannada movie routes
router.get("/kannada/trending", getTrendingKannadaMovie);
router.get("/kannada/popular", getPopularKannadaMovies);
router.get("/kannada/search/:query", searchKannadaMovies);

// Marathi movie routes
router.get("/marathi/trending", getTrendingMarathiMovie);
router.get("/marathi/popular", getPopularMarathiMovies);
router.get("/marathi/search/:query", searchMarathiMovies);

// Bengali movie routes
router.get("/bengali/trending", getTrendingBengaliMovie);
router.get("/bengali/popular", getPopularBengaliMovies);
router.get("/bengali/search/:query", searchBengaliMovies);

// Punjabi movie routes
router.get("/punjabi/trending", getTrendingPunjabiMovie);
router.get("/punjabi/popular", getPopularPunjabiMovies);
router.get("/punjabi/search/:query", searchPunjabiMovies);

// General movie routes
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;
