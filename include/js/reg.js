



$( document ).ready(function() {


	var pass1 = document.getElementById("pass1");
	var pass2 = document.getElementById("pass2");
	var regNext = document.getElementById("regNext");
	var regBack = document.getElementById("regBack");



		document.getElementById('wrapper').style.height =  $(window).height() + "px";
		document.getElementById('topArt').style.marginTop =  $(window).height()*17/100 + "px";




	window.onresize = function(event){

		document.getElementById('wrapper').style.height =  $(window).height() + "px";
		document.getElementById('topArt').style.marginTop =  $(window).height()*17/100 + "px";

	}









regNext.onclick = null;
regBack.onclick = Back;
pass1.onchange = check;
pass2.onchange = check;



function check(){

	if( pass2.value == pass1.value ){

		pass2.style.border = "solid 1px #1EFF00";
		pass1.style.border = "solid 1px #1EFF00";
		regNext.onclick = Next;
	}
	else{

		pass2.style.border = "solid 1px red";
		pass1.style.border = "solid 1px red";
		regNext.onclick=null;
	}
}


function Next(){

        $('#regPart1').css({position: "absolute", visibility: "hidden"});
        $('#regPart2').css({visibility: "visible", position: "relative"});
}

function Back(){

        $('#regPart2').css({position: "absolute", visibility: "hidden"});
        $('#regPart1').css({visibility: "visible", position: "relative"});
}





});
