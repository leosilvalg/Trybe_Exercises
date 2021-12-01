let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggest = array[0];


for(let i = 1; i < array.length; i += 1){
    if (array[i].length > biggest.length) {
        biggest = array[i];
    }
}

console.log(biggest);