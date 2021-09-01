function nan_test(){
    document.getElementById("Test").innerHTML = 0/0;  // tests and display if NAN
}
function nan_test2(){
    document.getElementById("Test").innerHTML = isNaN('This is a string'); // to test and display if the string is a NAN
}
function nan_test3(){
    document.getElementById("Test").innerHTML= isNaN('20'); // test to display if string is a nan
}
function bool_test(){
    var boolt = 3 > 5;  // result will be false, bool test
    document.getElementById("Test").innerHTML= boolt;
}
function bool_test2(){
    var boolt = 3 > 1;  // result will be true, bool test
    document.getElementById("Test").innerHTML = boolt;
}

console.log(100 + 2); // simple math that will display on the console
console.log(5 > 10); // bool to display on console

function bool_eq(){
    var boolt = (100==2);  // result will be false, equal bool test
    document.getElementById("Test").innerHTML = boolt;
}
function bool_eq2(){
    var boolt = (100==100);  // result will be true, equal bool test
    document.getElementById("Test").innerHTML = boolt;
}

function eq_test(){
    var boolt = (100===100); // will test if both type & value are equal and display
    document.getElementById("Test").innerHTML = boolt;
}
function eq_test2(){
    var boolt = ('this'===10); // will test if both type & value are equal and display
    document.getElementById("Test").innerHTML = boolt;
}
function eq_test3(){
    var boolt = ('10'===10); // will test if both type & value are equal and display
    document.getElementById("Test").innerHTML = boolt;
}
function eq_test4(){
    var boolt = (20 === 10); // will test if both type & value are equal and display
    document.getElementById("Test").innerHTML = boolt;
}

function and_test(){
    var andt =(20>5 && 10 > 1);  // test if both statements are true and will display true or false
    document.getElementById("Test").innerHTML = andt;
}
function and_test2(){
    var andt = (10<5 && 10>1);  // test if both statements are true and will display true or false
    document.getElementById("Test").innerHTML= andt;
}
function or_test(){
    var ort = (10 > 5 || 10 > 1); // test if either statement are true and will display true or false
    document.getElementById("Test").innerHTML = ort;
}
function or_test2(){
    var ort = (5 > 10 || 1 > 10);  // test if either statement are true and will display true or false
    document.getElementById("Test").innerHTML = ort;
}

