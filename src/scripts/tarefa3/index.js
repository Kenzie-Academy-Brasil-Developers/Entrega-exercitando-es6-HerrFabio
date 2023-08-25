const { userTypeDiscount, bookStoreBooks } = require('./database.js');

const findBooksByCategory = (bookList, category) => {
  const filteredBooks = bookList.filter(book => 
    book.categories.map(cat => cat.toLowerCase()).includes(category.toLowerCase())
  );
  return filteredBooks;
};

const categoryToFind = "Aventura"
const booksInCategory = findBooksByCategory(bookStoreBooks, categoryToFind);
console.log(booksInCategory);

  
const findBookById = (bookList, bookId) => {
    const foundBook = bookList.find(book => book.id === bookId);
    return foundBook;
  };
  
  const targetBookId = 3
  const book = findBookById(bookStoreBooks, targetBookId);
  
  if (book) {
    console.log("Livro encontrado:", book);
  } else {
    console.log("Livro não encontrado.");
  }
  
  const sellBook = (bookList, bookId, userType = 'normal') => {
    const book = bookList.find(book => book.id === bookId);
  
    if (!book || book.quantity <= 0) {
      return 'Livro indisponível para compra.';
    }
  
    const discount = userTypeDiscount[userType];
    const discountedPrice = book.price * (1 - discount);
    const finalPrice = parseFloat(discountedPrice.toFixed(2));
  
    book.quantity -= 1;
  
    return `Livro ${book.title} vendido com sucesso por R$ ${finalPrice} (${(discount * 100).toFixed(2)}% de desconto).`;
  };
  
  const bookIdToSell = 18;
  const userType =  'bronze'; 
  const sellMessage = sellBook(bookStoreBooks, bookIdToSell, userType);
  
  console.log(sellMessage);

  const calculateAverageRating = (bookList, bookId) => {
    const book = bookList.find(book => book.id === bookId);
  
    if (!book) {
      return 'Livro não encontrado.';
    }
  
    const totalRatings = book.ratings.length;
    if (totalRatings === 0) {
      return `O livro ${book.title} não possui nenhuma avaliação.`;
    }
  
    const sumRatings = book.ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = (sumRatings / totalRatings).toFixed(2);
  
    return `O livro ${book.title} possui uma média de avaliação igual a ${averageRating}.`;
  };
  
  const bookIdToCalculate = 2;
  const averageRatingMessage = calculateAverageRating(bookStoreBooks, bookIdToCalculate);
  
  console.log(averageRatingMessage);

