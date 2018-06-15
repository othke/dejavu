const text = require("./text");
const occurence = require("./index");

describe("counter", () => {
  it("should return  an empty counter if input is not a text", () => {
    const emptyCounter = new Map();
    expect(occurence(null)).toEqual(emptyCounter);
    expect(occurence(undefined)).toEqual(emptyCounter);
    expect(occurence(42)).toEqual(emptyCounter);
    expect(occurence(true)).toEqual(emptyCounter);
    expect(occurence()).toEqual(emptyCounter);
  });

  it("should return a filled counter", () => {
    const text =
      "Bonjour, je suis monsieur: 'Bonjour'. Je suis aussi Développeur (JavaScript ou javascript) !!!!";
    const expectedOccurence = new Map([
      ["bonjour", 2],
      ["je", 2],
      ["suis", 2],
      ["monsieur", 1],
      ["aussi", 1],
      ["développeur", 1],
      ["javascript", 2],
      ["ou", 1],
    ]);
    expect(occurence(text)).toEqual(expectedOccurence);
  });
});
