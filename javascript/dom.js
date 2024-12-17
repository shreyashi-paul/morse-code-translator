import { translateToMorse, translateToEnglish } from "./script.js";

document.addEventListener("DOMContentLoaded", () => {
  // Accessing DOM Elements
  const inputWord = document.getElementById("inputWord");
  const inputMorse = document.getElementById("inputMorse");
  const outputMorse = document.getElementById("output-morse");
  const outputText = document.getElementById("output-text");

  const submitButtons = document.querySelectorAll(".btn");

  // Adding Event listener for the translate button to work on click

  submitButtons[0].addEventListener("click", (event) => {
    event.preventDefault();
    const input = inputWord.value.trim();
    if (input) {
      outputMorse.textContent = translateToMorse(input);
    } else {
      outputMorse.textContent = "Enter text in Type here section";
    }
  });

  submitButtons[1].addEventListener("click", (event) => {
    event.preventDefault();
    const input = inputMorse.value.trim();
    if (input) {
      outputText.textContent = translateToEnglish(input);
    } else {
      outputText.textContent = "Enter Morse Code in Type here section";
    }
  });
});
