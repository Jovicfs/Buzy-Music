  import {Artista,Album,Musica} from "../db/models/Models";
  
  app.get('/artists', async (req, res) => {
    try {
      const artists = await Artista.find();
      res.json(artists);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
 
  app.post('/artists', async (req, res) => {
    try {
      const newArtist = await Artista.create(req.body);
      res.json(newArtist);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
 
  app.get('/albums', async (req, res) => {
    try {
      const albums = await Album.find().populate('artista');
      res.json(albums);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
 
  app.post('/albums', async (req, res) => {
    try {
      const newAlbum = await Album.create(req.body);
      res.json(newAlbum);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
 
  app.get('/songs', async (req, res) => {
    try {
      const songs = await Musica.find().populate('artista').populate('album');
      res.json(songs);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
 
  app.post('/songs', async (req, res) => {
    try {
      const newSong = await Musica.create(req.body);
      res.json(newSong);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  