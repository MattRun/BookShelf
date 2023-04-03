class Library {
  constructor() {
    this.books = [];
  }
  seed(booksData) {
    for (const book of booksData) {
      const newBook = new Book(
        book.title,
        book.author,
        book.language,
        book.subject,
      );
      this.addBook(newBook);
    }
  }
  addBook(individualBook) {
    this.books.push(individualBook);
    //this "sees(book)" method is being pushed by this push method
  }
  render() {
    const libraryWrapper = document.createElement('div');

    for(const book of this.books) {
        libraryWrapper.append(book.render());
  }
  document.body.append(libraryWrapper);
}
}
