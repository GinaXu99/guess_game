//generate number from 1-20
//Math.trunc(Math.random() * 20) + 1;
let secretNumber = Math.floor(1 + Math.random() * 20);
console.log('secret number is ' + secretNumber);
let score = 20;
let highscore = 0;


function display(message) {
    document.querySelector('.message').textContent = message; 
}

/** Check number part */
document.querySelector('.check')
    .addEventListener('click', function () {
        //convert string to number
        const guess = Number(document.querySelector('.guess').value);
       // console.log(guess);
       // console.log(typeof guess); //number

        /**
         * 
         * check logic
         * 1. if value is prsent
         * 2. check if guess is too high
         * 3. check if guess is too low
         * 4. check if guess is correct
         * 
         */

        if (!guess) {    //guess = 0 is falsy value so use negation to conver true

            display('🙁 no number found');

        } else if (guess === secretNumber) {

            display('🏆 You guessed it!');
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('.number').style.width = "30rem";
            document.querySelector('body').style.backgroundColor = "#60b347";

            //high score logic
            highscore = score > highscore ? score : highscore;
            document.querySelector('.highscore').textContent = highscore;
            console.log('high score is ' + highscore);
            

        } else if (guess != secretNumber) {
            if (score > 1) {
              
                guess > secretNumber ? display('😶‍🌫️ Number is too high') : display('😶‍🌫️ Number is too low');

                score--;
                document.querySelector('.score').textContent = score;
            } else {

                display('Game is over, you lost the game 😐');
                document.querySelector('.score').textContent = 0;
            }
        }


        // else if (guess > secretNumber) {

        //     if (score > 1) {
        //         console.log(document.querySelector('.message').textContent = '😶‍🌫️ Number is too high');
        //         score--;
        //         document.querySelector('.score').textContent = score;


        //     } else {
        //         console.log(document.querySelector('.message').textContent = 'Game is over, you lost the game 😐');
        //         document.querySelector('.score').textContent = 0;
        //     }
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         console.log(document.querySelector('.message').textContent = '😶‍🌫️ Number is too low');
        //         score--;
        //         document.querySelector('.score').textContent = score;

        //     } else {
        //         console.log(document.querySelector('.message').textContent = 'Game is over, you lost the game 😐');
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }

    });


/**
 * Reset code  
 * 
 */
document.querySelector('.again')
    .addEventListener('click', function () {
        secretNumber = Math.floor(1 + Math.random() * 20);
        score = 20;
        console.log('secret number is ' + secretNumber);

        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;

        display('Start guessing...');
       // document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.guess').value = ''; //input is always string!

        document.querySelector('.number').style.width = "15rem";
        document.querySelector('body').style.backgroundColor = "#222";
        document.querySelector('.highscore').textContent = highscore;
    });
