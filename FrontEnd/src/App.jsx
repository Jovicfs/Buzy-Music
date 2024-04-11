import "./App.css";
import Header from "./components/Header/header.jsx";
import MusicList from "./components/MusicNav/MusicList.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Musicsnav from "./components/Musicsnav/musicsnave.jsx";
function App() {
  return (
    <div className="Main-App">
      <Header />
      <Nav />
      <div className="containerMusicList">
        <div className="List">
          <MusicList
            Section={"Ouvir Novamente"}
            id="section-um"
          />
        </div>
        <div className="List">
          <MusicList
            Section={"Vídeos de música recomendados"}
            id="section-dois"
          />
        </div>
        <div className="List">
          <MusicList
            Section={"Clássicos da madrugada"}
            id="section-tres"
          />
        </div>
        <div className="List">
          <MusicList
            Section={"Novos Lançamentos"}
            id="section-quatro"
          />
        </div>
       </div>
       <div className="navContainer">
       <Musicsnav/>
       </div>
    </div>
  );
}

export default App;
