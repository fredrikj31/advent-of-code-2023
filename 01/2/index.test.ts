import { handler } from ".";

describe("Day 01 (2) - Trebuchet?!", () => {
  it("should return correct sum of combined numbers", () => {
    const input =
      "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen";

    const result = handler(input);

    expect(result).toBe(281);
  });
});
