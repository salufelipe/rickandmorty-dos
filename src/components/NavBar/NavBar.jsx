import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav(props){

    return(

        <nav>

            <Link to="/home"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>


            <SearchBar
          onSearch={props.onSearch}
                />           

        </nav>



    );


}