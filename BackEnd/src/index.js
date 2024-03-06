 const express = require('express');
 const mongoose = require('mongoose');
 const port = 3000;
 const app = express();
 const router = express.Router();
 app.use(express.json());
 const apiPrefix = '/api'; 
 app.use(apiPrefix, router);


router.get('/artistas', async (req, res) => {
  try {
    const artistas = await Artista.find();
    res.json(artistas);
  } catch (error) {
    res.status(500).json({ message: 'não foi possível se conectar' });
  }
});

router.get('/albums',async(req,res)=>{
  try{
    const albums = await Album.find();
    res.json(albums)
  }
  catch (error){
    res.status(500).json({message: 'não foi possivel se conectar'});
  }
});

router.get('/musica',async (req,res)=>{
   try{
    const musicas = await Musica.find();
    res.json(musicas)
   }
   catch(error){
    res.status(500).json({message: 'não foi possivel se conectar'});
   }
});




 app.listen(port, () => {
    mongoose.connect('mongodb+srv://Victor:YbC+t8Bb_&6rvD+@banco.cdh6xoq.mongodb.net/?retryWrites=true&w=majority')
      .then(() => {
        console.log(`Servidor rodando em http://localhost:${port}`);
      })
      .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err.message);
      });
  });

