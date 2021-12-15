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


setTimeout(() => {
	document.querySelector('.line').innerHTML = "Lucas Braga Santos!";
	document.querySelector('.line').style.width = '19ch';
	document.querySelector('.lineHr').style.display = 'block';
	document.querySelector('.lineHr').style.width = '19ch';
}, 2100)

const iconColors = [
	icon1 = '#4FB4FE',
	icon2 = '#FE6496',
	icon3 = '#46F192',
	icon4 = '#D89808',
	icon5 = '#309B6F',
	icon6 = '#C651F4'
]

for (var i = 0; i < iconColors.length; i++) {
	document.getElementById('icon' + (i + 1)).style.background = iconColors[i];
}


var buttons = document.querySelectorAll('.disabled');
function buttonShake(){
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].classList.add("shake");
	}
	setTimeout(() => {
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove("shake");
		}
	}, 1000)
}