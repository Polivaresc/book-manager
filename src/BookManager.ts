export class BookManager {
    constructor(private books: Book[]) {}

    addBook(book: Book) {
        this.books.push(book);
    }

    listBooks(): Book[] {
        return this.books;
    }

    findBookByTitle(title: string): Book | undefined {
        return this.books.find((book) => book.title === title);
    }

    totalPages(): number {
        return this.books.reduce((total, book) => total += book.pages, 0);
    }
}