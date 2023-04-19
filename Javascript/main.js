//DOM
//obtener los elementos
console.log("prueba javascript");
let links = document.querySelectorAll(".close");
//recorrerlos
links.forEach(function(link){
    
    //agregar un evento a cada uno de ellos
    link.addEventListener("click", function(ev){
        
        ev.preventDefault();
        let content =document.querySelector('.content');
       
        //quitar las clases de animacion 
        content.classList.remove("animate__fadeInTopLeft");
        content.classList.remove("animate__animated");
        
        //agregar clases para animar su salidafadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function() {
            location.href="../index.html";
        },600);
        
        return false;
    });
    
});

//let iconos =document.querySelectorAll("i");

