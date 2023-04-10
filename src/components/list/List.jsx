import "./list.scss";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from "../listItem/ListItem" 


function list() {
  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosNewOutlinedIcon />
            <div className="container" >
                <ListItem />
                
            </div>
            <ArrowForwardIosOutlinedIcon />
        </div>
    </div>
  )
}


export default list