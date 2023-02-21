'use strict';

let detalles = {};

const btnCalcular = document.querySelector("#btnCalcular");
const select = document.querySelector("#selectColor");

select.onclick = function(){
    const seleccion = document.querySelector("#selectColor").value;
    seleccionColor(seleccion);
    console.info(seleccion);
}

btnCalcular.onclick = function(){
    const cantidad = parseFloat(document.querySelector("#cantidad").value);
    let total = operacion(cantidad);
    totalCal(cantidad, total);
    mostrarCard();
}

const operacion = (cantidad)=>{
    let total = cantidad * 3500000;
    return total;
}

const totalCal = (cant, total) =>{
    detalles.canti = cant;
    detalles.tot = total;
}

const seleccionColor = (seleccionado)=>{
    const selectColor = document.querySelector(".color");
    selectColor.classList.remove("azul","grisclaro","grisoscuro");
    console.log(selectColor);
    if (seleccionado == "grisoscuro") {
        selectColor.classList.add("grisoscuro");
        console.log(selectColor);
    } else if (seleccionado == "grisclaro"){
        selectColor.classList.add("grisclaro");
    }else if(seleccionado == "azul"){
        selectColor.classList.add("azul");
    }else{
        selectColor.classList.remove("azul");
        selectColor.classList.remove("grisclaro");
        selectColor.classList.remove("grisoscuro");
    }
    
}

const mostrarCard = ()=>{
    const mostCard = document.getElementById("card-body");
    const card = document.getElementById("card-body");
     
       const cantid = document.querySelector(".total-cantidad").innerHTML =`Cantidad: ${detalles.canti}`;
       const tcolor = document.querySelector(".text-color").innerHTML ='Color:';
       const total = document.querySelector(".total").innerHTML =`Total: $${parseFloat(detalles.tot)}`;
}






