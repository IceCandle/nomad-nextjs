import { API_URL } from "../app/(home)/page";

async function getMovieVideos(id: string): Promise<{ id: number; title: string; key: string }[]> {
	console.log('Fetching movie videos... ', Date.now());
	await new Promise((resolve) => setTimeout(resolve, 1000));
	throw new Error('Simulated error');
	/*
	const response = await fetch(API_URL + `/${id}/videos`);
	if (!response.ok) {
		throw new Error('Failed to fetch movie video');
	}
	return response.json();
	*/
}

const MovieVideos = async ({ id }: { id: string }) => {
	const videos = await getMovieVideos(id);
	if (!videos) {
		throw new Error('Movie videos not found');
	}
	return (
		<div>
			<h2>Movie Videos</h2>
			<ul>
				{videos.map((video: { id: number; title: string, key: string }) => (
					<li key={video.id}>
						<a href={`https://www.youtube.com/watch?v=${video.key}`}>
							{video.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
export default MovieVideos;