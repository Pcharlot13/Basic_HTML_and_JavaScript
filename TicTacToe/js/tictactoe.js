// This variable keeps track of whose turn it is/
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions
let selectedSquares = [];

//This function is for placing an x or o in a square
function placeXOrO(squareNumber){
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of selecctedSquare array
    // to see if it contains the square number clicked on.
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        //This variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is
        if(activePlayer == 'X'){
            //If activePlayer is equal to 'X', the x.png is placed in html
            select.style.backgroundImage = 'url(./images/x.png)';
            //Active player may only be 'X' or '0' so, if not 'X' it must be 'O'
        } else{
            //if activePlayer is equal to 'O', the o.png is placed in html
            select.style.backgroundImage='url(./images/o.png)';
        }
        //squareNumber and activePlayer are concatenated togather and added to array.
        selectedSquares.push(squareNumber+activePlayer);
        //This callss a function to check for any win condition
        checkWinConditions();
        //This condition is for change the active plaer.
        if(activePlayer == 'X'){
            //if active player is 'X' change it to 'O'
            activePlayer = 'O';
        }else{
            activePlayer = 'X';
        }

        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it is computers turn.
        if(activePlayer == 'O'){
            //This function disables clicking for computesr choice.
            disableClick();
            // This function waits 1 second before computer places image and enables click
            setTimeout(function () {computersTurn();}, 1000)
        }
        //returning true is needed for our computersTurn() function to work
        return true;
    }

    //This function results in a random square being selected.
    function computersTurn(){
        //This boolean is needed for our while loop
        let success = false;
        //This variable stores a random number 0-8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already
        while(!success){
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number ecaluated returns true, the square hasn't been selected yet
            if(placeXOrO(pickASquare)){
                //This line calls he function
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions
//drawWinLine function is called to draw line if condition is met
function checkWinConditions(){
    //X 0,1, 2 conditons
    if      (arrayIncludes('0X','1X','2X')){ drawWinLine (50, 100,558, 100) }
    //X 3,4, 5 condition
    else if(arrayIncludes('3X', '4X', '5X')){drawWinLine(50, 304, 558, 304)}
    // X 6, 7, 8 condition. 
    else if (arrayIncludes ('6X', '7', '8X')) { drawWinLine (50, 508, 558, 508) }
    // X0, 3, 6 condition. 
    else if (arrayIncludes ('ox', '3', '6X')) { drawWinLine (100, 50, 100, 558) }
    // XI, 4, 7 condition. 
    else if (arrayIncludes ('iX', '4X', '7X')) { drawWinLine (304, 50, 304, 558) }
    // X 2, 5, 8 condition. 
    else if (arrayIncludes('2x', '5X', 'X')) { drawWinLine (508, 50, 508, 558) }
    // X 6, 4, 2 condition. 
    else if (arrayIncludes('6X', '4X', '2X')){drawWinLine (100, 508, 510, 90)}
    // X 0, 4, 8 condition. 
    else if (arrayIncludes ('ox', '4X', 'X')) { drawWinLine (100, 100, 520, 520) }
    // O 0, 1, 2 condition. 
    else if (arrayIncludes('00', '10', '20')) { drawWinLine (50, 100, 558, 100)}
    // O 3, 4, 5 condition. 
    else if (arrayIncludes ('30', '40', '50')) { drawWinLine (50, 304, 558, 304)}
    // 06, 7, 8 condition. 
    else if (arrayIncludes ('60', '70', '80')) { drawWinLine (50, 508, 558, 508) }
    // 00, 3, 6 condition. 
    else if (arrayIncludes ('00', '30', '60')) { drawWinLine (100, 50, 100, 558) } 
    // 0i, 4, 7 condition.
    else if (arrayIncludes ('10', '40', '70')) { drawWinLine (304, 50, 304, 558) }
    // O 2, 5, 8 condition. 
    else if (arrayIncludes ('20', '50', '80')) { drawWinLine (508, 50, 508, 558) }
    // 06, 4, 2 condition. 
    else if (arrayIncludes ('60', '40', '20')) { drawWinLine (100, 508, 510, 90) }
    //00, 4, 8 condition. 
    else if (arrayIncludes ('00', '40', '80')) { drawWinLine (100, 100, 520, 520) }
    // This condition checks for tie. If none of the above conditions register and 9
     // squares are selected the code executes. 
     else if (selectedSquares.length >= 9) {
         //This function playes the tie game sound. 
         audio ('./media/tie.mp3'); 
         // This function sets a .3 second timer before the resetGame is called. 
         setTimeout(function () { resetGame(); }, 1000);
     }

    // This function checks if an array includes 3 strings. It is used to check for 
    //each win condition. 
    function arrayIncludes (squareA, squareB, squarec) {
        // These 3 variables will be used to check for 3 in a row. 
        const a = selectedSquares.includes (squareA) 
        const b = selectedSquares.includes (squareB) 
        const c = selectedSquares.includes (squarec)
        // If the 3 variables we pass are all included in our array true is 
        //returned and our else if condition executes the drawWinLine function. 
        if (a === true && b === true && c === true) { return true }
    }
}

// This functionmakes our body element temporarily unclickable.
function disableClick(){
    //This makes our body unclickable
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 seconds
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL){
    //we create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //Play method plays our audio sound
    audio.play();
}

//This function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    //This line accesses our html canvas element
    const canvas = document.getElementById('win-lines')
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates were the start of a lines x axis is
    let x1 = coordX1,
        //this line indicates where the start of a lines y axis is
        y1 = coordY1,
        //this line indicates where the end of lines x axis is
        x2 = coordX2;
        //this line indicates where the end of a lines x axis is
        y2 = coordY2;
        //THis varaable stores tempoary x axisdate we update in our animation loop
        x = x1,
        //This variable stores tempoary y axis data we update in our animation loop
        y = y1;
    
    //This function interacts with the canvas
    function animateLineDrawing(){
        //This variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from last loop iteration
        c.clearRect(0, 0, 608, 608)
        //This metod starts a new path
        c.beginPath();
        //Thismethod moves usto a starting point for our line
        c.moveTo(x1, y1)
        //This method indicates the end point in our line
        c.lineTo(x,y)
        //This method sets the width of our line
        c.lineWidth = 10;
        //This method sets the color of our line
        c.strokeStyle = 'rgba(70,255,33,.8)';
        //This method draws everything we laid out above
        c.stroke();
        //this contain check if we've reached the endpoint
        if(x1 <= x2 && y1 <= y2){
            //This condition adds 10 to the previous end x point
            if(x< x2){x+= 10;}
            //This condition adds 10 to the pervious end y point
            if(y<y2){y+=10;}
            //this condition cancels out animation loop
            //if we've reach the end points
            if(x>=x2 && y>=y2){cancelAnimationFrame(animationLoop);}
        }
        //This conditin is similar to the one above.
        //This is necessary for the 6,4,2 win condition
        if(x1 <=x2 && y1>=y2){
            if(x<x2){x+=10;}
            if(y>y2){y-=10;}
            if(x>=x2 && y<= y2){cancelAnimationFrame(animationLoop);}
        }
    }

    //This function clears our canvas after our win line is drawn
    function clear(){
        //This line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //This line clear our canvas
        c.clearRect(0, 0, 608, 608);
        //This line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //This line disallows clicking while teh win sound is playing
    disableClick();
    //This line plays the win sounds
    audio('./media/winGame.mp3');
    //This line calls our main animation loop
    animateLineDrawing();
    //This line waits 1 second. Then, clears canvas, resets game, and allows clicking again.
    setTimeout(function(){clear(); resetGame();}, 1000);
    
}
//This function resets thegame in the event of a tie or a win
function resetGame(){
    //This for loop iterates through each html square element
    for( let i =0; i<9; i++){
        //This variable gets the html element of i
        let square = document.getElementById(String(i))
        //This removes our elements backgrouundImage
        square.style.backgroundImage= ''
    }
    //Thisresets our arrayso it is empty and we can start over.
    selectedSquares = [];
}

