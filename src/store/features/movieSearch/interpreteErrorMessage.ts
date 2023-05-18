export function interpreteErrorMessage(message: unknown): string {
  switch (message) {
    case "Invalid API key!": {
      return "The API key you provided is invalid.";
    }

    case "Too many results.": {
      return "Too many results. Please provide a more precise input.";
    }

    case "Movie not found!": {
      return "No movie found for the provided input.";
    }

    default: {
      return "The title you provided is not valid.";
    }
  }
}
