import "./watch.scss";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        home
      </div>
      <video className="video" 
        autoPlay 
        controls 
        >
        <source src="./The.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Watch;
