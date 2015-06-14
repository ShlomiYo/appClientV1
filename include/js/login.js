



$( document ).ready(function() {



		document.getElementById('wrapper').style.height =  $(window).height() + "px";
		document.getElementById('topArt').style.marginTop =  $(window).height()*30/100 + "px";




	window.onresize = function(event){

		document.getElementById('wrapper').style.height =  $(window).height() + "px";
		document.getElementById('topArt').style.marginTop =  $(window).height()*30/100 + "px";

	}

});
