import { BookManager } from "./src/BookManager";

const BookManagerExample: BookManager = new BookManager([]);

BookManagerExample.addBook({
    title: "The three body problem",
    author: "Cixin Liu",
    pages: 448
})

BookManagerExample.addBook({
    title: "The dark forest",
    author: "Cixin Liu",
    pages: 528
})

BookManagerExample.addBook({
    title: "Death's end",
    author: "Cixin Liu",
    pages: 608
})

BookManagerExample.addBook({
    title: "Frankenstein",
    author: "Mary Shelley",
    pages: 304
})

console.log(BookManagerExample.listBooks());

console.log(BookManagerExample.totalPages());