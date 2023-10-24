//definir la estructura de los nodos
class Nodo{
    constructor(valor){
        
        this.valor=valor;
        this.sgte=null;
    }
}

//definir la clase Listasimple
class ListaSimple{
   
    constructor(){
        this.cabeza=null;
    }

    agregar_final(valor){
         const nuevoNodo=new Nodo(valor);//instancia de la clase Nodo
         
        if(!this.cabeza){
            this.cabeza=nuevoNodo;
        }else{
            let recorre=this.cabeza
            while(recorre.sgte){//validacon por verdadero
            recorre=recorre.sgte;
                
            }
            recorre.sgte=nuevoNodo;
        }
            
    
    }
     
    insertarInicio(valor){
             const nuevoNodo=new Nodo(valor);
             nuevoNodo.sgte=this.cabeza;
             this.cabeza=nuevoNodo;

    }

    insertarEnPosicion(valor,pos){
       const nuevoNodo=new Nodo(valor)
       if(pos===0){
        this.insertarInicio(valor)
        return
       }

       let recorre=this.cabeza
       let cont=0;
       while(recorre && cont < pos-1){
          recorre=recorre.sgte;
          cont++;
        }
        if(!recorre){
            console.log("POSICION NO ENCONTRADA....");
            return
        }
        
        nuevoNodo.sgte=recorre.sgte;
        recorre.sgte=nuevoNodo;
    }



    eliminar(valor){
             if(!this.cabeza){
                return
             }

            if(this.cabeza.valor===valor){
            this.cabeza=this.cabeza.sgte
            return
            }

            let recorre=this.cabeza 
            while(recorre.sgte && recorre.sgte.valor !== valor){
                recorre=recorre.sgte
            } 
            
            if(recorre.sgte && recorre.sgte.valor===valor){
                recorre.sgte=recorre.sgte.sgte
            }

    }




    imprimir(){
        let recorre=this.cabeza;
        while(recorre){
            console.log(recorre.valor);
            
            recorre=recorre.sgte;
        }
    }

}


//ejemplo
function enviar(){
let num=parseFloat(document.getElementById("numero").value);

}



const listanumeros=new ListaSimple();
listanumeros.agregar_final({nombre:"wilson",edad:12});
console.log(listanumeros)




