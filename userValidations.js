function validation(data){
    const{name, email}=data;
    if(name.length<=2){
        throw new Error('el nombre debe contener almenos 3 caracteres')
    }
    if(typeof name!=='string'){
        throw new Error('el nombre solo debe contener letras de la A a la Z')
    }
    if(typeof name!=='string'){
        throw new Error('el email debe ser valido')
    }
}

module.exports={validation};