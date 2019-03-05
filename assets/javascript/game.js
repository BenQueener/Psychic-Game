
     // Initialize the things we need to track
     var wins = 0;
     var losses = 0;
     var guessesLeft = 10;
     var guessesSofar =[];
     var results = 0 ;
     //The computer randomly chooses a letter from the alphabet
     var letters = "abcdefghijklmnopqrstuvwxyz";
     var computerChoice = letters[Math.floor(Math.random() * 26)];
    
    //execute when an even is keyed
     document.onkeyup = function(event) {
 
         // Determines which key was pressed. 
         var userGuess = event.key;
 
         //Alerts the user to a change in wins, losses, guesses left and the letters guessed so far
         var winsElement = document.getElementById("wins");
         var lossesElement = document.getElementById("losses");
         var guessesLeftElement = document.getElementById("guessesLeft");
         var guessesSofarElement = document.getElementById("guessesSofar");
         var computerGuessElement = document.getElementById("computerGuess");
             computerGuessElement.textContent = computerChoice;
             winsElement.textContent = wins;
             lossesElement.textContent = losses;
             guessesLeftElement.textContent = guessesLeft;
             guessesSofarElement.textContent = guessesSofar;
 
         //This will set up the variable that will update the page with the results of the ongoing games
         var gameResultsElement = document.getElementById("gameResults");
        // gameResultsElement.textContent = results;
         
             // Check if the user inputted something valid
             if(letters.includes(userGuess) == true){
         
                 //if we choose a letter we've already guessed
                 if (guessesSofar.includes(userGuess) == true) {
                     gameResultsElement.textContent = "You have chosen a letter you have already guessed!";
                 }
 
                 //if we choose a new letter that is right
                 else if (userGuess === computerChoice) {
                     //update the user
                     gameResultsElement.textContent = "You have chosen the right letter!";
                     //set a new computer guess
                     computerChoice = letters[Math.floor(Math.random() * 26)];
                     //guesses left gets reset
                     guessesLeft = 10;
                     // reset the list of letters guessed
                     guessesSofar = [];
                     //and one to the wins
                     wins = wins +1;
                     
                 }
 
                 //if we choose a new letter that is wrong
                 else {
                     //If we chose the wrong letter and there are no more guesses left...
                     if (guessesLeft-1 == 0){ 
                         //update the user
                         gameResultsElement.textContent = "You chose the wrong letter. No more guesses. Try again on a new game."; 
                         //add one to the losses 
                         losses = losses+1;                        
                         //reset the number of guesses
                         guessesLeft = 10;
                         //reset the list of letters guessed
                         guessesSofar = [];
                         //set a new computer guess
                         computerChoice = letters[Math.floor(Math.random() * 26)];
                     }
                     //If we chose the wrong letter and we still have some guesses left...
                     else{
                     //update the user
                     gameResultsElement.textContent = "You chose the wrong letter.  Try Again";
                     //guesses left goes down by 1
                     guessesLeft = guessesLeft - 1;
                     // add the letter to the list of letters already guessed
                     guessesSofar.push(userGuess);
                     // then sort the letters in alphabetical order because that looks nice.
                     guessesSofar = guessesSofar.sort();
                     }
                 }
 
             } 
             else {
                 gameResultsElement.textContent = "Please enter a lowercase letter";
             }
 
 
     }
