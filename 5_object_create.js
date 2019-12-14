// Object of protos
const bookProtos = {
    getSummary : function(){
        return `${this.title} written by ${this.author}`;
    }
};




const book1 = Object.create(bookProtos, {
    title: {value: "Book One"},
    author: {value: 'Oop'}
});

console.log(book1);