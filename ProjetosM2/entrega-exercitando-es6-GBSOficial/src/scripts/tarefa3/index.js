import { userTypeDiscount, bookStoreBooks } from "./database.js";

const findBooksByCategory = (bookList, category) => {
    const filteredBooks = bookList.filter(book => 
      book.categories.some(bookCategory => bookCategory.toLowerCase() === category.toLowerCase())
    );
  
    return filteredBooks;
  };
  
  
      const mysteryBooks = findBooksByCategory(bookStoreBooks, "Mistério");
      console.log("Pesquisa por Categoria:", mysteryBooks);


const findBookById = (bookList, bookId) => {
    const foundBook = bookList.find(book => book.id === bookId);
    return foundBook;
  };

      const bookIdToFind = 2;
      const foundBook = findBookById(bookStoreBooks, bookIdToFind);
    
      console.log("Pesquisa por ID:", foundBook);

const sellBook = (bookList, bookId, userType = "normal") => {
        const book = bookList.find(book => book.id === bookId);
      
        if (!book || book.quantity === 0) {
          return "Livro indisponível para compra.";
        }
      
        const discount = userTypeDiscount[userType];
        const finalPrice = (1 - discount) * book.price;
      
        book.quantity--;
        const formattedPrice = finalPrice.toFixed(2);
      
        return `Livro ${book.title} vendido com sucesso por R$ ${formattedPrice} (${(discount * 100).toFixed(0)}% de desconto).`;
      };
      
       console.log(sellBook(bookStoreBooks, 1, "normal"));
       console.log(sellBook(bookStoreBooks, 1, "bronze"));
       console.log(sellBook(bookStoreBooks, 1, "silver"));
       console.log(sellBook(bookStoreBooks, 1, "gold"));
       console.log(sellBook(bookStoreBooks, 1, "platinum"));

const calculateAverageRating = (bookList, bookId) => {
        const book = bookList.find(book => book.id === bookId);
      
        if (!book) {
          return 'Livro não encontrado.';
        }
      
        if (book.ratings.length === 0) {
          return `O livro ${book.title} não possui nenhuma avaliação.`;
        }
      
        const totalRatings = book.ratings.reduce((total, rating) => total + rating, 0);
        const averageRating = totalRatings / book.ratings.length;
      
        const formattedAverageRating = averageRating.toFixed(2);
      
        return `O livro ${book.title} possui uma média de avaliação igual a ${formattedAverageRating}.`;
      };
      

      console.log(calculateAverageRating(bookStoreBooks, 1));
      console.log(calculateAverageRating(bookStoreBooks, 18));
      console.log(calculateAverageRating(bookStoreBooks, 20));