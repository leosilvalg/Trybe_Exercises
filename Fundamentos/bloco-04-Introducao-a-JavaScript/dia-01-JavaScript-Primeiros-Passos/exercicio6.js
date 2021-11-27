const peça = "Rei";

switch (peça.toLowerCase()){
    case "rainha":
        console.log("Rainha -> Diagonal, Vertical e Horizontal");
        break;
    case "rei":
        console.log("Rei -> Uma casa em qualquer direção");
        break;
    case "cavalo":
        console.log("Cavalo -> Movimento em L");
        break;
    case "bispo":
        console.log("Bispo-> Diagonais");
        break;
    case "peão":
        console.log("Peão -> Uma casa na vertical");
        break    
    case "torre":
        console.log("Torre -> Vertical e Horizontal");
        break;
    default:
        console.log("Peça invalida !");
}