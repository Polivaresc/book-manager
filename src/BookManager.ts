import { writeFileSync } from 'fs';

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

    findBookByAuthor(author: string): Book[] {
        return this.books.filter((book) => book.author === author);
    }

    totalPages(): number {
        return this.books.reduce((total, book) => total += book.pages, 0);
    }

    removeBook(title: string): boolean {
        const index: number = this.books.findIndex((book) => book.title === title);
        if (index === -1) return false;
        this.books.splice(index, 1);
        return true;
    }

    sortBooksByTitle(): void {
        this.books.sort((a, b) => {
            const a_title: string = a.title.toUpperCase();
            const b_title: string = b.title.toUpperCase();
            if (a_title < b_title) return -1;
            if (a_title > b_title) return 1;
            return 0;
        })
    }

    sortBooksByPages(descending: boolean): void {
        this.books.sort((a, b) => {
            if (descending) {
                if (a.pages < b.pages) return 1;
                if (a.pages > b.pages) return -1;
            } else {
                if (a.pages < b.pages) return -1;
                if (a.pages > b.pages) return 1;
            }
            return 0;
        })
    }

    updateBook(title: string, updatedBook: Partial<Book>): boolean {
        let book: Book | undefined = this.findBookByTitle(title);
        if (book === undefined) return false;
        if ('title' in updatedBook && updatedBook.title !== undefined) {
            book.title = updatedBook.title;
        }
        if ('author' in updatedBook && updatedBook.author !== undefined) {
            book.author = updatedBook.author;
        }
        if ('pages' in updatedBook && updatedBook.pages !== undefined) {
            book.pages = updatedBook.pages;
        }
        return true;
    }

    saveBooksToFile(path: string): void {
        const data = JSON.stringify(this.books, null, 2);
        writeFileSync(path, data, 'utf-8');
    }
}