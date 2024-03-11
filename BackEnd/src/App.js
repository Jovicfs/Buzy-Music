 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 const router = express.Router();
 const port = 3000;
 const app = express();

 //Configurando o App
 
 app.use(express.json());
 app.use(cors())

 //rotas

 const routes = require('../routes/routes')
 app.use('./api',routes);

 app.listen(port, () => {
    mongoose.connect('mongodb+srv://Victor:YbC+t8Bb_&6rvD+@cluster0.wsv9s9s.mongodb.net/')
      .then(() => {
        console.log(`Servidor rodando em http://localhost:${port}`);
      })
      .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err.message);
      });
  });

