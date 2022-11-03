// declare choices array
const choices = ['rock', 'paper', 'scissors'];
console.log(choices);

// declare function for random computer choice
function getComputerChoice() {
    const randChoice = Math.floor(Math.random() * choices.length);
    return choices[randChoice];
}

// declare score variables
let playerScore= 0;
let computerScore= 0;

// declare the playRound function with multiple conditions for the game
function playRound(playerSelection, computerSelection) {
    // tie condition
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } // all other conditions
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return 'Paper beats Rock, You lose!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return 'Rock beats Scissors, You win!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return 'Scissors beats Paper, You lose!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return 'Paper beats Rock, You win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return 'Rock beats Scissors, You lose!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return 'Scissors beats Paper, You win!';
    } // consider typos
    else {
        return 'error, try again';
    }
}

// declare the game function for 5 rounds
function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, Scissors, GO!!!').toLowerCase();
        const computerSelection = getComputerChoice();
        // print road, both choices, winner or specific round, and overall score
        console.log(`Round ${i + 1}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(`You chose: ${playerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score: ${playerScore}, Computer's score: ${computerScore}`);
    }
}

// run game
game();