//variaveis
var precos = [
	gelo = 50,
	batata_frita = 3,
	mandioca = 2,
	ps4_slim = 500,
	xbox_one = 450,
	jogo_aranha = 25,
	jogo_call = 30,
	jogo_free_fire = 59,
	very_cool_dog = 999
];
var numeros = [
	gelo =0,
	batata_frita =0,
	mandioca =0,
	ps4_slim =0,
	xbox_one =0,
	jogo_aranha =0,
	jogo_call =0,
	jogo_free_fire =0,
	very_cool_dog =0
];

var money = 999999;
var loop = setInterval(loop, 10);



//functions
function loop(){
	var saldo = document.getElementById('saldo').innerHTML = money;
	var numeroA = document.getElementById('gelo').innerHTML = numeros[0];
	var numeroB = document.getElementById('batata_frita').innerHTML = numeros[1];
	var numeroC = document.getElementById('mandioca').innerHTML = numeros[2];

	var numeroD = document.getElementById('ps4_slim').innerHTML = numeros[3];
	var numeroE = document.getElementById('xbox_one').innerHTML = numeros[4];
	var numeroF = document.getElementById('jogo_aranha').innerHTML = numeros[5];

	var numeroG = document.getElementById('jogo_call').innerHTML = numeros[6];
	var numeroH = document.getElementById('jogo_free_fire').innerHTML = numeros[7];
	var numeroI = document.getElementById('very_cool_dog').innerHTML = numeros[8];
}    

function reply_click(clicked_id){
    if (money > 0 ) {
    	if(clicked_id == 'a1'){
    		if (numeros[0] > 0){
    			money = (money + precos[0]);
    			numeros[0] = (numeros[0] - 1);
    		}
    		else {
    			return;
    		}
	    }
	    if(clicked_id == 'a2'){
	    	money = (money - precos[0]);
	    	numeros[0] = (numeros[0] + 1);
	    }
	    //////////////////////////////////
	    if(clicked_id == 'b1'){
	    	if (numeros[1] > 0){
    			money = (money + precos[1]);
    			numeros[1] = (numeros[1] - 1);
    		}
    		else {
    			return;
    		}
	    }
	    if(clicked_id == 'b2'){
	    	money = (money - precos[1]);
	    	numeros[1] = (numeros[1] + 1);
	    }
	    //////////////////////////////////
	    if(clicked_id == 'c1'){
	    	if (numeros[2] > 0){
    			money = (money + precos[2]);
    			numeros[2] = (numeros[2] - 1);
    		}
    		else {
    			return;
    		}
	    }
	    if(clicked_id == 'c2'){
	    	money = (money - precos[2]);
	    	numeros[2] = (numeros[2] + 1);
	    }
	    //////////////////////////////////
	    //////////////////////////////////
	    //////////////////////////////////
	    if(clicked_id == 'd1'){
	    	if (numeros[3] > 0){
    			money = (money + precos[3]);
    			numeros[3] = (numeros[3] - 1);
    		}
    		else {
    			return;
    		}
	    }
	    if(clicked_id == 'd2'){
	    	money = (money - precos[3]);
	    	numeros[3] = (numeros[3] + 1);
	    }
	    //////////////////////////////////
	    if(clicked_id == 'e1'){
	    	if (numeros[4] > 0){
    			money = (money + precos[4]);
    			numeros[4] = (numeros[4] - 1);
    		}
    		else {
    			return;
    		}
	    }
	    if(clicked_id == 'e2'){
	    	money = (money - precos[4]);
	    	numeros[4] = (numeros[4] + 1);
	    }
	    //////////////////////////////////
	    if(clicked_id == 'f1'){
	    	if (numeros[5] > 0){
    			money = (money + precos[5]);
    			numeros[5] = (numeros[5] - 1);
    		}
    		else {
    			return;
    		}
	    }
	    if(clicked_id == 'f2'){
	    	money = (money - precos[5]);
	    	numeros[5] = (numeros[5] + 1);
	    }
	    //////////////////////////////////
	    //////////////////////////////////
	    //////////////////////////////////
	    if(clicked_id == 'g1'){
	    	if (numeros[6] > 0){
    			money = (money + precos[6]);
    			numeros[6] = (numeros[6] - 1);
    		}
    		else {
    			return;
    		}
	    }
	    if(clicked_id == 'g2'){
	    	money = (money - precos[6]);
	    	numeros[6] = (numeros[6] + 1);
	    }
	    //////////////////////////////////
	    if(clicked_id == 'h1'){
	    	if (numeros[7] > 0){
    			money = (money + precos[7]);
    			numeros[7] = (numeros[7] - 1);
    		}
    		else {
    			return;
    		}
	    }
	    if(clicked_id == 'h2'){
	    	money = (money - precos[7]);
	    	numeros[7] = (numeros[7] + 1);
	    }
	    //////////////////////////////////
	    if(clicked_id == 'i1'){
	    	if (numeros[8] > 0){
    			money = (money + precos[8]);
    			numeros[8] = (numeros[8] - 1);
    		}
    		else {
    			return;
    		}
	    }
	    if(clicked_id == 'i2'){
	    	money = (money - precos[8]);
	    	numeros[8] = (numeros[8] + 1);
	    }
    }
    else{
    	alert("infelizmente acabou seu dinheiro")
    }
}

