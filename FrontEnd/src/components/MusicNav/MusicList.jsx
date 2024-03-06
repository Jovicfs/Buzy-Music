import './MusicList.css';
import MusicCard from './MusicCard';
const MusicList = () => {
  return (
    <div className="music-list">
      <div className="scroll-container">
            <MusicCard/>
      </div>
    </div>
  );
};
export default MusicList;