
import './MusicCard.css';

const MusicCard = ({ title, artist, imageUrl }) => {
  return (
    <div className="music-card">
      <img src={imageUrl} alt={`${title} cover`} />
      <div>
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;