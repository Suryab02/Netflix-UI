import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useState } from "react";
function Listitem({index}) {
  const [isHovered ,setisHovered] = useState(false);
  const trailer =
   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="listItem" 
    style={{left: isHovered && index * 225 - 50 +index * 2.5}}
    onMouseEnter={() => setisHovered(true)} 
    onMouseLeave={() => setisHovered(false)}
    >
        <img 
        src="https://coolhdwall.com/storage/202103/the-matrix-resurrections-poster-4k-wallpaper-3840x2160.jpg"
        alt=""
        />
        {isHovered && (
<>        
        <video src={trailer} autoPlay={true} loop/>
        <div className="itemInfo">
             <div className="icons">
               <PlayArrowIcon className="icon"/>
               <AddIcon className="icon" />
               <ThumbUpOutlinedIcon className="icon" />
               <ThumbDownOutlinedIcon className="icon" />
             </div>
             <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2002</span>
             </div>
             <div className="desc">
              It is the sequel to The Matrix Revolutions (2003) and the fourth installment in The Matrix film franchise.
             </div>
             <div className="genre">Action</div>
        </div></>
        )}
    </div>
  )
}

export default Listitem