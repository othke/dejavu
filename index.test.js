const text = require("./text");
const dejavu = require("./index");

describe("counter", () => {
  it("should return  an empty counter if input is not a text", () => {
    const emptyCounter = new Map();
    expect(dejavu(null)).toEqual(emptyCounter);
    expect(dejavu(undefined)).toEqual(emptyCounter);
    expect(dejavu(42)).toEqual(emptyCounter);
    expect(dejavu(true)).toEqual(emptyCounter);
    expect(dejavu()).toEqual(emptyCounter);
  });

  it("should return a filled counter", () => {
    const text = `Bonjour, je suis monsieur: 'Bonjour'. 
      Je suis aussi Développeur (JavaScript ou javascript) !!!!
      A demain à la tombée du jour.`;
    const expectedDejavu = new Map([
      ["bonjour", 2],
      ["je", 2],
      ["suis", 2],
      ["monsieur", 1],
      ["aussi", 1],
      ["développeur", 1],
      ["javascript", 2],
      ["ou", 1],
      ["demain", 1],
      ["la", 1],
      ["tombée", 1],
      ["du", 1],
      ["jour", 1],
    ]);
    expect(dejavu(text)).toEqual(expectedDejavu);
  });
});
