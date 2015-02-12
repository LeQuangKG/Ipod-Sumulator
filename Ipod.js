
var flagIpod = false;
var  flagBScreen = false;

function initMain(){
	ipodshow.addEventListener("click",openIpod,false);
	IniUI();	
	/*document.body.addEventListener("click",function(e){
		console.log(e.target);	
	},false);*/
	
	if(navigator.platform == "iPad"){
		realipod.addEventListener("touchend",closeBlackScreen,false);
	} else {
		realipod.addEventListener("mouseup",closeBlackScreen,false);
	}	
}

function openIpod(e){
	if(!flagIpod){
			document.body.addEventListener('touchmove', function(e){e.preventDefault();},false);
			ipodimages.style.display = "block";
			ipodshow.style.display = "none";
			//run seriImg
			var speed = 1;
			var tempi= 0;
			var iSeri = setInterval(function(){
				ipodimages.style.backgroundImage = "url(images/ip/" + tempi+ ".png)";
				tempi++;
				if(tempi >= 32){
					clearInterval(iSeri);
					realipod.style.display = "block";
					setBlackScreen(flagBScreen);
				}
				
			},speed);
	}
}

function setBlackScreen(flagSet){
	if(flagSet){ // close
		flagBScreen = false;	
		mask.style.display = "none";
		mask.style.opacity = 0;
	} else { // open
		flagBScreen = true;	
		mask.style.display = "block";
		setTimeout(function(){
			mask.style.opacity = 0.8;
		},1);
	}
	
}

//get Client Position Mouse
function getClientPos(e){
	var objX,objY;
	if(navigator.platform == "iPad"){
			objX = e.changedTouches[0].clientX
			objY = e.changedTouches[0].clientY
	} else {
			objX = e.clientX
			objY = e.clientY
	}
	return [objX,objY];
}

function closeBlackScreen(e){
		//console.log("click dc roi ne");
		document.body.removeEventListener('touchmove', function(e){e.preventDefault();},false);
		var pointBScreen = getClientPos(e);
		var x = pointBScreen[0];
		var y = pointBScreen[1];
		if(!((x > 320 && x < (320 + 250)) &&  (y > 110 && y < (110 + 400)))){
			//console.log("click vao");		
			ipodimages.style.backgroundImage = "url(images/ip/0.png)";
			setBlackScreen(flagBScreen);
			ipodimages.style.display = "none";
			ipodshow.style.display = "block";
			//Stop();
			realipod.style.display = "none";
		}
		
	}