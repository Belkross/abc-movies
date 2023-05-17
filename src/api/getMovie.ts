import Joi from "joi";

type Parameters = {
  origin: string;
  apiKey: string;
  id: string;
};

export async function requestGetMovie({ origin, apiKey, id }: Parameters): Promise<GetMovieResponse> {
  const url = `${origin}?apikey=${apiKey}&i=${id}`;

  try {
    const response = await fetch(url);
    const payload = await response.json();
    const { error, value } = schema.validate(payload);

    if (error) throw new Error(error.message);
    return value;
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) errorMessage = error.message;
    else errorMessage = String(error);

    console.error(errorMessage);
    throw new Error(errorMessage);
  }
}

const schema = Joi.object<GetMovieResponse>({
  Response: Joi.string()
    .regex(/^(True|False)$/)
    .required(),
  Error: Joi.string(),
  Title: Joi.string().required(),
  Year: Joi.string().regex(/^\d{4}$/),
  Actors: Joi.string(),
  Plot: Joi.string(),
  Poster: Joi.string(),
  imdbID: Joi.string().required(),
  Type: Joi.string()
    .regex(/^movie$/)
    .required(),
}).unknown();
