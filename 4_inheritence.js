// constructor is a function
function Book(title, author, year) {
    // console.log('Book initialized...');

    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary =  function(){
    return `${this.title} written by ${this.author}`;
}
const book1 = new Book("Book One", "John", 1977);
console.log(book1);

// Magazine Contructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}
const mag1 = new Magazine("Mag one", "Doe", "2018", 'Jan'); // For now, the __proto__ on mag1 is Object
// mag1.getSummary is not a function 
console.log("mag1", mag1);

// Inherit Prototype
// https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
Magazine.prototype = Object.create(Book.prototype);

const magazine1 = new Magazine("Mag one", "Doe", "2018", 'Jan');
console.log("magazine1 got Book.prototype", magazine1);

// Use Magazine Contructor
Magazine.prototype.constuctor = Magazine;

console.log(magazine1);
console.log(magazine1.__proto__);
console.log(magazine1.getSummary());