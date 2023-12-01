export const handler = (input: string): number => {
  const results: number[] = [];

  const lines = input.split("\n");
  // find digits in string
  const numbersRegex = /\d/g;

  for (const line of lines) {
    const matches = [...line.matchAll(numbersRegex)];

    // find first and last number of the matches
    const firstNumber = matches[0];
    const lastNumber = matches[matches.length - 1];

    // convert to string numbers into number
    results.push(parseInt(`${firstNumber[0]}${lastNumber[0]}`));
  }

  // sum all numbers
  const sum = results.reduce((prev, curr) => prev + curr, 0);
  return sum;
};
