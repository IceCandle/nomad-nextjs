import { Metadata } from 'next'
import Link from 'next/link'

export const metadata : Metadata = {
    title: 'Home',
    description: 'Welcome to our homepage!',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return fetch(API_URL)
        .then((response) => response.json())
}

export default async function Home() {
    const movies = await getMovies() || [];
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to our website!</p>
            <h2>Movies</h2>
            <ul>
                {movies.map((movie: { id: number; title: string }) => (
                    <li key={movie.id}>
                        <Link href={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}