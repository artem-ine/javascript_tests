let floors = prompt("How many floors do you want?");
let num_floors = Number(floors);

console.log("Here's your pyramid:");

function pyramid_builder(num_floors) {
  for (let i = 0; i < num_floors; i++) {
    let spaces = " ".repeat(num_floors - i - 1);
    let blocks = "#".repeat(i + 1);
    console.log(spaces + blocks);
  }
}

pyramid_builder(num_floors);
