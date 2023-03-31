import { useState } from "react";
import { Link } from 'react-router-dom'

export default function SearchBar(props) {
   
   const [id, setId] = useState("");


   function handleChange (evento){

      setId(evento.target.value);

   };
   
   
   return (
      <div>
         <input onChange={handleChange} type='search' value={id}/>
      <Link to="/home">
      <button onClick={()=>(props.onSearch(id))}>poné numeritos</button>
      </Link>
      </div>
   );
}
