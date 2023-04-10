import { List } from "@mui/material";
import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar"
import "./home.scss";



const Home = () => {
    return (
        <div className="home">
            <Navbar />
            
            <Featured  type="movie"/>
            <List />
            
        </div>
    )
}


export default Home;