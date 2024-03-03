 const express = require('express');
 const mongoose = require('mongoose');
 const port = 3000;
 const app = express();
 const router = express.Router();
 app.use(express.json());
 const apiPrefix = '/api'; 
 app.use(apiPrefix, router);

 app.listen(port, () => {
    mongoose.connect('mongodb+srv://Victor:YbC+t8Bb_&6rvD+@banco.cdh6xoq.mongodb.net/?retryWrites=true&w=majority')
      .then(() => {
        console.log(`Servidor rodando em http://localhost:${port}`);
      })
      .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err.message);
      });
  });

