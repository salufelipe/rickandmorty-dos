import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";
// import { compose } from "redux";

export default function Card({id, name, species, gender, image, onClose}) {
    
 const dispatch = useDispatch();
 const myFavorites = useSelector(state => state.myFavorites);

 useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

 const [isFav, setIsFav] = useState(false);
 const handleFavorite = () => {

   if(isFav){
      setIsFav(false);
      dispatch(deleteFavorite(id));
   }else{
      setIsFav(true);
      dispatch(addFavorite({id, name, species, gender, image, onClose}))
   }
  };

return (
      <div>
         {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
            )
         }
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
