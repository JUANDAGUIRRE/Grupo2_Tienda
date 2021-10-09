function validar_nombre_usuario(string){
    const string = document.getElementById("nombre_usuario");
    const alphaExp = /^[a-zA-Z]+$/i;
    
    if(string.match(alphaExp))
    {
        if(string.charAt(0)===string.charAt(0).toUpperCase());
        console.log("verdadero");
    }
    else{
        console.log("falso");
    }

}

function validar_anoNacimiento_usuario(valor){
    const valor = document.getElementById("anoNacimiento_usuario").value;

    if(isNaN(valor)){
        console.log("falso");
    }
    else{
        if(valor >= 1900 && valor <= 2021){
            console.log("verdadero");
        }
        else{
            console.log("falso");
        }
    }
}

function validar_contrasena(string){
    const string = document.getElementById("contrasena_usuario").value;
    const alphaNum = /^[a-z0-9]+$/i;
    const alphaNumEsp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if(string.lenght>=6 && string.match(alphaNum) ){
        if(string.match(alphaNumEsp)){
            console.log("verdadero");
        }
        else{
            console.log("falso");
        }
    }
    console.log("falso");

}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;