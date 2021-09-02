function Ride_Function(){
    var Height, Can_Ride;   // intialized 2 main variables
    Height = document.getElementById("Height").value;   // the input the user puts in
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";  //terenary statement that indicates if you're tall enough
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride"   // display results
}
function vote_function(){   // similar code composition as above ^
    var vote_Age, Can_Vote;
    vote_Age = document.getElementById("vote_Age").value;
    Can_Vote = (vote_Age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("Age").innerHTML = Can_Vote + " to vote."
}
function Vehical(Make, Model, Year, Color){ // created a obj constructor, with it's keywords
    this.Vehical_Make = Make;
    this.Vehical_Model = Model;
    this.Vehical_Year = Year;
    this.Vehical_Color = Color;
}
var Jack = new Vehical("Dodge", "Viper", 2020, "Red");  // created 3 different instances of the constuctor
var Emily =  new Vehical("Jeep", "Trail Hawk",2019, "White and Black");
var Erik = new Vehical("Ford","Pinto",1971,"Mustard");
function myFunction(){                          // displays one of the instances (Erik)
    document.getElementById("Keywords_and_Constrcutors").innerHTML= 
    "Erik drives a " + Erik.Vehical_Color + "-colored " + Erik.Vehical_Model + " manufactured in "
    + Erik.Vehical_Year;    
}
var Paul = new Vehical ("Jeep", "Wrangler", 2016, "Jet Black")  // created an instance of the Vehical constructor

function new_test(){
    document.getElementById("New_and_This").innerHTML =
    "Paul drives a " + Paul.Vehical_Color + "-colored " + Paul.Vehical_Model + " manufactured in "
    + Paul.Vehical_Year;            // display keywords to create a sentence to describe what (Paul) drives
}

function count_function(){      // initialized count_function
    document.getElementById("Counting").innerHTML = Count(); // display Count()
    function Count(){       // initialized Count() function
        var Starting_Point= 9;          // created starting point for count
        function Plus_one (){Starting_Point += 1;}      // intialized Plus_ one that adds 1 to starting point
        Plus_one();         //creates Plus_one
        return Starting_Point;      //Shows result of starting point
    }
}