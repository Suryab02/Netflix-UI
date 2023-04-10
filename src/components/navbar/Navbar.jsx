import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return(
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
     <div className="container">
      <div className="left">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt=""
        />
        <span>Home</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <span>My list</span>
      </div>
      <div className="right">
       <SearchIcon className="icon"/>
       <span>KID</span>
       <NotificationsIcon className="icon" />
       <img 
       src="https://preview.redd.it/sgfxdosc4qo81.png?width=338&format=png&auto=webp&v=enabled&s=73966183153dae9e450533952357f62770a0a70c"
       alt=""
       />
       <div className="profile">
       <ArrowDropDownIcon className="icon" />
        <div className="options">
          <span>Settings</span>
          <span>Logout</span>
        </div>
       </div>
      </div>
       </div>
        </div>
  )
}

export default Navbar

