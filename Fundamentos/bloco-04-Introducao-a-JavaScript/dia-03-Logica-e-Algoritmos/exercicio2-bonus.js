let n = 5;

let resul = "";

for (let linha = 0; linha < 5; linha += 1){
    for (let coluna = 0; coluna < 5; coluna += 1) {
        if (linha === coluna){
            resul += "*";
        }
          
    }
    console.log(resul);
    
}