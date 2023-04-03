class Book {
    //"book" can be changed to "order" its just the variable I choose.
    constructor(title, author, language, subject) {
        this.title = title;
        this.author = author;
        this.language = language;
        this.subject = subject;
        // this.imgSrc= imgSrc;
    //take out img src if you dont want images.
    }
    render(){
        // console.log("title", this.title);
        // console.log("author",this.author);
        // console.log("language",this.language);
        // console.log("subject" ,this.subject);
        // let renderedBook = `${this.author} - ${this.language} - ${this.subject} - ${this.title}`
        const bookWrapper = document.createElement('div');
        
        const h1 = document.createElement('h1');
        h1.textContent = `Title: ${this.title}`;

        const h2 = document.createElement('h2');
        h2.textContent = `Author: ${this.author}`;
        
        const h3 = document.createElement('h3');
        h3.textContent = `Language: ${this.language}`;
        
        const h4 = document.createElement('h4');
        h4.textContent = `Subject: ${this.subject}`;

        // const img = document.createElement('img');
        // img.src= this.imgSrc
        // img.style.width = "20%"
        // img.style.height = "20%"

        bookWrapper.append(h1, h2, h3, h4);
        
        
        return bookWrapper
    }
}
// const book1 = new Book('Harry Potter', 'J.K. Rowling', 'English', 'Fantasy')

// document.body.append(book1.render())