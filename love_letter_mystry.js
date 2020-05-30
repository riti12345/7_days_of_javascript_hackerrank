function processData(input) {
    //Enter your code here
    var input_array = input.split("\n")
    var t = input_array[0]
    for(let i=1; i<t; i++){
        console.log(input_array[i])
        var validate = palindrom(input_array[i]);
        if(validate){
            console.log("0")
        }else{
            decrement(input_array[i])
        }
    }
} 

function palindrom(input){
    var len = input.length;
    var result;
    for(let i=0;i<len/2;i++){
        if(input[i]===input[len-i-1]){
            return true;
        }
    }
}

function decrement(input){
    var count=0;
    var len = input.length;
    for(let i=0;i<len/2;i++){
        do{
            var dec_letter;
            if(input[i]>input[len-i-1]){
                dec_letter = String.fromCharCode(input[i].charCodeAt(0) -1);
            }else{
                dec_letter = String.fromCharCode(input[len-i-1].charCodeAt(0) -1);
            }
            count ++;
          }
          while (input[i] == dec_letter);
    }
    console.log(count)
}