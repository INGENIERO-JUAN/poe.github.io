
let m= new Array(5)
for(let i=0;i<5;i++){
    m[i]= new Array(5);
}



for (let i=0;i<5;i++){
for (let j=0; j<5;j++){
    m[i][j]=Math.floor(Math.random()*(9-1)+1);
}



}













/*
let v=[1,2,2,3412,12,2,34,2,1];
let aux;


for (let i=0; i<v.length;i++){
for(let j=0; j<v.length; i++){


if(v[i]<v[j]){
aux=v[i];
v[i]=v[j];
v[j]=aux;

}


}


}*/
console.log(m)