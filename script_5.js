const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("has every book been borrowed at least twice?");
for (let book of books) {
  if (book.rented < 2) {
    console.log(book.title + "has been borrowed less than twice.");
  }
  else {
    console.log("yup.")
  }
}
console.log("\n");


console.log("most borrowed book:");
let mostBorrowedBook = null;
for (let book of books) {
  if (mostBorrowedBook === null || book.rented > mostBorrowedBook.rented) {
    mostBorrowedBook = book;
  }
}
console.log("The most borrowed book is:", mostBorrowedBook.title);
console.log("\n");


console.log("least borrowed book:");
let leastBorrowedBook = null;
for (let book of books) {
  if (leastBorrowedBook === null || book.rented < leastBorrowedBook.rented) {
    leastBorrowedBook = book;
  }
}
console.log("The least borrowed book is:", leastBorrowedBook.title);
console.log("\n");


console.log("book with ID 873495");
for (let book of books) {
  if (book.id == 873495) {
    console.log(book.title + "is the book with ID 873495.");
  }
}
console.log("\n");


console.log("deleting book with ID 133712");
let bookIdToDelete = 133712;
let indexToDelete = books.findIndex(book => book.id === bookIdToDelete);

if (indexToDelete !== -1) {
  books.splice(indexToDelete, 1);
}
console.log("\n");


console.log("alphabetical order of books");
const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
for (let book of sortedBooks) {
  console.log(book.title);
}
console.log("\n");