import { OMDB_URL } from "../constants";

export async function getMovie(id: string): Promise<GetMovieResponse> {
  const url = `${OMDB_URL}?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}`;
  const response = await fetch(url);
  const payload = await response.json();
  return payload as GetMovieResponse;
}
