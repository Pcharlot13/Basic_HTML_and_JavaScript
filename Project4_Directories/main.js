function my_dictionary(){  // Initialized a function with different values for the given variable (dog), 
    var animal={
        species:"dog",
        color:"black",
        breed:"labrador",
        Age:5,
        Sound:"bark!",
    };
    delete Animal.Sound; // delete the sound value of the dog
    document.getElementById("Dictionary").innerHTML = animal.sound; //displays the sound value 
}