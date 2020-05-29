

function processData(myArray) {
    max = myArray[0]
    prev = 0 
    for(var i=0;i<=myArray.length;i++)
    {
        if(myArray[i]>max)
        {
            prev = max
            max = myArray[i]
        } else if (myArray[i] < max && myArray[i] > prev) {
            prev = myArray[i]
        }
            
    }
 
    console.log(prev)
    return prev
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});