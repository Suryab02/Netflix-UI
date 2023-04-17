import "./watch.scss";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video className="video" 
      autoPlay 
      progress 
      controls 
      src="https://video-links.b-cdn.net/media/videolinks/video/PrismFX.mp4" />
    </div>
  );
};

export default Watch;
