let maior = 0;

for (let i = 0; i <= 50 ; i++) {
    let primo = true;
    if (i % i !== 0 || i % 1 !== 0) {
        primo = false;
    } else {
        maior = i;
    }
 
}

console.log(maior);