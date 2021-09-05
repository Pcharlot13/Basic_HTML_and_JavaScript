// CONCAT() METHOD
function full_Sentence(){
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2,part_3,part_4);   //concatinates each part starting with part_1
    document.getElementById("Concatenate").innerHTML= whole_sentence;   //displays the whole sentence
}

//SLICE() METHOD
function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);   // selects which part we want to slice
    document.getElementById("Slice").innerHTML = Section; //displays the section
}
// MY SLICE
function slice2_Method(){
    var Sentence2 = "Cowards do that and that ain't you"
    var Section2 = Sentence2.slice(20,34);
    document.getElementById("Slice2").innerHTML = Section2;
}

// MORE METHODS CHALLENGE
function upper_function(){
    var words = 'this will be in all caps'.toUpperCase(); // capitalize all the words in this string
    document.getElementById("Upper").innerHTML = words;
}
function search_function(){
    var sentence = 'I will search with this tool'.search('search'); // will return 7, which is the position of (search)
    document.getElementById("find").innerHTML = sentence;
}

//NUMBER METHODS
function string_Method(){
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); // converts numbers to a string
}

//TOPERCISION() METHOD
function precision_Method(){
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//NEW METHODS CHALLENGE
function fixed_method(){
    var fixedNum = 1234.567;
    document.getElementById("fixed").innerHTML = fixedNum.toFixed(2); // rounds to the nearest 2nd decimal  hence the 'toFixed(2)'
}
function value_method(){
    var str = "My name is Paul";
    document.getElementById("value").innerHTML = str.valueOf(); // returns the primitive type of str and displays it in html
}

