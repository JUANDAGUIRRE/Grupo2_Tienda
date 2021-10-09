function validar_nombre_usuario(nombre){
    var nombre = document.getElementById("nombre_usuario").value;
    var alphaExp = /^[a-zA-Z]+$/i;
    
    if(nombre.match(alphaExp))
    {
        if(nombre.charAt(0)===nombre.charAt(0).toUpperCase());
        return true;
    }
    else{
        return false;
    }

}

function validar_anoNacimiento_usuario(valor){
    var valor = document.getElementById("anoNacimiento_usuario").value;

    if(isNaN(valor)){
        return false;
    }
    else{
        if(valor >= 1900 && valor <= 2021){
            return true;
        }
        else{
            return false;
        }
    }
}

function validar_contrasena(contrasena){
    var contrasena = document.getElementById("contrasena_usuario").value;
    //const alphaNum = /^[a-z0-9]+$/i;
    const alphaNumEsp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/i;

    if(contrasena.lenght >= 6 && contrasena.match(alphaNumEsp)){
        return true;

    }
    else{
        return false
    }
    

}

module.exports.validar_nombre_usuario = validar_nombre_usuario
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario
module.exports.validar_contrasena = validar_contrasena
