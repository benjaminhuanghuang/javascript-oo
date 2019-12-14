const s1 = 'Hello';
console.log(typeof s1);   //string

const s2 = new String('Hello');
console.log(typeof s2);   // object

// Object literals
const book1 = {
    title : 'Book one',
    author : 'John',

    getSummary: function(){
        return `${this.title} written by ${this.author}`;
    }
}

console.log(typeof book1);   // object
console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());
// returns all properties and methods in an array
console.log(Object.values(book1)); 
// returns all properties and methods names in an array
console.log(Object.keys(book1));