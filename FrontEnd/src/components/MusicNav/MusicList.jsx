import './MusicList.css';
import MusicCard from './MusicCard';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
const MusicList = () => {
  return (
    <div className="music-list">
      <div className="scroll-container">
            <MusicCard id='music-card-0'/>
            <MusicCard id='music-card-1'/>
            <MusicCard id='music-card-2'/>
            <MusicCard id='music-card-3'/>
            <MusicCard id='music-card-4'/>
            <MusicCard id='music-card-5'/>
            <MusicCard id='music-card-6'/>
            <MusicCard id='music-card-7'/>
            <MusicCard id='music-card-8'/>
            <MusicCard id='music-card-9'/>
            <MusicCard id='music-card-10'/>
            <MusicCard id='music-card-11'/>
            <MusicCard id='music-card-12'/>
            <MusicCard id='music-card-13'/>
            <MusicCard id='music-card-14'/>
            <MusicCard id='music-card-15'/>

      </div>
    </div>
    
  );
};
export default MusicList;