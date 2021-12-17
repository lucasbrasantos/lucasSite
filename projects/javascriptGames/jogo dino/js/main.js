const dino = document.querySelector('.dino');
const bg = document.querySelector('.bg');
let isJumping = false;
let position = 0;
let speedCactus = 7;

//////////////////////////

function handleKeyUp(event){
	if (event.keyCode === 32 || event.keyCode === 87 || event.keyCode === 38) {
		if (!isJumping) {
			jump();
		}
	}
}

function jump(){
	isJumping = true;

	let upInterval = setInterval(() => {
		if (position >= 180) {

			clearInterval(upInterval);
			let downInterval = setInterval(() => {
				if (position <= 10) {
					clearInterval(downInterval)
					isJumping = false;
				}
				else{
					position -= 10;
					dino.style.bottom = position + 'px';
				}
					
			}, 20);
		}else {
			position += 10;
			dino.style.bottom = position + 'px';
		}
	}, 20);
}

function createCactus(){
	const cactus = document.createElement('div');
	let cactusPosition = 1200;
	let randomTime = Math.random() * 6000;
	randomTime = parseInt(randomTime);

	cactus.classList.add('cactus');
	cactus.style.left = cactusPosition + 'px'
	bg.appendChild(cactus)

	let leftInterval = setInterval(() => {
		if (cactusPosition < -60) {
			clearInterval(leftInterval);
			bg.removeChild(cactus);
		}else if (cactusPosition > 0 && cactusPosition < 115 && position < 60){
			//gameover

			clearInterval(leftInterval);
			bg.style.display = 'none';
			document.getElementById('gameover').style.display = 'flex';
		}
		else {
			cactusPosition -= speedCactus;
			cactus.style.left = cactusPosition + 'px'
		}
	}, 20);

	setTimeout(createCactus, randomTime);

}

/////////////////////////////////////

document.addEventListener('keydown', handleKeyUp);
createCactus();