// Scope

var x = 10;     // Example of a global variable which is accessible to all functions within it's scope
function Add_numbers_1(){
    document.write(20 + x +"<br>");
}
function Add_numbers_2(){
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_local(){
    var X= 10;          // this is an example of a local variable which is only accisble within the scope of the Add_error_1 funciton
    console.log(15+X);
}
function Add_error(){
    console.log(X+ 100);
}
Add_local();
Add_error();

// IF STATEMENTS
function get_Date(){
    if(new Date().getHours() < 18){     // returns a greeting if it's not 6pm yet
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
    if(new Date().getHours() > 18){     // returns a 'we are closed' statement if passed 6pm
        document.getElementById("Greeting").innerHTML="We are now closed, sorry.";
    }
    // MY IF STATEMENT
    if(new Date().getDate() < 15){      // uses the same function to let you know if you're on 1st or 2nd half of the week
        document.getElementById("Week").innerHTML="Welcome to the first part of the week"
    }
}

// ELSE STATEMENTS
function Age_Function(){
    Age = document.getElementById("Age").value;
    if(Age >= 18){
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
// MY ELSE STATEMENT
function my_if(){       //The user will choose a number and if it is below or = to 7 it will be cool, other wise it's not a cool number
    var pickNumber = document.getElementById("Pick").value;
    if(pickNumber <= 7){
        document.getElementById("Cool").innerHTML = "You have chosen a cool number!"
    }
    else if(pickNumber > 7){
        document.getElementById("Cool").innerHTML = pickNumber + " is not a cool number, sorry."
    }
}

//ELSE IF STATEMENTS
function Time_function(){      // this functions sets parameters for each portion for the day and tells you what day it is with Reply
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if(Time >= 12 == Time < 18){
        Reply = "It is afternoon";
    }
    else{
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}