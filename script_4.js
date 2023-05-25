const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("entrepreneurs born in the 70s:");
for (let entrepreneur of entrepreneurs) {
  if (entrepreneur.year >= 1970 && entrepreneur.year < 1980) {
    console.log(entrepreneur.first + ' ' + entrepreneur.last);
  }
}

console.log("\n");


console.log("complete name of all entrepreneurs:");
for (let entrepreneur of entrepreneurs) {
  console.log(entrepreneur.first + ' ' + entrepreneur.last);
}

console.log("\n");

console.log("how old is every entrepreneur today?");
const currentYear = new Date().getFullYear();
for (let entrepreneur of entrepreneurs) {
  let age = currentYear - entrepreneur.year;
  console.log(entrepreneur.first + ' ' + entrepreneur.last + ' is ' + age + ' years old.');
}

console.log("\n");


console.log("entrepreneurs ordered alphabetically:");
const sortedEntrepreneurs = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
for (let entrepreneur of sortedEntrepreneurs) {
  console.log(entrepreneur.first + ' ' + entrepreneur.last);
}

console.log("\n");
