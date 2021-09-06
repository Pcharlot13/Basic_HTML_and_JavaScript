// CREATING A JAVASCRIPT PROGRAM
function countdown(){
    var seconds = document.getElementById("seconds").value;

    function tick(){
        seconds = seconds - 1;  //makes it so that seconds is constatly getting subtracted by one (counting down)
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if(seconds == -1){      //displays when time is done (when seconds reaches -1)
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML ="";
        }
    }
    tick();
}

//SLIDESHOW
var slideIndex = 1;

// NEXT/PREVIOUS CONTROLS
function plusSlides(n){
    showSlides(slideIndex += n)         // n keeps track of which slide
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {      //A function that mainly uses n to determine when a slide is changed and then use an if & for statement to change slides
    var i;          //this needs to be defined so we can use it in a for loop
    var slides = document.getElementsByClassName("mySlides"); //links to html file (basically)
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} // based on how n changes the slides changes
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {       // these two for loops determine how long the little white effect stays on and then to show the image
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}