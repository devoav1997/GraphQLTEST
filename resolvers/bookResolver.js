const { books } = require('../data/books');

const bookResolver = {
  Query: {
    books: () => books,  // Resolver untuk mengambil semua buku
  },
};

module.exports = bookResolver;