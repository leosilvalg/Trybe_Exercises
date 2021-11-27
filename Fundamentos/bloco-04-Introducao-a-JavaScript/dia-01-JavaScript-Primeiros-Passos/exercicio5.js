const a1 = 60;
const a2 = -60;
const a3 = 80;

const angulos = a1 + a2 +a3;
const angulosPositivos = a1 > 0 && a2 > 0 && a3 > 0;

if(angulosPositivos){
  if(angulos === 180){
    console.log("true");
    } else {
    console.log("false");
   };
}   else {
    console.log ("Erro");
}