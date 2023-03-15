import {useSelector} from "react-redux";
import Card from "../Card/Card";
export default function Favorites () {
    const {myFavorites} = useSelector(state => state)
return (
        <div>
            <h1>Tus favorites</h1>
        
            <div>
            {myFavorites.map(({id, name, species, gender, image}) =>{
                return <Card 
                id = {id}
                name = {name}
                species = {species}
                gender = {gender}
                image = {image}/> 
            })
            
            }   
            
            </div>
        
        
        
        </div>
)
};