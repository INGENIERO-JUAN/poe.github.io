let est_carlos={
nombre:"Carlos",
edad: 18,
genero: "Masculino",

}

let est_ana={

nombre: "ana",
edad: 18,
genero: "femenino"

}
let nom= prompt("Ingrese un nombre")
est_carlos["nombre"]= nom

console.log(est_carlos.nombre)

//neptuno tierra jupiter 

//3 propiedades: Nombres distancia del planeta al sol. tamaño.
// Cual es el planeta mas grande y el mas lejano al sol 

// EJERCICIO COMPLETADO!!

//-------------------------------------------------------------------------------------------------------------------------------



let estudiante={

nombre: "Nicolas",
notas:[1,2,3,4,5],
prom: function(num1,num2){

this.notas.push(num1,num2)
let total=this.notas.reduce((acum,index)=>acum+index)
total=total/this.notas.length;
return total;
    
}
   
}

console.log("El estudiante"+ estudiante.nombre+ "Tiene un promedio de:" + estudiante.prom (5,5))





//-------------------------------------------------------------------------------------------------------------------------

let libreriapeliculas={

peliculas:[],

agregar_pelicula: function(){
this.peliculas.push(peli);

   
},

buscar_pelicula: function(titulo_pelicula){
    return this.peliculas.find(peli=>peli.titulo_pelicula===titulo_pelicula )
    





}

    


}