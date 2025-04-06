import { Metadata } from 'next'

export const metadata : Metadata = {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
    return (
        <main>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </main>
    )
}