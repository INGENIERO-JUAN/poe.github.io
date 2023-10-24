class Nodo{
    constructor(valor){
        this.valor=valor;
        this.anterior=null;
        this.sgte=null;
    }
}

class lista_doblemente_enlazada{
      constructor(){
        this.primerNodo=null;
        this.ultimoNodo=null;

      } 

      agregaralfinal(valor){
             const nuevoNodo=new Nodo(valor);

             if(this.primerNodo===null){
                  this.primerNodo=nuevoNodo
                  this.ultimoNodo=nuevoNodo

                }else{
                nuevoNodo.anterior=this.ultimoNodo
                    this.ultimoNodo.sgte=nuevoNodo
                    this.ultimoNodo=nuevoNodo    
                }
      }

      agregaralinicio(valor){
          const nuevoNodo=new Nodo(valor);

          if(this.primerNodo===null){
            this.primerNodo=nuevoNodo
            this.ultimoNodo=nuevoNodo

          }else{
            nuevoNodo.sgte=this.primerNodo
            this.primerNodo.anterior=nuevoNodo
            this.primerNodo=nuevoNodo    
          }

      }

      imprimir(){
          let recorre= this.primerNodo
          
          
          while(recorre){

              console.log(recorre.valor)
              recorre=recorre.sgte
          }
        


        }


        ganapierde(){
            let recorre= this.primerNodo          
          
            while(recorre){
                  if(recorre.valor.prom>=3){
                    console.log(recorre.valor.nombre+" PASO EL SEMESTRE "+" CON UN PROM= "+recorre.valor.prom)
                  }else if(recorre.valor.prom<3){
                    console.log(recorre.valor.nombre+" PERDIO EL SEMESTRE "+" CON UN PROM= "+recorre.valor.prom)
                  }
                recorre=recorre.sgte
            }
          

        }

        eliminar(valor){
            let nodoActual=this.primerNodo;
            while(nodoActual){
                if(nodoActual.valor.id==valor){
                    if(nodoActual.anterior){
                        nodoActual.anterior.sgte=nodoActual.sgte
                    }else{
                        this.primerNodo=nodoActual.sgte
                    }
                    if(nodoActual.sgte){
                        nodoActual.sgte.anterior=nodoActual.anterior
                    }else{
                        this.ultimoNodo=nodoActual.anterior
                    }
                    return
                }else{
                    console.log("no se encontro el id")                    
                }
                nodoActual=nodoActual.sgte;
            }
        }

      




}

let ident=0;
let obj_estudiantes=new lista_doblemente_enlazada();
function enviar(){
    ident++
    
     let n1=parseFloat(document.getElementById("n1").value)
     let n2=parseFloat(document.getElementById("n2").value)
     let n3=parseFloat(document.getElementById("n3").value)
     let res=((n1+n2)/2)*0.6+(n3*0.4)

     let obj={
        id:ident,
        nombre:document.getElementById("nombre").value,
        nota1:n1,
        nota2:n2,
        nota3:n3,
        prom:res,
     }
     obj_estudiantes.agregaralfinal(obj)
     console.log(obj_estudiantes)
    
}

function enviarganapierde(){
    obj_estudiantes.ganapierde()
}













