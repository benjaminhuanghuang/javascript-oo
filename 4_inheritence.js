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

// Magazine Contructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

const magazine1 = new Magazine("Mag one", "Doe", "2018", 'Jan');

// Use Magazine Contructor
Magazine.prototype.constuctor = Magazine;

console.log(magazine1);
console.log(magazine1.getSummary());