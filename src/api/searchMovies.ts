import { OMDB_URL } from "../constants";

export async function searchMovies({ title, page }: { title: string; page: number }): Promise<SearchMoviesResponse> {
  const url = `${OMDB_URL}?type=movie&apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${title}&page=${page}`;
  const response = await fetch(url);
  const payload = await response.json();

  return payload as SearchMoviesResponse;
}
