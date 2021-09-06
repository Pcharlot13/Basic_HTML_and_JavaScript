// This variable keeps track of whose turn it is/
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions
let selectedSquares = [];

//This function is for placing an x or o in a square
function placeXOro(squareNumber){
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of selecctedSquare array
    // to see if it contains the square number clicked on.
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        //This variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is
        if(activePlayer == 'X'){
            //If activePlayer is equal to 'X', the x.png is placed in html
            select.style.backgroundImage = 'url(images/x.png)';
            //Active player may only be 'X' or '0' so, if not 'X' it must be 'O'
        } else{
            //if activePlayer is equal to 'O', the o.png is placed in html
            select.style.backgroundImage='url(image/o.png)';
        }
        //squareNumber and activePlayer are concatenated togather and added to array.
        selecctedSquare.push(squareNumber+activePlayer);
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
            //This function disables clicking for computer choice.
            disableClick();
            // This function waits 1 second before computer places image and enables click
            setTimeout(function(){computerTurn();}, 1000)
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
            if(placeXOro(pickASquare)){
                //This line calls he function
                placeXOro(pickASquare);
                //This changes our boolean and ends the loop
                success = true;
            };
        }
    }
}