function processData(input_array) {
    //Enter your code here
    //var input_array = input.split("\n")
    //var t = input_array[0]

    for(let i=0; i<5; i++){
        var validate = palindrom(input_array[i]);
        if(validate=== true){
            console.log("0")
        }else{
            decrement(input_array[i]);
        }
    }
} 


function palindrom(input){
    var len = input.length;
    var result;
    for(let i=0;i<len/2;i++){
        if(input[i]!=input[len-1-i]){
            return false;
        }
    }
    return true
}

function decrement(input){
    var len = input.length;
    var result;
    var total_count=0;
    if(len%2===0){
        let count =0;
        for(let i=0;i<len/2;i++){
            if(input[i]!= input[len-1-i]){
                result = recursive(input[i], input[len-1-i], count);
            }
            total_count+= parseInt(result);
        }
        console.log(total_count);
    }else{
        let count =0;
        for(let i=0;i<len/2 -1;i++){
            if(input[i]!= input[len-1-i]){
               result= recursive(input[i], input[len-1-i], count);
            }
             total_count+= parseInt(result)
        }
        console.log(total_count);
    }
}
function recursive(first, last, count){
    if(first <last){
        let dec_letter = String.fromCharCode(last.charCodeAt(0) -1);
        //console.log(last, "is decremented to ", dec_letter);
        count++;
        if(first != dec_letter){
         return recursive(first, dec_letter, count)
        }
    }else{
        let dec_letter = String.fromCharCode(first.charCodeAt(0) -1);
        //console.log(first, "is decremented to ", dec_letter);
         count++;
        if(last != dec_letter){
         return recursive(last, dec_letter, count)
        }
    }
    return count;
}
var input = ["abc","abcba","abcd","cba", "abefcd"]
processData(input);

/*
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
*/