function displayInformation() {
     // var library is defined, use it to print the information
    for (var i =0; i<library.length;i++){
    if(library[i]['readingStatus']== true){
        var str = "Already read '"+ library[i]['title']+"' by "+library[i]['author']+"."
        console.log(str)
    } else{
       var str = "You still need to read '"+library[i].title+"' by "+library[i].author+"."
        console.log(str) 
    }
    }
} 

// tail starts here
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();