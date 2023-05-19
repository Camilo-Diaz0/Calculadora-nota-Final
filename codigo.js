const evento = document.querySelector(".añadir");
const evento2 =document.querySelector(".calcular");
let notas = 0
let a = 0;
const nuevaNota = ()=>{
    a++;
    let agregar = document.querySelector(".cuerpo");
    let item = document.createElement("DIV");
    item.innerHTML =
     `<div class="cal">
    <h1>Escribe tu calificacion:</h1>
    <input type="text" placeholder="escriba aqui" class="nota-${a}">
</div>
<div class="cal">
    <h3>Escribe el porcentaje de la calificacion:</h3>
    <input type="text" placeholder="escriba aqui" class="porc-${a}">
</div>`;
   agregar.appendChild(item);
    
}
function promedio(s,p){
    let resultado = Math.fround((3-s/100)/(1-p));
    
    return resultado;
}
function verificar(){
    let mensaje = ""
    if(notas<=1.5){
        mensaje = `Felicidades, te falta poco para 
         aprobar la materia`;
    }else if(notas>1.5 && notas<=3){
        mensaje = `Estas a punto de aprobar, pero debes esforzarte un poco en esta
        recta final`;
    }else if(notas>3 && notas<=5){
        mensaje = `aun puedes aprobar, pero debes esforzarte mucho`;
    }else if(notas>5){
        mensaje = `lo siento, has desaprobado`;  }
    return mensaje;
}
function mostrarRs(v){
    const mres = document.querySelector(".modal");
    
    mres.innerHTML += `<div class="fin"><h2>Te falta ${notas}<h2/>
    <h4>${v}</4></div>`;
    let modal = document.querySelector(".modal-backg");
    modal.style.display="flex";
    modal.style.animation = "aparecer 1.5s forwards";
   
}

const Calcular = ()=>{
    let suma = 0;
    let por = 0;
    let verificado;
    for(let i =0;i<=a;i++){
        let valor = document.querySelector(`.nota-${i}`);
        let vapor = document.querySelector(`.porc-${i}`);
        suma += parseFloat(valor.value)*parseFloat(vapor.value);
        por += parseFloat(vapor.value)/100;
    }
    notas = promedio(suma,por);
    verificado = verificar();
    mostrarRs(verificado);
    console.log(notas);

}    
evento.addEventListener("click",()=>{
    nuevaNota();
});
evento2.addEventListener("click",()=>{
    Calcular();
    
})
