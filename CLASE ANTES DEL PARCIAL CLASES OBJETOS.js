class estudiante{

//atributos metodos, operaciones, encapsulamiento, herencia, polimorfismo


constructor(indentificación, nombre, edad, genero){

    this.indentificación=indentificación;
    this.nombre=nombre;
    this.edad=edad;
    this.genero=genero;
}


}

//instancia
const objCarlos= new estudiante(123,"Carlos Lopez",25,"M")
console.log(objCarlos)



//---------------------------------------------------------------------------------------------------------------------



let inventariotienda={

articulos:[],

agregarart:function(art){
    this.articulos.push(art);

},
buscarpornombre:function(nom){
 return this.articulos.find(index=>index.nombre_art==nom);

},

filtroporprecio:function(preciomax,preciomin){

const res=this.articulos.filter(index=>index.precio<preciomin && index.precio>preciomax)

return res;
}

}

let obj1={

id:10001,
nombre_art:"arroz",
precio: 7000,
unidad: 80,
unidad_medida: "kg",


}

let obj2={

    id:10002,
    nombre_art:"frijol",
    precio: 3000,
    unidad: 100,
    unidad_medida: "kg",
}

inventariotienda.agregarart(obj1)
inventariotienda.agregarart(obj2)

console.log(inventariotienda.articulos)
console.log(inventariotienda.buscarpornombre("arroz"))
console.log(inventariotienda.filtroporprecio(5000,10000))


