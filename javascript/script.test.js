// import { oEnglish, convertToMorse } from "./script";

// // checking if it returns correct ouput
// describe("Testing app functions", () => {
//   it("should give the correct translation from Morse code to English", () => {
//     expect(convertToEnglish(".... . .-.. .-.. ---")).toBe("Hello");
//   });

//   it("should give the correct translation from Enlish to Morse code", () => {
//     expect(convertToMorse("hello there")).toBe(
//       ".... . .-.. .-.. ---/- .... . .-. ."
//     );
//   });

//   // checking if it case-sensitive
//   it("should convert to Morse Code regardless of case", () => {
//     expect(convertToMorse("heLLo there")).toBe(
//       ".... . .-.. .-.. ---/- .... . .-. ."
//     );
//   });

//   it("first letter of first word converted from Morse code should be capitalised", () => {
//     expect(convertToEnglish(".... . .-.. .-.. ---")).toBe("Hello");
//   });
// });

import { translateToMorse, translateToEnglish } from "./script.js";

// tests written for script.js functions

describe("Morse Code Translator Functions", () => {


  test("translateToMorse should translate English to Morse Code", () => {
    const input = "GREETINGS";
    const expectedOutput = "--. .-. . . - .. -. --. ...";
    expect(translateToMorse(input)).toBe(expectedOutput);
  });

  test("translateToMorse should handle spaces between words", () => {
    const input = "MY NAME IS AMY";
    const expectedOutput = "-- -.--/-. .- -- ./.. .../.- -- -.--";
    expect(translateToMorse(input)).toBe(expectedOutput);
  });

  test("translateToEnglish should translate Morse Code to English", () => {
    const input = ".-- . .-.. -.-. --- -- .";
    const expectedOutput = "Welcome";
    expect(translateToEnglish(input)).toBe(expectedOutput);
  });

  test("translateToEnglish should handle spaces between Morse words", () => {
    const input = ".-- . .-.. -.-. --- -- ./- ---/-- -.--/... .--. .- -.-. .";
    const expectedOutput = "Welcome to my space";
    expect(translateToEnglish(input)).toBe(expectedOutput);
  });

  test("translateToMorse should return Invalid characters for unsupported input", () => {
    const input = "How are you?";
    const expectedOutput = ".... --- .--/.- .-. ./-.-- --- ..- Invalid characters!";
    expect(translateToMorse(input)).toBe(expectedOutput);
  });

  test("translateToEnglish should return Invalid characters for unsupported Morse input", () => {
    const input = ".... . .-.. .-.. ---/.. -. ...- .- .-.. .. -../-.-. .... .- .-. .- -.-. - . .-. ... Invalid characters!";
    const expectedOutput = "Hello invalid characters!";
    expect(translateToEnglish(input)).toBe(expectedOutput);
  });
});
