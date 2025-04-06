import { API_URL } from '../app/(home)/page';

async function getMovieDetails(id: string) {
	console.log(`Fetching movie details... ${Date.now()}`);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(API_URL + `/${id}`);
	if (!response.ok) {
		throw new Error('Failed to fetch movie details');
	}
	return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovieDetails(id);
    if (!movie) {
        throw new Error('Movie not found');
    }
    return (
        <div>
            <h2>Movie Info</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Genres: {movie.genres.map((genre: { name: string }) => genre.name).join(', ')}</p>
        </div>
    )
}