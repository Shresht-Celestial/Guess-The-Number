

function guessTheNumber(){
    console.log("Let's play Guess The Number Game...");

    const userGuessPrompt = prompt("Guess a number bw 1 t0 10 and enter:-");
    let userGuess = Number(userGuessPrompt);
    if(userGuessPrompt < 1 || userGuessPrompt > 10){
        console.log("invalid input");
        return;
    }

   const randomNumber = Math.floor(Math.random() * 10) + 1;

   let count = 0;
   while(userGuess !== randomNumber){
    if(userGuess > randomNumber){
        console.log("Too high");
    }
    else if(userGuess < randomNumber){
        console.log("Too low");
    }userGuess = Number(prompt("Try Again:"));
    count++;
   }
   console.log(`You took ${count} attempts to guess!!!`);

}

guessTheNumber();