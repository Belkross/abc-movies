import { ALPHABET } from "../constants";
import { MoviePickRepo } from "./MoviePickRepo";

export class LocalStorageMoviePickRepo implements MoviePickRepo {
  async getByFirstLetter(firstLetter: string) {
    return new Promise<string | null>((resolve) => {
      resolve(window.localStorage.getItem(firstLetter.toUpperCase()));
    });
  }

  async getAll() {
    return new Promise<Array<string>>((resolve) => {
      const uppercasedAlphabet = ALPHABET.toUpperCase();
      const output: Array<string> = [];

      for (const letter of uppercasedAlphabet) {
        const storedTitle = window.localStorage.getItem(letter);
        output.push(storedTitle || "");
      }

      resolve(output);
    });
  }

  async put(title: string) {
    return new Promise<void>((resolve) => {
      const titleNotEmpty = title.length > 0;
      if (titleNotEmpty) window.localStorage.setItem(title.charAt(0).toUpperCase(), title);
      resolve();
    });
  }
}
