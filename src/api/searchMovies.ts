import { OMDB_URL } from "../constants";

export async function searchMovies(title: string, page = 1): Promise<AsyncOutcome<GetMoviePayload>> {
  try {
    const url = `${OMDB_URL}?type=movie&apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${title}&page=${page}`;
    const response = await fetch(url);

    if (response.ok) {
      const payload = (await response.json()) as GetMoviePayload;
      return { succeeded: true, payload };
    } else {
      throw new Error("searchMovies request went wrong");
    }
  } catch (error) {
    console.error(error);
    return { succeeded: false };
  }
}
