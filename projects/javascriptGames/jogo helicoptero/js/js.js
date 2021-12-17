function start() {

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");
	$("#fundoGame").append("<div id='placar'></div>");
	$("#fundoGame").append("<div id='energia'></div>");

	var somDisparo=document.getElementById("somDisparo");
	var somExplosao=document.getElementById("somExplosao");
	var musica=document.getElementById("musica");
	var somGameover=document.getElementById("somGameover");
	var somPerdido=document.getElementById("somPerdido");
	var somResgate=document.getElementById("somResgate");

	musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
	musica.play();


	
	var jogo = {}
	var TECLA = {
		W: 87,
		S: 83,
		D: 68,
		setapracima: 38,
		setaprabaixo: 40,
		setapraesquerda: 39,
		O: 79,
		P: 80

	}
	var podeAtirar=true;
	var velocidade=5;
	var velocidadeJogador=10;
	var velocidadeDisparo=15;
	var velocidadeDisparo2=30;
	var velocidadeB=2;
	var posicaoY = parseInt(Math.random() * 334);
	var posicaoYB = parseInt(Math.random() * 334);
	var posicaoYS = parseInt(Math.random() * 334);
	var posicaoYT = parseInt(Math.random() * 334);
	var fimdejogo=false;

	var pontos=0;
	var salvos=0;
	var perdidos=0;

	//bonus//

	var n1 = 1500;
	var n2 = 1500;
	var n3 = 1500;

	/////////

	var energiaAtual=3;

	jogo.pressionou = [];


	$(document).keydown(function(e){
		jogo.pressionou[e.which] = true;
	});


	$(document).keyup(function(e){
       jogo.pressionou[e.which] = false;
	});


	jogo.timer = setInterval(loop,30);
	
	function loop() {

		movefundo();
		movejogador();
		moveinimigo1();
		moveinimigo2();
		moveamigo();
		movebonus();
		movespeed();
		moveshot();

		colisao();
		placar();
		energia();
		dificuldade();

		bonus();
		speed();
		multishot();
	}

	
	function movefundo() {
		
		esquerda = parseInt($("#fundoGame").css("background-position"));
		$("#fundoGame").css("background-position",esquerda-1);
		
	}

	function movejogador() {
		
		if (jogo.pressionou[TECLA.W]) {
			var topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top",topo-velocidadeJogador);

			if (topo<=0) {		
				$("#jogador").css("top",topo+velocidadeJogador);
			}
		
		}
		
		if (jogo.pressionou[TECLA.S]) {
			
			var topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top",topo+velocidadeJogador);

			if (topo>=434) {	
				$("#jogador").css("top",topo-velocidadeJogador);		
			}
		}
		
		if (jogo.pressionou[TECLA.D]) {
			disparo();
		}
		if (jogo.pressionou[TECLA.setapracima]) {
			var topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top",topo-velocidadeJogador);

			if (topo<=0) {		
				$("#jogador").css("top",topo+velocidadeJogador);
			}
		
		}
		
		if (jogo.pressionou[TECLA.setaprabaixo]) {
			
			var topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top",topo+velocidadeJogador);

			if (topo>=434) {	
				$("#jogador").css("top",topo-velocidadeJogador);		
			}
		}
		
		if (jogo.pressionou[TECLA.setapraesquerda]) {
			disparo();
		}

		if (jogo.pressionou[TECLA.O]) {
			//velocidadeJogador++;
		}
		if (jogo.pressionou[TECLA.P]) {
			//velocidadeJogador--;
		}

	}
	function moveinimigo1() {

		posicaoX = parseInt($("#inimigo1").css("left"));
		$("#inimigo1").css("left",posicaoX-velocidade);
		$("#inimigo1").css("top",posicaoY);
		
		if (posicaoX<=0) {
			posicaoY = parseInt(Math.random() * 334);
			$("#inimigo1").css("left",694);
			$("#inimigo1").css("top",posicaoY);
		}
			
	}
	function moveinimigo2() {
        posicaoX = parseInt($("#inimigo2").css("left"));
		$("#inimigo2").css("left",posicaoX-3);
				
		if (posicaoX<=0) {
			
		$("#inimigo2").css("left",775);
					
		}
	}
	function moveamigo() {	
		posicaoX = parseInt($("#amigo").css("left"));
		$("#amigo").css("left",posicaoX+1);
				
		if (posicaoX>906) {
			
			$("#amigo").css("left",0);					
		}

	}


	function movebonus() {

		posicaoX = parseInt($("#bonus").css("left"));
		$("#bonus").css("left",posicaoX-velocidadeB);
		$("#bonus").css("top",posicaoYB);
			
		if (posicaoX<=0) {
			posicaoYB = parseInt(Math.random() * 334);
			$("#bonus").css("left",900);
			$("#bonus").css("top",posicaoYB);
		}
	}
	function movespeed() {

		posicaoX = parseInt($("#speed").css("left"));
		$("#speed").css("left",posicaoX-velocidadeB);
		$("#speed").css("top",posicaoYS);
			
		if (posicaoX<=0) {
			posicaoYS = parseInt(Math.random() * 334);
			$("#speed").css("left",800);
			$("#speed").css("top",posicaoYS);
		}
	}
	function moveshot() {

		posicaoX = parseInt($("#multishot").css("left"));
		$("#multishot").css("left",posicaoX-velocidadeB);
		$("#multishot").css("top",posicaoYT);
			
		if (posicaoX<=0) {
			posicaoYS = parseInt(Math.random() * 334);
			$("#multishot").css("left",800);
			$("#multishot").css("top",posicaoYT);
		}
	}


	function disparo() {	
		if (podeAtirar==true) {
			somDisparo.play();		
			podeAtirar=false;			
			topo = parseInt($("#jogador").css("top"))
			posicaoX= parseInt($("#jogador").css("left"))
			tiroX = posicaoX + 190;
			topoTiro=topo+37;
			$("#fundoGame").append("<div id='disparo'></div");
			$("#disparo").css("top",topoTiro);
			$("#disparo").css("left",tiroX);
			
			var tempoDisparo=window.setInterval(executaDisparo, velocidadeDisparo2);	
		}

		function executaDisparo() {

	    	posicaoX = parseInt($("#disparo").css("left"));
	    	$("#disparo").css("left",posicaoX+velocidadeDisparo); 

        	if (posicaoX>900) {
						
				window.clearInterval(tempoDisparo);
				tempoDisparo=null;
				$("#disparo").remove();
				podeAtirar=true;
					
        	}
		}


	}

	function colisao() {
		var colisao1 = ($("#jogador").collision($("#inimigo1")));
		var colisao2 = ($("#jogador").collision($("#inimigo2")));
		var colisao3 = ($("#disparo").collision($("#inimigo1")));
		var colisao4 = ($("#disparo").collision($("#inimigo2")));
		var colisao5 = ($("#jogador").collision($("#amigo")));
		var colisao6 = ($("#inimigo2").collision($("#amigo")));
		var colisao7 = ($("#jogador").collision($("#bonus")));
		var colisao8 = ($("#jogador").collision($("#speed")));
		var colisao9 = ($("#jogador").collision($("#multishot")));

		if (colisao1.length>0) {
			energiaAtual--;
			somExplosao.play();
			inimigo1X = parseInt($("#inimigo1").css("left"));
			inimigo1Y = parseInt($("#inimigo1").css("top"));
			explosao1(inimigo1X,inimigo1Y);
			posicaoY = parseInt(Math.random() * 334);
			$("#inimigo1").css("left",694);
			$("#inimigo1").css("top",posicaoY);

		}

		if (colisao2.length>0) {
			energiaAtual--;
			somExplosao.play();
			inimigo2X = parseInt($("#inimigo2").css("left"));
			inimigo2Y = parseInt($("#inimigo2").css("top"));
			explosao2(inimigo2X,inimigo2Y);					
			$("#inimigo2").remove();
			reposicionaInimigo2();
		
		}
		if (colisao3.length>0) {
		
			velocidade=velocidade+0.1;
			pontos=pontos+100;
			inimigo1X = parseInt($("#inimigo1").css("left"));
			inimigo1Y = parseInt($("#inimigo1").css("top"));				
			explosao1(inimigo1X,inimigo1Y);
			$("#disparo").css("left",950);				
			posicaoY = parseInt(Math.random() * 334);
			$("#inimigo1").css("left",694);
			$("#inimigo1").css("top",posicaoY);		
		}
		if (colisao4.length>0) {
		
			pontos=pontos+50;
			inimigo2X = parseInt($("#inimigo2").css("left"));
			inimigo2Y = parseInt($("#inimigo2").css("top"));
			$("#inimigo2").remove();
			explosao2(inimigo2X,inimigo2Y);
			$("#disparo").css("left",950);			
			reposicionaInimigo2();		
		}

		if (colisao5.length>0) {
			salvos++;
			somResgate.play();
			reposicionaAmigo();
			$("#amigo").remove();
		}

		if (colisao6.length>0) {
	    	somPerdido.play();
	    	perdidos++;
			amigoX = parseInt($("#amigo").css("left"));
			amigoY = parseInt($("#amigo").css("top"));
			explosao3(amigoX,amigoY);
			$("#amigo").remove();					
			reposicionaAmigo();			
		}


		if (colisao7.length>0) {
			energiaAtual++;
			somResgate.play();
			bonusX = parseInt($("#bonus").css("left"));
			bonusY = parseInt($("#bonus").css("top"));
			posicaoYB = parseInt(Math.random() * 334);
			$("#bonus").css("left",900);
			$("#bonus").css("top",posicaoY);
			$("#bonus").remove();
			reposicionaBonus();

		}

		if (colisao8.length>0) {
			velocidadeJogador = velocidadeJogador + 3;
			setInterval(ResetBonus, 1000*10)
			somResgate.play();
			speedX = parseInt($("#speed").css("left"));
			speedY = parseInt($("#speed").css("top"));
			posicaoYS = parseInt(Math.random() * 334);
			$("#speed").css("left",900);
			$("#speed").css("top",posicaoY);
			$("#speed").remove();
			reposicionaSpeed();

		}
		if (colisao9.length>0) {
			velocidadeDisparo2 = 0;
			setInterval(ResetBonus, 1000*10)
			somResgate.play();
			shotX = parseInt($("#multishot").css("left"));
			shotY = parseInt($("#multishot").css("top"));
			posicaoYT = parseInt(Math.random() * 334);
			$("#multishot").css("left",900);
			$("#multishot").css("top",posicaoY);
			$("#multishot").remove();
			reposicionashot();

		}
	}
	function ResetBonus(){
		velocidadeDisparo = 15;
		velocidadeDisparo2 = 30;
		velocidadeJogador = 10;
	}

	function explosao1(inimigo1X,inimigo1Y) {
		$("#fundoGame").append("<div id='explosao1'></div");
		$("#explosao1").css("background-image", "url(imgs/explosao.png)");
		var div=$("#explosao1");
		div.css("top", inimigo1Y);
		div.css("left", inimigo1X);
		div.animate({width:225, opacity:0}, "slow");
		
		var tempoExplosao=window.setInterval(removeExplosao, 1000);
		
		function removeExplosao() {
				
			div.remove();
			window.clearInterval(tempoExplosao);
			tempoExplosao=null;
				
		}
		
	}
	function reposicionaInimigo2() {
	
		var tempoColisao4=window.setInterval(reposiciona4, 5000);		
		function reposiciona4() {
			window.clearInterval(tempoColisao4);
			tempoColisao4=null;
			
			if (fimdejogo==false) {			
				$("#fundoGame").append("<div id=inimigo2></div");			
			}
			
		}	
	}
	function explosao2(inimigo2X,inimigo2Y) {
	
		$("#fundoGame").append("<div id='explosao2'></div");
		$("#explosao2").css("background-image", "url(imgs/explosao.png)");
		var div2=$("#explosao2");
		div2.css("top", inimigo2Y);
		div2.css("left", inimigo2X);
		div2.animate({width:225, opacity:0}, "slow");
	
		var tempoExplosao2=window.setInterval(removeExplosao2, 1000);
	
		function removeExplosao2() {
			
			div2.remove();
			window.clearInterval(tempoExplosao2);
			tempoExplosao2=null;
			
		}	
		
	}
	function reposicionaAmigo() {
		var tempoAmigo=window.setInterval(reposiciona6, 6000);	
		function reposiciona6() {
			window.clearInterval(tempoAmigo);
			tempoAmigo=null;
			
			if (fimdejogo==false) {		
				$("#fundoGame").append("<div id='amigo' class='anima3'></div>");
			
			}
		}
		
	}
	function reposicionaBonus() {
		var tempoBonus=window.setInterval(reposiciona7, 20000);	
		function reposiciona7() {
			window.clearInterval(tempoBonus);
			tempoBonus=null;
			
			if (fimdejogo==false) {		
				$("#fundoGame").append("<div id='bonus'></div>");
			
			}
		}
		
	}
	function reposicionaSpeed() {
		var tempoSpeed=window.setInterval(reposiciona8, 20000);	
		function reposiciona8() {
			window.clearInterval(tempoSpeed);
			tempoSpeed=null;
			
			if (fimdejogo==false) {		
				$("#fundoGame").append("<div id='speed'></div>");
			
			}
		}
		
	}
	function reposicionashot() {
		var tempoShot=window.setInterval(reposiciona9, 20000);	
		function reposiciona9() {
			window.clearInterval(tempoShot);
			tempoShot=null;
			
			if (fimdejogo==false) {		
				$("#fundoGame").append("<div id='multishot'></div>");
			
			}
		}
		
	}

	function explosao3(amigoX,amigoY) {
		$("#fundoGame").append("<div id='explosao3' class='anima4'></div");
		$("#explosao3").css("top",amigoY);
		$("#explosao3").css("left",amigoX);
		var tempoExplosao3=window.setInterval(resetaExplosao3, 1000);

		function resetaExplosao3() {
			$("#explosao3").remove();
			window.clearInterval(tempoExplosao3);
			tempoExplosao3=null;
				
		}
	}
	function placar() {
		$("#placar").html("<h2> Pontos: " + pontos + " Salvos: " + salvos + " Perdidos: " + perdidos + "</h2>");	
	}

	function energia() {
	
		if (energiaAtual==3) {
			
			$("#energia").css("background-image", "url(imgs/energia3.png)");
		}
	
		if (energiaAtual==2) {
			
			$("#energia").css("background-image", "url(imgs/energia2.png)");
		}
	
		if (energiaAtual==1) {
			
			$("#energia").css("background-image", "url(imgs/energia1.png)");
		}
	
		if (energiaAtual==0) {
			
			$("#energia").css("background-image", "url(imgs/energia0.png)");
			gameOver();
			
		}
	
	}

	function gameOver() {
		fimdejogo=true;
		musica.pause();
		somGameover.addEventListener("ended", function(){ musica.currentTime = 0; somGameover.play(); }, false);
		somGameover.play();
		
		window.clearInterval(jogo.timer);
		jogo.timer=null;
		
		$("#jogador").remove();
		$("#jogador").remove();
		$("#inimigo1").remove();
		$("#inimigo2").remove();
		$("#amigo").remove();
		$("#bonus").remove();
		$("#disparo").remove();
		$("#explosao1").remove();
		$("#explosao2").remove();
		$("#speed").remove();
		$("#multishot").remove();
		
		$("#fundoGame").append("<div id='fim'></div>");
		
		$("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + "</p>" + "<p>Você salvou: " + salvos + " Amigos</p>" + "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
	}

	function dificuldade(){
		if(pontos >= 1500){
			//velociadde inimigo1
			velocidade=7;

			//velocidade cenario
			esquerda = parseInt($("#fundoGame").css("background-position"));
			$("#fundoGame").css("background-position",esquerda-2);

			//velocidade inimigo2
			posicaoX = parseInt($("#inimigo2").css("left"));
			$("#inimigo2").css("left",posicaoX-4);
		}
		if(pontos >= 3500){
			//velociadde inimigo1
			velocidade=10;

			//velocidade cenario
			esquerda = parseInt($("#fundoGame").css("background-position"));
			$("#fundoGame").css("background-position",esquerda-3);

			//velocidade inimigo2
			posicaoX = parseInt($("#inimigo2").css("left"));
			$("#inimigo2").css("left",posicaoX-6);
		}
		if(pontos >= 5000){
			//velociadde inimigo1
			velocidade=15;

			//velocidade cenario
			esquerda = parseInt($("#fundoGame").css("background-position"));
			$("#fundoGame").css("background-position",esquerda-4);

			//velocidade inimigo2
			posicaoX = parseInt($("#inimigo2").css("left"));
			$("#inimigo2").css("left",posicaoX-2);
		}
		if(pontos >= 7000){
			//velociadde inimigo1
			velocidade=20;

			//velocidade cenario
			esquerda = parseInt($("#fundoGame").css("background-position"));
			$("#fundoGame").css("background-position",esquerda-5);

			//velocidade inimigo2
			posicaoX = parseInt($("#inimigo2").css("left"));
			$("#inimigo2").css("left",posicaoX-3);
		}
	}

	function bonus(){
		if (pontos >= n1) {
			setTimeout(livebonus, 10);
			n1 = 99999999;
			function livebonus(){
				$("#fundoGame").append("<div id='bonus'></div>");
			}
		}

		if (energiaAtual > 3) {
			pontos = pontos + 400;
			energiaAtual--;
		}
	}
	function speed(){
		if (pontos >= n2) {
			setTimeout(livespeed, 1000*10);
			n2 = 99999999;
			function livespeed(){
				$("#fundoGame").append("<div id='speed'></div>");
			}
		}
	}
	function multishot(){
		if (pontos >= n3) {
			setTimeout(liveshot, 2000*10);
			n3 = 99999999;
			function liveshot(){
				$("#fundoGame").append("<div id='multishot'></div>");
			}
		}
	}
}	

function reiniciaJogo() {
	somGameover.pause();
	$("#fim").remove();
	location.reload();
}