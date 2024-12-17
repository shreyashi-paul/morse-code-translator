import { morseCode } from "./morseCode.js";

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.substring(1);
}

//This takes an object and a value as parameters and returns the key associated with that value in the object.

const findKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

export const translateToMorse = (str) => {
  return str
    .split(" ")
    .map((word) =>
      word
        .toUpperCase()
        .split("")
        .map((letter) => {
          return morseCode[letter]
            ? morseCode[letter]
            : "Invalid characters!";
        })
        .join(" ")
    )
    .join("/");
};

export const translateToEnglish = (morseCodeInput) => {
  return capitalizeFirstLetter(
    // This should check if the input is morse code
    morseCodeInput.includes("/") || morseCodeInput.includes(" ")
      ? morseCodeInput
          .split("/")
          .map((word) =>
            word
              .split(" ")
              .map((letter) => findKeyByValue(morseCode, letter))
              .join("")
              .toLowerCase()
          )
          .join(" ")
      : "Invalid characters"
  );
};
