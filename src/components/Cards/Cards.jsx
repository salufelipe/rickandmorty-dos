import Card from '../Card/Card.jsx';

export default function Cards({characters, onClose}) {
   // const { characters } = props;
      if(!characters.length) return(<h2>No hay personajes para mostrar</h2>);
   return (<div>
      {
         characters.map(({id, name, species, gender, image})=>{
           return( 
           <Card 
            id = {id}
            name = {name}
            species = {species}
            gender = {gender}
            image = {image}
            onClose = {onClose}
            />
               )
         }
         )      
      }
   </div>
   );
}
