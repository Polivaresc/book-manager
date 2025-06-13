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

bookManagerExample.sortBooksByTitle()
console.log('Books Sorted by Title: ', bookManagerExample.listBooks());

bookManagerExample.sortBooksByPages(true)
console.log('Books Sorted by Pages Descending: ', bookManagerExample.listBooks());

bookManagerExample.sortBooksByPages(false)
console.log('Books Sorted by Pages Ascending: ', bookManagerExample.listBooks());

bookManagerExample.updateBook("Frankenstein", { author: "M. Shelley" });
bookManagerExample.updateBook("The three body problem", { title: "The 3 body problem", pages: 500 });

console.log('Updated list Of Books: ', bookManagerExample.listBooks());

console.log('Removing book: ', bookManagerExample.removeBook("The Lord of the Rings"));
