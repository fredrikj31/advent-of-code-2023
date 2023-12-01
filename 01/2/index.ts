enum Numbers {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
  seven = 7,
  eight = 8,
  nine = 9,
}

export const handler = (input: string): number => {
  const results: number[] = [];

  const lines = input.split("\n");
  // match numbers in string
  const numbersRegex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

  for (const line of lines) {
    const matches = [...line.matchAll(numbersRegex)];
    const firstNumberWord = matches[0];
    const lastNumberWord = matches[matches.length - 1];

    let firstNumber: number = 0;
    let lastNumber: number = 0;

    // if number is not a number, then match it in enum
    if (Number.isNaN(parseInt(firstNumberWord[1]))) {
      firstNumber = Numbers[firstNumberWord[1] as keyof typeof Numbers];
    } else {
      firstNumber = parseInt(firstNumberWord[1]);
    }
    if (Number.isNaN(parseInt(lastNumberWord[1]))) {
      lastNumber = Numbers[lastNumberWord[1] as keyof typeof Numbers];
    } else {
      lastNumber = parseInt(lastNumberWord[1]);
    }

    results.push(parseInt(`${firstNumber}${lastNumber}`));
  }

  // calculate sum of numbers in array
  const sum = results.reduce((prev, curr) => prev + curr, 0);
  return sum;
};
