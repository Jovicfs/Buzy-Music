  import models from "../models/Models";
  
  const router = express.Router();




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
  
  
  