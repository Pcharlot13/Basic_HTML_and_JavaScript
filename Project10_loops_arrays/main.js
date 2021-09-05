//while loop
function count_To_Ten(){        // function set to count to 10 by counting each number while 11 is less than x(1)
    var Digit = "";
    var x = 1;
    while(x < 11){
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// For Loop

var Instruments =["Guitar", "Drums", "Piano", "Bass","Violin","Trumpet","Flute"]    //created an array
var Content = "";       //empty variable to hold string results
var Y;                  // empty variable for loop
function for_Loop(){    //Loop uses .length, to get each letter and display each string in arry and then line break
    for(Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content; //display strings
}

//Let use
var x = 100;
document.write(x);{
    let x = 44;     // let allows you to change a varialbe, generally applied within a specific scope
    document.write("<br>"+x)
}
