//Texts and buttons
const textResult = document.getElementById("rez");
const resultPlayer = document.getElementById("resultPlayer");
const resultBot = document.getElementById("resultBot");
const displayPlayer = document.getElementById("playerDisplay");

const start = document.getElementById("start");


//Items
const papir = document.getElementById("papir");
const makaze = document.getElementById("makaze");
const kamen = document.getElementById("kamen");

//conter
let counterPlayer = 0;
let counterBot = 0;
let countClick = 0;
let oneClick = false;
let finished = false;


//chooses
let playerChose = '';
let botChose = '';
let startClick = false;




//ClickOne Time Start
function clickOne() {
    if (startClick === false) {
        countTimer();
    }
    startClick = true;

}
//REsetart all
function resetAll () {
    playerChose = '';
    botChose = '';
    textResult.innerHTML = '0 : 0';
    resultPlayer.innerHTML = 'You';
    resultBot.innerHTML = 'Robot';
    counterBot = 0;
    counterPlayer = 0;
    countClick = 0;
    finished = false;
    timeleft = 50;
    startClick =false;

    console.log(startClick);
    

}


//Start the Game
start.onclick = () => {
    clickOne();
    resetAll();
    startClick = true;
    displayPlayer.innerHTML = "Game has started";
}



//Bot
const bot = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 1) {
        botChose = 'papir';
    } else if (randomNumber === 2) {
        botChose = 'makaze';
    } else {
        botChose = 'kamen';
    }
    console.log(botChose);
}


//Papir Izbor
papir.onclick = () => {
    if (startClick === true) {
        playerChose = 'papir';
        bot();
        game();
    }
    else {
        alert("Click Start button to start");
    }
}
//Kamen izbor
kamen.onclick = () => {
    if (startClick === true) {
        playerChose  = 'kamen';
        bot();
        game();
    }
    else {
        alert("Click Start button to start");
    }
    
}
//Makaze izbor
makaze.onclick = () => {
    if (startClick === true) {
        playerChose  = 'makaze';
        bot();
        game();
    }
    else {
        alert("Click Start button to start");
    }
}




//Player

const game = () => {
    //prikazuje na ekranu sta je ko izabrao
    resultPlayer.innerHTML = playerChose
    resultBot.innerHTML = botChose;

    //pravila u igri
    if (playerChose === 'papir') {
        if (botChose === 'kamen') {
            winnerGame('You'); //Broji  pobede igraca
        } else if (botChose === 'makaze') {
            loseGame('Bot'); //Broji pobede bota(nije bot izgubio)
        } else {
            drawGame();
        }
    }

    if (playerChose === 'makaze') {
        if (botChose === 'papir') {
            winnerGame('You');
        } else if (botChose === 'kamen') {
            loseGame('Bot');
        } else {
            drawGame();
        }
    }


    if (playerChose === 'kamen') {
        if (botChose === 'makaze') {
            winnerGame('You');

        } else if (botChose === 'papir') {
            loseGame('Bot');
        } else {
            drawGame();
        }
    }
}



const winnerGame = (winner) => {
    if (finished === false) {
        console.log('You wins');
        counterPlayer++;
        textResult.innerHTML = `${counterPlayer} : ${counterBot}`;
        displayPlayer.innerHTML = "Win!!!";
    }

}
const loseGame = () => {
    if (finished === false) {
        console.log('You lose');
        counterBot++;
        textResult.innerHTML = `${counterPlayer} : ${counterBot}`;
        displayPlayer.innerHTML = "Lose :(";
    }

}
const drawGame = () => {
    if (finished === false) {
        console.log('Draw!');
        displayPlayer.innerHTML = "Draw";
     
    }


}


