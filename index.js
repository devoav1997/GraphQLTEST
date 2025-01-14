const express = require('express');  // Import Express framework untuk membuat server
const { graphqlHTTP } = require('express-graphql');  // Middleware untuk menghubungkan Express dan GraphQL
const schema = require('./schema');  // Import schema GraphQL yang sudah dibuat

const app = express();  // Membuat instance aplikasi Express

app.use('/graphql', graphqlHTTP({  // Menentukan endpoint '/graphql'
  schema,      // Menggunakan schema yang telah diimpor
  graphiql: true,  // Mengaktifkan GraphiQL untuk testing query melalui browser
}));

app.listen(4000, () => console.log('Server berjalan di http://localhost:4000/graphql'));  // Menjalankan server di port 4000 dan menampilkan pesan di console