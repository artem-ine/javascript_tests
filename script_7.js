const userInput = prompt("> ");

function processInput(input) {
  if (userInput.includes("Fortnite")) {
    return "Let's goooo";
  } else if (userInput === "") { 
    return "T'es en PLS?";
  } else if (userInput === userInput.toUpperCase()) {
    return "Calmos";
  } else if (userInput.endsWith("?")) {
    return "Ouais ouais...";
  } else {
    return "balek";
  }
}

const botResponse = processInput(userInput);
console.log(botResponse);
