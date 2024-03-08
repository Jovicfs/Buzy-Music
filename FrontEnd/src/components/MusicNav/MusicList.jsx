import './MusicList.css';
import MusicCard from './MusicCard';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
const MusicList = () => {
  return (
    <div className="music-list">
      <div className="scroll-container">
            <MusicCard/>
         <div className="nav">
            <BsArrowLeftCircle  id='ArrowLeft'/>
            <BsArrowRightCircle  id='ArrowRight' />
        </div>
      </div>
    </div>
  );
};
export default MusicList;