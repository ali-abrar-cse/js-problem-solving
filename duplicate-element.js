let numbers = [12, 13, 14, 9, 5, 3, 6, 14, 11, 9, 7, 5, 2, 14];

let uniqueNumbers = [];

for(let number of numbers){
    if(uniqueNumbers.indexOf(number) == -1){
        uniqueNumbers.push(number);
    }
}

console.log(uniqueNumbers);
