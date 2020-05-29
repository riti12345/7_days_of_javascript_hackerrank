//Write your code below this line.
'use strict'
for (let i of my_array){
    palindrom(i)
}

function palindrom(i){
    var result;

    for(let j=0; j<i.length/2;j++){
        if(i[j]===i[i.length - 1 - j]) {
             result = i;
        }
    } 
    if(result != undefined){
            console.log(result);

    }
}