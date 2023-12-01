import { handler } from ".";

describe("Day 01 (1) - Trebuchet?!", () => {
  it("should return correct sum of combined numbers", () => {
    const input = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";

    const result = handler(input);

    expect(result).toBe(142);
  });
});
