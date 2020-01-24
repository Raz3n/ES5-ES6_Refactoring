class Library {
  constructor(books = []) {
  this.books = books;
}


bookCount() {
  return this.books.length;
}

addBook(newBook){
  this.books.push(newBook);
}

addBooks(newBooks){
  newBooks.forEach(book => this.books.push(book));
};

printInventory({title, author}) {
  this.books.forEach((book) => {
    console.log(`${title} by ${author}`);
  });
};

}

export default Library;
