const valorCusto = 20;
const valorVenda = 45;
const valorCustoTotal = valorCusto * 1.2;
const lucro = (valorVenda - valorCustoTotal) * 1000;

if (valorCusto < 0 || valorVenda < 0){
    console.log("Erro");
} else {
    console.log(lucro)
}
