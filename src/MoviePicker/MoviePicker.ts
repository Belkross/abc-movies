import { MoviePickRepo } from "./MoviePickRepo";

export class MoviePicker {
  private storage: MoviePickRepo;

  constructor(moviePickRepo: MoviePickRepo) {
    this.storage = moviePickRepo;
  }

  async pick(title: string) {
    if (title.length <= 0) throw new EmptyMovieTitleError();

    const firstLetter = title[0];
    const storedMovie = await this.storage.getByFirstLetter(firstLetter);
    if (storedMovie !== null) throw new MoviePickAlreadyExistError();

    await this.storage.put(title);
  }
}

export class MoviePickAlreadyExistError extends Error {
  constructor(message = "Another movie is already picked for the same first letter.") {
    super(message);
  }
}

export class EmptyMovieTitleError extends Error {
  constructor(message = "The title provided is empty.") {
    super(message);
  }
}
