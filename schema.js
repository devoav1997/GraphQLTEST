const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = require('graphql');  // Import tipe data dari GraphQL
const { books } = require('./data/books');  // Import data dummy buku

const BookType = new GraphQLObjectType({
  name: 'Book',  // Nama tipe data
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    books: {
      type: new GraphQLList(BookType),  // Mengembalikan daftar buku
      resolve() {
        return books;  // Mengambil data dari books.js
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,  // Menghubungkan Root Query ke schema
});