let n1, n2,op;

op=(prompt("Que operación desea hacer"));
while(op>4){
alert("ingrese una opción valida")    
op=(prompt("Que operación desea hacer"))
}
while(op<1){
    alert("ingrese una opción valida")    
    op=(prompt("Que operación desea hacer"))
    }

n1=parseFloat(prompt("INGRESE EL PRIMER NUMERO"))
n2=parseFloat(prompt("INGRESE EL SEGUNDO NUMERO"))





function suma(n1,n2){
 return(n1+n2)

    
}

function resta(n1,n2){

    return console.log(n1-n2)
    
        
}

function multiplicación(n1,n2){

    return console.log(n1*n2)
    
        
}

function division(n1,n2){

    return console.log(n1/n2)
    
        
   
}
if(op=1){
    console.log(suma(n1,n2));
}

else if(op=2){
    console.log(resta(n1,n2));
}

else if(op=3){
    console.log(multiplicación(n1,n2));   
}

else if(op=4){
    console.log(division(n1,n2));
}
