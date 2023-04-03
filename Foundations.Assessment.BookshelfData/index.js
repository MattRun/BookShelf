const libraryInstance = new Library();

libraryInstance.seed(bookData);

libraryInstance.render();

// document.addEventListener('DOMContentLoaded',() => {
//     document.querySelectorAll('search-input').forEach((input) => {
//        const tableRows = inputField.closest('table').querySelectorAll('bookData');
//         });
// });
// });
const addBook = () => {
    console.log('addBook');
};

// document.querySelectorAll = () => {
//     addBook(title);
//     addBook(subject);
//     addBook(language);
//     addBook(author);
// }

document.getElementByClassName("container").style.backgroundImage = "/images/library.jpg";
