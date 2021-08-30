function myMaths() {    // addition
    var addin = 4+4;
    document.getElementById("Math").innerHTML = "4 + 4 = "+addin;
}

function mySubt(){   // subtraction
    var subt = 10-3;
    document.getElementById("Math").innerHTML= "10 - 3 = "+subt;
}

function multiplication(){   // multiplication
    var smpleX = 6*2;
    document.getElementById("Math").innerHTML = "6 x 2 = "+smpleX;
}

function division(){    // division
    var divs = 10/5;
    document.getElementById("Math").innerHTML="10/5 = "+divs;
}

function extraMaths(){    // multiple operations
    var mathsX = (1+2) * 10/2-5;
    document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals "+mathsX;
}
function modulus_Operator(){  //remainder of a dividend
    var smpleM = 25 % 6;
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of "+smpleM;
}
function unaryOp(){
    var x = 20;
    document.getElementById("Math").innerHTML= -x;
}
function plusx(){
    var x = 10;
    x++;
    document.getElementById("Math").innerHTML= x;
}
function minusx(){
    var x = 10;
    x--;
    document.getElementById("Math").innerHTML= x;
}
function ranNum(){
    var x = window.alert(Math.random()* 25);
    document.getElementById("Math").innerHTML= x;
}