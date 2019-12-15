class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} written by ${this.author}`;
    }
}


const book1 = new Book("Book one", "John", "2013");

console.log(book1);


