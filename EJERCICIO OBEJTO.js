let planeta1={
nombre: "Tierra",
Distancia:150000000,
tamaño: 6371,

}

let planeta2={
    nombre: "Jupiter",
    Distancia:778000000,
    tamaño: 69911,

}

let planeta3={
    nombre: "Neptuno",
    Distancia:4500000000,
    tamaño: 24622,

}


if(planeta1.Distancia> planeta2.Distancia && planeta1.Distancia>planeta3.Distancia){

console.log("El planeta con mas distancia hacia el sol es"+"  "+ planeta1.nombre)

}
if (planeta2.Distancia>planeta1.Distancia && planeta2.Distancia> planeta3.Distancia){

    console.log("El planeta con mas distancia hacia el sol es"+"  "+ planeta2.nombre)

}

if(planeta3.Distancia>planeta1.Distancia && planeta3.Distancia> planeta2.Distancia){

    console.log("El planeta con mas distancia hacia el sol es"+"  "+ planeta3.nombre)


}

if(planeta1.tamaño>planeta2.tamaño && planeta1.tamaño>planeta3.tamaño){

    console.log("El planeta mas grande es"+"  "+ planeta1.nombre)

}

if(planeta2.tamaño>planeta1.tamaño && planeta2.tamaño>planeta1.tamaño){

    console.log("El planeta mas grande es"+"  "+ planeta2.nombre)

}

if(planeta3.tamaño>planeta1.tamaño && planeta3.tamaño>planeta2.tamaño){

    console.log("El planeta mas grande es"+"  "+ planeta3.nombre)

}