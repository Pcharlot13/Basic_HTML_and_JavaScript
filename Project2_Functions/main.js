function myFunc(){    // this initalizes a function that I can use in my html document
    var sentence = "I am learning"; // this is a string variable within my function
    sentence+=" a lot from this book!"; // this adds to the 'sentence' var
    document.getElementById("Concatenate").innerHTML= sentence; // this modifies what's in the html element
}