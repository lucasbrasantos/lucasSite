inicialize();
atualizaMostrador();
inicializarEspacos();
 
var countX = 0;
var	countO = 0;
var	countV = 0;

function inicialize(){
	player1 = "X";
	player2 = "O";
	playtime = player1;
	gameover = false;
	vencedor = "";
	count = 0;
}

function atualizaMostrador(){
	if (gameover){
		return
	}
	else {
		if (playtime == player1) {

			var player = document.querySelectorAll("div#mostrador img")[0];
			player.setAttribute("src", "./imgs/x.png");
		}
		else{
			var player = document.querySelectorAll("div#mostrador img")[0];
			player.setAttribute("src", "./imgs/o.png");
		}	
	}
}

function inicializarEspacos(){

	var espacos = document.getElementsByClassName("espaco")
	for (var i = 0; i < espacos.length; i++) {
		
		espacos[i].addEventListener("click", function(){

			if (gameover){
				return
			}
			else{

				if(this.getElementsByTagName("img").length == 0){

					if (playtime == player1) {

						this.innerHTML = "<img src='./imgs/x.png' height='50'>";
						this.setAttribute("jogada", player1);
						playtime = player2;

						count = (count + 1);
						console.log("contador = " + count);

					}
					else{

						this.innerHTML = "<img src='./imgs/o.png' height='50'>";
						this.setAttribute("jogada", player2);
						playtime = player1;

						count = (count + 1);
						console.log("contador = " + count);
					}

					atualizaMostrador();
					verificaVencer();
				}
			}
		}
		);
	}
}

async function verificaVencer(){

	var a1 = document.getElementById("a1").getAttribute("jogada");
	var a2 = document.getElementById("a2").getAttribute("jogada");
	var a3 = document.getElementById("a3").getAttribute("jogada");

	var b1 = document.getElementById("b1").getAttribute("jogada");
	var b2 = document.getElementById("b2").getAttribute("jogada");
	var b3 = document.getElementById("b3").getAttribute("jogada");

	var c1 = document.getElementById("c1").getAttribute("jogada");
	var c2 = document.getElementById("c2").getAttribute("jogada");
	var c3 = document.getElementById("c3").getAttribute("jogada");

	if((a1 == b1 && a1 == c1 && a1 != "" ) || (a1 == a2 && a1 == a3 && a1 != "" ) || (a1 == b2 && a1 == c3 && a1 != "" )){
		vencedor = a1;
	}
	else if((b2 == b1 && b2 == b3 && b2 != "" ) || (b2 == a2 && b2 == c2 && a1 != "" ) || (b2 == a3 && b2 == c1 && b2 != "" )){
		vencedor = b2;
	}
	else if(((c3 == c2 && c3 == c1) || (c3 == b3 && c3 == a3)) && c3 != ""){
		vencedor = c3;
	}

	if (vencedor != ""){
		gameover = true;
		await sleep(100);

		if (vencedor == "X"){
			countX = (countX + 1);
			pontos();

			await sleep(1000);

			swal({
				title: vencedor + '!',
				icon: './imgs/x.png',
				text: 'O ganhador foi o: ' + vencedor,
				button: 'CONTINUAR'
			})
			.then((willDelete) => {
				if(willDelete){

					reload();
				}
				else{
					reload();
				}
			});

		}
		else {
			countO = (countO + 1);
			pontos();
			await sleep(1000);

			swal({
				title: vencedor + '!',
				icon: './imgs/o.png',
				text: 'O ganhador foi o: ' + vencedor,
				button: 'CONTINUAR'
			})
			.then((willDelete) => {
				if(willDelete){

					reload();
				}
				else{
					reload();
				}
			});		

		}
	}

	if (count == 9 && vencedor == ""){
		gameover = true;
		countV = (countV + 1);
		pontos();
		await sleep(1000);
		
		swal({
			title: "VELHA!",
			icon: "./imgs/velha.jpg",
			text: 'Ninguem ganhou :(',
			button: 'CONTINUAR'
		})
		.then((willDelete) => {
			if(willDelete){

				reload();
			}
			else{
					reload();
				}
		});

	}
		
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms))
}

function pontos(){
	document.getElementById("pontos1").innerHTML = countX;
	document.getElementById("pontos2").innerHTML = countO;
	document.getElementById("pontos3").innerHTML = countV;
}

function reload(){
	var a1 = document.getElementById("a1").innerHTML = "";
	var a2 = document.getElementById("a2").innerHTML = "";
	var a3 = document.getElementById("a3").innerHTML = "";
	var b1 = document.getElementById("b1").innerHTML = "";
	var b2 = document.getElementById("b2").innerHTML = "";
	var b3 = document.getElementById("b3").innerHTML = "";
	var c1 = document.getElementById("c1").innerHTML = "";
	var c2 = document.getElementById("c2").innerHTML = "";
	var c3 = document.getElementById("c3").innerHTML = "";

	var a1 = document.getElementById("a1").setAttribute("jogada", "");
	var a2 = document.getElementById("a2").setAttribute("jogada", "");
	var a3 = document.getElementById("a3").setAttribute("jogada", "");

	var b1 = document.getElementById("b1").setAttribute("jogada", "");
	var b2 = document.getElementById("b2").setAttribute("jogada", "");
	var b3 = document.getElementById("b3").setAttribute("jogada", "");

	var c1 = document.getElementById("c1").setAttribute("jogada", "");
	var c2 = document.getElementById("c2").setAttribute("jogada", "");
	var c3 = document.getElementById("c3").setAttribute("jogada", "");

	gameover = false;

	inicialize();
	pontos();
	atualizaMostrador();
	inicializarEspacos();
}

function reset(){
	countX = 0;
	countO = 0;
	countV = 0;
	reload();
}