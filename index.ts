import { BookManager } from "./src/BookManager";

const bookManagerExample: BookManager = new BookManager([]);

bookManagerExample.addBook({
    title: "The three body problem",
    author: "Cixin Liu",
    pages: 448
})

bookManagerExample.addBook({
    title: "The dark forest",
    author: "Cixin Liu",
    pages: 528
})

bookManagerExample.addBook({
    title: "Death's end",
    author: "Cixin Liu",
    pages: 608
})

bookManagerExample.addBook({
    title: "Frankenstein",
    author: "Mary Shelley",
    pages: 304
})

console.log('List Of Books: ', bookManagerExample.listBooks());
console.log('Total Pages: ', bookManagerExample.totalPages());
console.log('Removing book: ', bookManagerExample.removeBook("The Lord of the Rings"));

bookManagerExample.sortBooksByTitle()
bookManagerExample.saveBooksToFile('booksSortedByTitle.json');

bookManagerExample.sortBooksByPages(true)
bookManagerExample.saveBooksToFile('booksSortedByPagesDesc.json');

bookManagerExample.sortBooksByPages(false)
bookManagerExample.saveBooksToFile('booksSortedByPagesAsc.json');

bookManagerExample.updateBook("Frankenstein", { author: "M. Shelley" });
bookManagerExample.updateBook("The three body problem", { title: "The 3 body problem", pages: 500 });

bookManagerExample.loadBooksFromFile('./data/booksToLoad.json');

bookManagerExample.saveBooksToFile('booksUpdated.json');

