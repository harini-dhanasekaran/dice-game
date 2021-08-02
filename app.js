
    var scores,roundScore,activePlayer,gamePlaying;

    newGame();

    document.querySelector('.btn-roll').addEventListener('click',function(){
        if(gamePlaying){
            var dice;
            dice = Math.floor(Math.random() * 6) + 1;

            var diceSelected = document.querySelector('.dice');
            diceSelected.style.display = 'block';
            diceSelected.src = 'dice-' + dice + '.png';

            if (dice !== 1) {
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
            else {
                nextPlayer();

            }
        }

    });

    document.querySelector('.btn-hold').addEventListener('click',function(){
        if (gamePlaying){
            scores[activePlayer] += roundScore;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            if (scores[activePlayer] >= 50) {
                document.querySelector('#name-' + activePlayer).textContent = 'winner';
                gamePlaying = 0;

            }
            else {
                nextPlayer();
            }

        }

    });

    function nextPlayer(){

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active'); 
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    }
    function newGame(){
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying=1;

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score-1').textContent = '0';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.querySelector('#name-0').textContent = 'player 1';
        document.querySelector('#name-1').textContent = 'player 2';

        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');   //class list - collection of class attributes of a element 
    }

    document.querySelector('.btn-new').addEventListener('click',newGame);
