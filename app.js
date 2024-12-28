const scoreSel0 = document.querySelector('#score-0');
const scoreSel1 = document.querySelector('#score-1');
const dispDice = document.querySelector('.dice');
const btn1 = document.querySelector('.btn-new');
const btn2 = document.querySelector('.btn-roll');
const btn3 = document.querySelector('.btn-hold');
const cur1sc = document.getElementById('current-0');
const cur2sc = document.getElementById('current-1');
const p1 = document.querySelector('.player-0-panel');
const p2 = document.querySelector('.player-1-panel');
let scores = [0, 0];
let currSc = 0;
let activePlayer = 0;
let playing = true;


const init = function () {
    playing = true;
    scores = [0, 0];
    currSc = 0;
    activePlayer = 0;


    cur1sc.textContent = '0';
    cur2sc.textContent = '0';
    scoreSel1.textContent = '0';
    scoreSel0.textContent = '0';


    dispDice.classList.add('hide');
    p1.classList.remove('winner')
    p2.classList.remove('winner')
    p1.classList.add('active')
    p2.classList.remove('active')

    document.querySelector(".instructions").addEventListener("click", function () {
        document.querySelector(".modal").classList.add("show");
        document.querySelector(".close").addEventListener("click", function () {
            document.querySelector(".modal").classList.remove("show");
        });


    });
}
init()



function switchPlayer() {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currSc = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    p1.classList.toggle('active');
    p2.classList.toggle('active');

}

scoreSel0.textContent = '0';
scoreSel1.textContent = '0';

dispDice.classList.add('hide');

document.querySelector('.player-current-score').textContent = '0';




//adds die on pressing roll 
btn2.addEventListener('click', function () {
    if (playing) {
        //generating random dice
        const dice = Math.trunc(Math.random() * 6) + 1;

        //display dice
        dispDice.classList.remove('hide');
        dispDice.src = `dice-${dice}.png`;

        //check
        if (dice !== 1) {
            currSc += dice;
            document.getElementById(`current-${activePlayer}`).textContent = currSc

        } else {
            //switch
            switchPlayer();
        }
    }



})



btn3.addEventListener('click', function () {
    if (playing) {
        //add curr score to active players  score
        scores[activePlayer] += currSc;
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer]

        //check if >=100
        if (scores[activePlayer] >= 100) {
            //finish
            playing = false;
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner')
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')

        } else {

            //switch
            switchPlayer();
        }
    }
})


btn1.addEventListener('click', init)

