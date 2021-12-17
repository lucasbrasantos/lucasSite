/*///////////////////////////////////////////////////
   ___                  _____           _       _   
  |_  |                /  ___|         (_)     | |  
    | | __ ___   ____ _\ `--.  ___ _ __ _ _ __ | |_ 
    | |/ _` \ \ / / _` |`--. \/ __| '__| | '_ \| __|
/\__/ / (_| |\ V / (_| /\__/ / (__| |  | | |_) | |_ 
\____/ \__,_| \_/ \__,_\____/ \___|_|  |_| .__/ \__|
                                         | |        
                                         |_|        

/*///////////////////////////////////////////////////

const cards = document.querySelectorAll('.card');
var hasFlipped = false;
var firstCard, secondCard;
var lockBoard = false;
var n = 0;
var i = 0;

var hour = 0;
var minute = 0;
var second = 0;
var millisecond = 0;
var cron;

function timer() {
 	if ((millisecond += 10) == 1000) {
    	millisecond = 0;
    	second++;
  	}
  	if (second == 60) {
    	second = 0;
    	minute++;
  	}
  	if (minute == 60) {
    	minute = 0;
    	hour++;
  	}
	document.getElementById('hour').innerText = returnData(hour);
	document.getElementById('minute').innerText = returnData(minute);
	document.getElementById('second').innerText = returnData(second);
	document.getElementById('millisecond').innerText = returnData(millisecond);

	document.getElementById('hour2').innerText = returnData(hour);
	document.getElementById('minute2').innerText = returnData(minute);
	document.getElementById('second2').innerText = returnData(second);
	document.getElementById('millisecond2').innerText = returnData(millisecond);
}

function returnData(input) {
	return input > 10 ? input : `0${input}`
}

function startTimer() {
	pause();
	cron = setInterval(() => { timer(); }, 10);
}

function pause(){
	clearInterval(cron)
}

function reset() {
	hour = 0;
	minute = 0;
	second = 0;
	millisecond = 0;
	document.getElementById('hour').innerText = '00';
	document.getElementById('minute').innerText = '00';
	document.getElementById('second').innerText = '00';
	document.getElementById('millisecond').innerText = '000';

	document.getElementById('hour2').innerText = '00';
	document.getElementById('minute2').innerText = '00';
	document.getElementById('second2').innerText = '00';
	document.getElementById('millisecond2').innerText = '000';
}


function flipCard(){
	if (lockBoard) return;
	if (this === firstCard) return;
	this.classList.add('flip');
	if(!hasFlipped){
		hasFlipped = true;
		firstCard = this;
		return;
	}

	secondCard = this;
	hasFlipped = false;
	checkCards();

}

function checkCards(){ // checa se as cartas estao corretas
	if(firstCard.dataset.card === secondCard.dataset.card){
		n++;
		//console.log(n);
		if (n === 6){ //checa se é gameover
			pause();
			setTimeout(() => {
				score();
				document.querySelector('.gameOver').style.display = 'flex'
			}, 1000)
		}
		disableClick();
		return;
	}

	unflip();
}

function disableClick(){ // desabilita o click quando as cartas tiverem corretas
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);

	resetBoard();
}

function unflip(){ // desvira as cartas quando nao estao corretas
	lockBoard = true;

	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');

		resetBoard();
	}, 600)
}

function resetBoard(){ // reseta as variaveis
	[hasFlipped, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}

function shuffle(){ // embaralha as cartas
	cards.forEach((card) => {
		var ramdomPos = Math.floor(Math.random() * 12);
		card.style.order = ramdomPos;
	});
}


function gameOver(){ // quando o jogo acaba função gameOver executa
	while(i < 12) {
		i++
		document.getElementById('item' + i).classList.remove('flip');
	}
	document.querySelector('.gameOver').style.display = 'none'
	restart();
}


function startGame(){ // função para iniciar o jogo
	restart();
	document.querySelector('.startGame').style.display = 'none'
}

function restart() { // reinicia as variaveis do jogo 
	resetBoard();
	shuffle();
	reset();
	startTimer();

	[i, n] = [0, 0];
	cards.forEach((card) => {
		card.addEventListener('click', flipCard);
	});
}

function resetGame () { // reseta o jogo andamendo
	pause();
	document.querySelector('.gameOver').style.display = 'flex'
}


//////////////

var list = [0]
var number = 0

function score(){ // inicializa variaveis locais, e passa o valor dela para o scoreboard
	let hour = document.getElementById('hour').innerText
	let minute = document.getElementById('minute').innerText
	let second = document.getElementById('second').innerText
	let millisecond = document.getElementById('millisecond').innerText

	millisecond.toString(millisecond)
	console.log(millisecond)
	if (millisecond.length == 2) {
		millisecond = millisecond + '0'
		console.error('')
	}


	for (var i = 0; i < list.length; i++) {
		list[number] = `${hour}h :${minute}m :${second}s :${millisecond}ms`;
	}
	console.log(list[number] +" "+ number)
	document.getElementById('score' + (number + 1)).innerHTML = list[number] + " " + number

	number++

	if (number >= 10) {
		number = 0;
	}
}

function clearScore(){ // limpa o scoreboard
	for (var i = 0; i < 10; i++) {
		document.getElementById('score' + (i + 1)).innerHTML = ''
	}
}