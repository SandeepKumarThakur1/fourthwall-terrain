import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-6">
            <div className="max-w-xl text-center">
                <h1 className="text-8xl font-bold text-gray-900">404</h1>

                <h2 className="mt-6 text-3xl font-semibold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <Link
                        href="/"
                        className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </main>
    );
}