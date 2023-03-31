import { useState } from "react";
import Validation from "./validation";

export default function Form(){

        const [userData, setUserData] = useState({username:'', password:''});
        const [errors, setErrors] = useState({username:'', password:''});

        const handleInputChange = (event) => {
            setUserData({...userData, 
                            [event.target.name]: event.target.value})
            setErrors(Validation({...userData, 
                [event.target.name]: event.target.value}))
            
        }
        
        const handleSubmit = (event) => {
            event.preventDefault();
        
            if(!Object.keys(errors).length){
              alert("Datos completos");
              setUserData({name: "",
              email: "",
             message: "" })
             setErrors({name: "",
             email: "",
             message: "" })
            }else{
              alert("Debe llenar todos los campos");
            }
            
          }

    return(<form onSubmit={handleSubmit}>

            <label htmlFor="username">Username: </label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
            {errors.username && <p>{errors.username}</p>}
            <hr/>
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" value={userData.password} onChange={handleInputChange} />
            {errors.password && <p>{errors.password}</p>}
        <hr/>
            <button type="submit">LOGIN</button>
 
</form>)
}