
function Ocultar(elemento){
    document.getElementById(elemento).style.display="none";
}

function Mostrar(elemento){
    if (sessionStorage.Seccion==null){

    }
    else{
        Ocultar(sessionStorage.getItem("Seccion"))
    }
    document.getElementById(elemento).style.display="block";
    console.log(elemento);
    sessionStorage.setItem("Seccion", elemento);
}
