const answer = require("../code");
const repeatedString = answer.repeatedString;

describe("repeatedString", () => {
  it("should return 7", () => {
    expect(repeatedString("aba", 10)).toEqual(7);
  });

  it("should return 1000000000000", () => {
    expect(repeatedString("a", 1000000000000)).toEqual(1000000000000);
  });
});
