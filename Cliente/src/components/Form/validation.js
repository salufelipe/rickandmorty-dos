export default function Validation(input){
    let errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


    if(!input.username){ errors.username = 'ingrese un email';}
    else if(!regexEmail.test(input.username)){
        errors.username = 'Debe ser un correo electrónico válido';
       }
       else if(input.username>35){
        errors.username = 'podés hasta 35 caracteres';
       }
       else{errors.username = '';}
       
    if(!input.password){ errors.password = 'ingrese su password'}
    else if(input.password.length < 6 || input.password.length > 10 ){
        errors.password = 'entre 6 a 10 caracs';
    }
    else{errors.password = '';}

       return errors;
};