import { Link } from "react-router-dom";

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div>
         <button onClick={()=>(onClose(id))}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <img  src={image} alt="" />
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}
