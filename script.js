const game = ()=>{
    let  pScore = 0;
    let cScore = 0;
    //Start the game
    const startGame = () =>{
        const playButton =document.querySelector('.intro button');
        const introScreen =document.querySelector('.intro');
        const  match = document.querySelector('.match');
        

        playButton.addEventListener('click',() =>{
            introScreen.classList.add("fadeOut");
            match.classList.add('fadeIn')
        });
    };
    //Play Match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
       
       
        hands.forEach(hand =>{
            hand.addEventListener('animationend',function (){
                this.style.animation = '';
            });
        });

        //Computer Options
        const computerOptions = ['rock', 'paper','scissor'];
        options.forEach(option=>{
            option.addEventListener('click', function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
               setTimeout(()=>{    
                   
                //Call Compare Hands
                compareHands(this.textContent, computerChoice);
                //Update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;},2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });

        });
    };
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent =cScore;

    };
    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if(playerChoice === computerChoice){
           winner.textContent = "It is a tie";
           return;
        }
        if (playerChoice === 'rock'){
            if(computerChoice === 'scissor'){
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === 'scissor'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

    };




    //Call the local function inside the global function
    startGame();
    playMatch();
    
};
//Call the global function
game();