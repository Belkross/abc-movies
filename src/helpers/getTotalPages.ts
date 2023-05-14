import { RESULT_NUMBER_PER_PAGE } from "../constants";

export function getTotalPages(results: number): number {
  const isDivisor = results % RESULT_NUMBER_PER_PAGE === 0;
  const integerPart = Math.trunc(results / RESULT_NUMBER_PER_PAGE);

  return isDivisor ? integerPart : integerPart + 1;
}
