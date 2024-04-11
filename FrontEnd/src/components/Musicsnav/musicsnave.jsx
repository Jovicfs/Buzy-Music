import './musicsnav.css';


export default function Musicsnav() {
  // Dados de exemplo para visualização
  const musicList = [
    { title: 'Song 1', artist: 'Artist 1', imageUrl: 'url1' },
    { title: 'Song 2', artist: 'Artist 2', imageUrl: 'url2' },
    { title: 'Song 3', artist: 'Artist 3', imageUrl: 'url3' },
    { title: 'Song 4', artist: 'Artist 4', imageUrl: 'url4' },
    { title: 'Song 5', artist: 'Artist 5', imageUrl: 'url5' },
    { title: 'Song 6', artist: 'Artist 6', imageUrl: 'url6' },
    { title: 'Song 7', artist: 'Artist 7', imageUrl: 'url7' },
    { title: 'Song 8', artist: 'Artist 8', imageUrl: 'url8' },
    { title: 'Song 9', artist: 'Artist 9', imageUrl: 'url9' },
    { title: 'Song 10', artist: 'Artist 10', imageUrl: 'url10' },
    { title: 'Song 11', artist: 'Artist 11', imageUrl: 'url11' },
    { title: 'Song 12', artist: 'Artist 12', imageUrl: 'url12' }
  ];

  const musicArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return musicArray;
  };

  const chunkedMusicList = musicArray(musicList, 4);

  return (
    <div className="MusicsNav">
      {chunkedMusicList.map((chunk, index) => (
        <div className="musics-container" key={index}>
          {chunk.map((song, idx) => (
            <div className="MusicCard" key={idx}>
              <div className="music">
                <img src={song.imageUrl} alt={`${song.artist} cover`} />
                <h3>{song.title}</h3>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}




























/*export default function Musicsnav({ title,artist,imageUrl }) {
  // Função auxiliar para dividir a lista de músicas em grupos de 4
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  // Dividir a lista de músicas em grupos de 4
  const chunkedMusicList = chunkArray(title, 4);

  return (
    <div className="MusicsNav">
      {chunkedMusicList.map((chunk, index) => (
        <div className="musics-container" key={index}>
          {chunk.map((song, idx) => (
            <div className="MusicCard" key={idx}>
              <div className="music">
                <img src={song.imageUrl} alt={`${song.artist} cover`} />
                <h3>{song.title}</h3>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
*/