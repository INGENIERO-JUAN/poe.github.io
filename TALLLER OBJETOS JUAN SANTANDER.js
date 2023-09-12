/*sistema de ventas guardar en vector objetos ahi va a ir las ventas, atributos dfe las ventas( factura fecha subtotal total)
metodos buscar x factura
filtrarx total (min, max)
prom vental(suma total numero de ventas dividido por el total de ventas)
3 objetos pedirlos desde html con prompt*/



let sistemadeventas={

facturas:[],

agregarventa:function(fact){

this.facturas.push(fact)

},


buscar_por_factura:function(factura){

return this.facturas.find(index=>index.id_factura==factura);



},


filtrar_por_total:function(valormin,valormax){

  const res=this.facturas.filter(index=>index.valor_total>valormin && index.valor_total<valormax)   

return res

},


promedio_ventas:function(){
let totalv=0
for(let i in this.facturas){
    totalv+=this.facturas[i].valor_total
    
    }
    return totalv/this.facturas.length
    

}

}


let f1={

id_factura: "factura1",

fecha: "05/2/2023",
subtotal: 15000,
iva: 2850,
valor_total: 17850,




}

let f2={

    id_factura:"factura2",
    
    fecha: "07/2/2023",
    subtotal: 19000,
    iva: 3610,
    valor_total: 22610,
    
}


let f3={

    id_factura:"factura3",
    
    fecha: "09/2/2023",
    subtotal: 30000,
    iva: 5700,
    valor_total: 35700,
    
}    

sistemadeventas.agregarventa(f1);
sistemadeventas.agregarventa(f2);
sistemadeventas.agregarventa(f3);


console.log(sistemadeventas.facturas)
console.log(sistemadeventas.promedio_ventas())

let buscar_fac=prompt("Que factura desea buscar (Registre el ID de la factura)")




console.log(sistemadeventas.buscar_por_factura(buscar_fac))



let buscar_total1=prompt("Buscar facturas por rango de total (Ingrese el primer precio)")
let buscar_total2=prompt("Buscar facturas por rango de total (Ingrese el segundo precio)")


console.log(sistemadeventas.filtrar_por_total(buscar_total1,buscar_total2))