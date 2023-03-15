import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav(props){
    
    const favoritesHandler = () => {

    }
    return(

        <nav>

            <Link to="/home"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/favorites"><h1>mis favorites</h1></Link>

            <SearchBar
              onSearch={props.onSearch}
              />
        </nav>
);





}