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
}
// MY IF STATEMENT
function my_if(){
    var pickNumber = document.getElementById("Pick").value;
    if(pickNumber <= 7){
        document.getElementById("Cool").innerHTML = "You have chosen a cool number!"
    }
    else if(pickNumber > 7){
        document.getElementById("Cool").innerHTML = pickNumber + " is not a cool number, sorry."
    }
}
