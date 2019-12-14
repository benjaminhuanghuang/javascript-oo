// constructor is a function
function Book(title, author, year) {
    // console.log('Book initialized...');

    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary =  function(){
        return `${this.title} written by ${this.author}`;
    }
}

const book1 = new Book("Book One", "John", 1977);
// Every Book object has getSummary method. 
console.log(book1);
console.log(book1.getSummary());
const book2 = new Book("Book Two", "Alen", 2009);
