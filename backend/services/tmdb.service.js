import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRjOWJhNTUyN2Y1OTcxZjc0NjdiMzlhNTRmMmE2NyIsIm5iZiI6MTc1Mzg4MjMzMi4wOTMsInN1YiI6IjY4OGExZWRjMmMxNzI1YWI4OTY5NDc3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3A72kdHo7S2nAEfBcCvoisTuuM8FAI-1XPXtn5newdY'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&include_adult=true', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

export const fetchFromTMDB = async (url) => {
	const options = {	
		headers: {
			accept: "application/json",
			Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
		},
	};

	// Allow all content including adult content
	const separator = url.includes('?') ? '&' : '?';
	if (!url.includes('include_adult')) {
		url += `${separator}include_adult=true`;
	}

	const response = await axios.get(url, options);

	if (response.status !== 200) {
		throw new Error("Failed to fetch data from TMDB" + response.statusText);
	}

	// Return all data without any filtering
	return response.data;
};
