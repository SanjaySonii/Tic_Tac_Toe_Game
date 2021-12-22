// this is tic tac toe game code
const item1 = ['0', '4', '8'];
const item2 = ['0', '3', '6'];
const item3 = ['0', '1', '2'];
const item4 = ['1', '4', '7'];
const item5 = ['2', '4', '6'];
const item6 = ['2', '5', '8'];
const item7 = ['3', '4', '5'];
const item8 = ['6', '7', '8'];
const win = [item1, item2, item3, item4, item5, item6, item7, item8];
const O = [];
const X = [];

let refresh = document.getElementById(`refresh`);
refresh.addEventListener(`click`, (e) => {
    window.location.reload();
})

var Turn = document.getElementById(`Turn`);
var choice = document.getElementById(`choice`);
var myChoice = document.getElementsByClassName(`myChoice`);
var choosed = document.getElementById(`choosed`);
var meriChoice;
for (const radio of myChoice) {
    radio.addEventListener('click', (e) => {
        if (radio.value == 'circle') {
            choosed.innerText = "Player 1 : Circle , Player 2 : Cross";
            meriChoice = "Circle";
            C = 'Circle';
            Turn.innerText = "Circle's Turn";
        }
        else {
            choosed.innerText = "Player 1 : Cross , Player 2 : Circle";
            meriChoice = "Cross";
            C = 'Cross';
            Turn.innerText = "Cross's Turn";
        }
        displayNone();
    })
}
function displayNone() {
    choice.classList.add(`display`);
}

let btn = document.getElementsByClassName(`btn`);
// console.log(btn);

var onOf = "On";

for (const bttn of btn) {
    bttn.addEventListener(`click`, (e) => {
        e.preventDefault();
        if (bttn.innerHTML == '' && onOf == 'On') {
            index = bttn.id;
            if (C == 'Circle') {
                O.push(index);
                console.log(O);
                bttn.innerHTML = `<img class="O" src="O1.jpg">`;
                C = 'Cross';
                compare();
                Turn.innerText = "Cross's Turn";
            }
            else if (C == 'Cross') {
                bttn.innerHTML = `<img class="O" src="X.jpg">`;
                X.push(index);
                console.log(X);
                C = 'Circle';
                compare();
                Turn.innerText = "Circle's Turn";
            }
            else {
                alert("Please choose an option");
            }

        }
        else {
            alert("not possibled");
        }
    })
}

function compare() {
    for (const item of win) {
        if (O.length >= 3) {
            let count = 0;
            for (let i = 0; i < 3; i++) {
                if (O.includes(item[i])) {
                    count++;
                    if (count == 3) {
                        console.log('O wins');
                        choosed.innerText = "Congratulations Circle You Won";
                        choosed.classList.add(`animation1`);
                        Turn.classList.add("display");
                        onOf = "Of";
                    }
                }
            }
        }
         if (X.length >= 3) {
            let count = 0;
            for (let i = 0; i < 3; i++) {
                if (X.includes(item[i])) {
                    count++;
                    if (count == 3) {
                        console.log('X wins');
                        choosed.innerText = "Congratulations Cross You Won";
                        choosed.classList.add(`animation1`);
                        Turn.classList.add("display");
                        onOf = "Of";
                    }
                }
            }
        }
        if((X.length == 4 && O.length == 5 || O.length == 4 && X.length == 5) && onOf == "On"){
            console.log("nobody won");
            choosed.innerText = "Oops! nobody Won , Click on the refresh button to play again";
            Turn.classList.add("display");
        }
    }

}

