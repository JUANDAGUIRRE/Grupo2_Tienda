function validar_nombre_usuario(string){
    const string = document.getElementById("nombre_usuario");
    const alphaExp = /^[a-zA-Z]+$/;

    
            if(string.match(alphaExp))
            {
                if(string.charAt(0)===string.charAt(0).toUpperCase());
                return true;
            }
            else{
                return false;
            }

}

validar_nombre_usuario(jose);


function validar_anoNacimiento_usuario(valor){
    const value = document.getElementById("anoNacimiento_usuario")

}

function validar_contrasena(string){
    const string = document.getElementById("contrasena_usuario")
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;