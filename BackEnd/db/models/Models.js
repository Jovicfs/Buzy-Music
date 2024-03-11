 const express = require('express');
 const mongoose = require('mongoose');
 const app = express();
 app.use(express.json());
 

  const artistaSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true,
    },
    dataNascimento: {
      type: Date,
    },
    generoMusical: {
      type: String,
    },
    image:{
      type:String
    }
  });  
  const Artista = mongoose.model('Artista', artistaSchema);
  
  const albumSchema = new mongoose.Schema({
    titulo: {
      type: String,
      required: true,
    },
    anoLancamento: {
      type: Number,
    },
    artista: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artista',
    },
    musicas: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Musica',
    }],
  });
  
  const Album = mongoose.model('Album', albumSchema);


  const musicaSchema = new mongoose.Schema({
    titulo: {
      type: String,
      required: true,
    },
    duracao: {
      type: Number,
    },
    genero: {
      type: String,
    },
    artista: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artista',
    },
    album: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album',
    },
    url: {
      type: String,
    },
  });
  
  const Musica = mongoose.model('Musica', musicaSchema);
 
 
 export{Artista,Album,Musica};
 
