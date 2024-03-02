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
  

