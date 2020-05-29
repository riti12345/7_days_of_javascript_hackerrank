function processData(input) {
    //Enter your code here
    var rows = input.split('\n');
    var N = rows[0].split(' ').map(Number)[0];
    var K = rows[0].split(' ').map(Number)[1];
    var arr = rows[1].split(' ').map(Number);
    arr.sort(function(a, b){return a-b});
    var count=0;
    for(let i=0; i<N;i++){
        if(K>=arr[i]){
            count++;
            K = K-arr[i]; 
        }
    }
    console.log(count);
} 



process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
