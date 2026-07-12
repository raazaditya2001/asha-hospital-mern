import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-5 py-32 text-center">
      <span className="text-7xl">🌿</span>
      <h1 className="font-display text-3xl font-semibold text-teal-950 mt-6 mb-3">Page not found</h1>
      <p className="text-ink/70 mb-8">The page you're looking for doesn't exist or has moved.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-marigold-500 hover:bg-marigold-600 text-teal-950 font-bold px-7 py-3.5 rounded-full transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}
