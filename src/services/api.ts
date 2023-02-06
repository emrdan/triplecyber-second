const topRatedUrl: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=bf091621962bdf5c30339e874a2a0c1a&language=en-US&page=1';

export const getTopRatedMovies = () => {
	return fetch(topRatedUrl).then((res) =>
		res.json()
	);
};

export const getMovieById = (id?: string) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bf091621962bdf5c30339e874a2a0c1a&language=en-US`).then((res) =>
		res.json()
	);
}

