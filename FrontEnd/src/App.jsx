import './App.css'
import Header from './components/Header/header.jsx'
import MusicList from './components/MusicNav/MusicList.jsx'
import Nav from './components/Nav/Nav.jsx'

function App() {
  return (
    <div className="Main-App">
       <Header/>
         <Nav/>
           <div className="containerMusic">
            <MusicList id='section-um'/>
            <MusicList id='section-dois'/>
            <MusicList id='section-tres'/>
            <MusicList id='section-quatro'/>
          </div>
   </div> 
    
  )
} 

export default App
