const porcentagem = 30;

if(porcentagem >= 90 && porcentagem <= 100){
    console.log("Conceito A");
} else if (porcentagem >= 80 && porcentagem < 90){
    console.log("Conceito B");
} else if (porcentagem >= 70 && porcentagem < 80){
    console.log("Conceito C");
} else if(porcentagem >= 60 && porcentagem < 70){
    console.log("Conceito D");
} else if(porcentagem >= 50 && porcentagem <= 60){
    console.log("Conceito E");
} else if(porcentagem < 50 && porcentagem >= 0){
    console.log("Conceito F")
} else{
    console.log("Erro")
}

