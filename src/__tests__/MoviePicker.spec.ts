import { MoviePickRepo } from "../MoviePicker/MoviePickRepo";
import { MoviePicker, MoviePickAlreadyExistError, EmptyMovieTitleError } from "../MoviePicker/MoviePicker";
import { MemoryMoviePickRepo } from "../MoviePicker/MemoryMoviePickRepo";

//------------------------------------------------------------------------------
describe("MoviePicker", () => {
  let moviePicker: MoviePicker;
  let moviePickRepo: MoviePickRepo;

  beforeEach(async () => {
    moviePickRepo = new MemoryMoviePickRepo();
    moviePicker = new MoviePicker(moviePickRepo);
  });
  //----------------------------------------------------------------------------
  it(
    "should add given movie title to picks " +
      "on MoviePicker.pick " +
      "when given movie title is not empty " +
      "and no title already picked for first letter of given movie title",
    async () => {
      const title = "Bohemian Rhapsody";
      await moviePicker.pick(title);

      const result = await moviePickRepo.getByFirstLetter("B");
      const allPicks = await moviePickRepo.getAll();

      expect(result).toBe(title);
      expect(allPicks).toHaveLength(1);
    }
  );
  //----------------------------------------------------------------------------
  it(
    "should throw MoviePickAlreadyExistError " +
      "on MoviePicker.pick " +
      "when given movie title is not empty " +
      "and some title already picked for first letter of given movie title",
    async () => {
      const title = "Bohemian Rhapsody";
      await moviePicker.pick(title);

      //picking the same movie again
      await expect(async () => {
        await moviePicker.pick(title);
      }).rejects.toThrow(MoviePickAlreadyExistError);

      //picking another movie with same first letter uppercased
      await expect(async () => {
        await moviePicker.pick("Barton Fink");
      }).rejects.toThrow(MoviePickAlreadyExistError);

      //picking another movie with same first letter lowercased
      await expect(async () => {
        await moviePicker.pick("batman");
      }).rejects.toThrow(MoviePickAlreadyExistError);
    }
  );
  //----------------------------------------------------------------------------
  it("should throw EmptyMovieTitleError " + "on MoviePicker.pick " + "when given movie title is empty", async () => {
    await expect(async () => {
      await moviePicker.pick("");
    }).rejects.toThrow(EmptyMovieTitleError);
  });
});
