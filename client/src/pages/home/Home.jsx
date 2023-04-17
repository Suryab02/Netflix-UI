import "./home.scss"
import NavBar from "../../components/navbar/Navbar.jsx"
import Featured from "../../components/featured/Featured.jsx"
import ListType from "../../components/list/ListType";


export default function Home() {
  return (
    <div className="home">
        <NavBar />
        <Featured type="movie"/>
        <ListType />
        <ListType />
    </div>
  )
}