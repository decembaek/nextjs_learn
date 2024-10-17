import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1>Hello</h1>
      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}

// https://nomad-movies.nomadcoders.workers.dev/
