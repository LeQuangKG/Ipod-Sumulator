//RowSelected

var arr = [
            ['01', 'Delahoja-Nuestro B.S.O', './ListMusic/1.mp3'],
            ['02', 'House Of Gypsies', './ListMusic/2.mp3'],
            ['03', 'Oasis - live forever', './ListMusic/3.mp3'],
            ['04', 'Referee Whistle', './ListMusic/4.mp3'],
            
          ];

var circle = null;
var mySound = null;
var listMusic = null;
var divListMusic = null;
var flag = false;
var flag02 = null;
var delta = 0;
var delta2 = 0;
var oldDeg = 0;
var oldDeg02 = 0;
var musicID = '';
var focusDiv = null;
function IniUI() {
	//console.log(realipod);
	rootlayout = document.createElement('div');
	rootlayout.style.position = 'absolute';
    rootlayout.style.width = '1024px';
    rootlayout.style.height = '768px';
	rootlayout.style.top = '0px';
	rootlayout.style.left = '0px';
    //rootlayout.style.background='url(Image/IPOD_BACKGROUND.jpg)';
	rootlayout.style.backgroundPosition = '0 0';
	rootlayout.style.backgroundRepeat = 'no-repeat';
    realipod.appendChild(rootlayout);

    
	//playIcon.style.zIndex = '2';
	//playIcon.style.left = '0px';
	//playIcon.style.top = '0px';
		
    var ipod = document.createElement('div');
    ipod.style.position = 'absolute';
    ipod.style.width = '240px';
    ipod.style.height = '385px';
    ipod.style.borderRadius = '15px';   
    ipod.style.left = '326px';
    ipod.style.top = '115px';
    ipod.style.border = '2px solid white'; 
		
    realipod.appendChild(ipod);


    var ipodTable = document.createElement('div');
    ipodTable.style.width='196px';
    ipodTable.style.height='148x';
    ipodTable.style.border='1px solid white';
    ipodTable.style.margin = '21px';
	ipod.appendChild(ipodTable);

    
    //var Row = document.createElement('div');
    //Row.className = 'RowSelected';
    //ipodTable.appendChild(Row);

    

    var Circle = document.createElement('div');
    Circle.id = 'Circle';
    Circle.style.position = 'absolute';
    Circle.style.height='143px';
    Circle.style.width = '143px';
    Circle.className = 'Rotate';   
    Circle.style.border = '1px solid white';
	Circle.style.top = '319px';
	Circle.style.left = '375px';
    //Circle.style.margin = '41px';   
    Circle.style.borderRadius = '150px';    
	if(navigator.platform == "iPad"){
		Circle.addEventListener('touchstart', MouseDown, false);
		Circle.addEventListener('touchmove', MouseMove, false);
		Circle.addEventListener('touchend', MouseUp, false);	
	} else {
		Circle.addEventListener('mousedown', MouseDown, false);
    	Circle.addEventListener('mousemove', MouseMove, false);
	    Circle.addEventListener('mouseup', MouseUp, false);	
	}
    
	
    realipod.appendChild(Circle);

    IconCircle = document.createElement('div');
    IconCircle.style.height = '10px';
    IconCircle.style.width = '10px';
    IconCircle.style.margin = '23px';
    IconCircle.style.backgroundImage = 'url(./Image/Roll.png)';
    Circle.appendChild(IconCircle); 

    var SmallCircle = document.createElement('button');
    SmallCircle.id = 'SmallCircle';
    SmallCircle.style.position = 'absolute';
    SmallCircle.style.height='56px';
    SmallCircle.style.width = '56px';
	SmallCircle.style.top = '363px';
	SmallCircle.style.left = '419px';
	SmallCircle.style.opacity = 0.5;
    SmallCircle.style.border = '1px solid white';    
    SmallCircle.style.borderRadius = '60px';
    //SmallCircle.style.backgroundColor = '#5e5e5e';
	if(navigator.platform == "iPad"){
		SmallCircle.addEventListener('touchstart', PlayMusic, false);	
	} else {
		SmallCircle.addEventListener('mousedown', PlayMusic, false);	
	}
     
    realipod.appendChild(SmallCircle);

    var count = arr.length;

    var divIcon = document.createElement('div');
    divIcon.style.height = '20px';
    divIcon.style.width = '20px';
   // divIcon.style.backgroundImage = 'url(./Image/Untitled-1.png)';
    for (var i = 0; i < count; i++) {
        var item = arr[i];
		
		var playIcon = document.createElement('div');
		playIcon.style.float = 'left';	
		playIcon.style.background = 'url(Image/arrow-Ipod.png)';
		playIcon.style.width = '16px';
		playIcon.style.height = '16px';
		playIcon.style.marginTop = '2px';
		playIcon.style.marginLeft = '5px';
		playIcon.style.visibility = 'hidden';
		playIcon.id = 'icon'+item[0];
		
		var span = document.createElement('span');
		span.style.float = 'left';
		span.style.marginLeft = '5px';
		span.style.marginTop = '3px';
		span.innerHTML = item[1];
        var divMusic = document.createElement('div');
		divMusic.setAttribute("class","Row");
        divMusic.style.float = 'left';		
        divMusic.style.width = '196px';
        divMusic.style.height = '26px';
		//divMusic.style.paddingLeft = '40px';
		divMusic.style.fontSize = '14px';
		divMusic.style.color = 'White';
		
		//divMusic.style.border = '1px solid blue';
		divMusic.style.paddingTop = '4px';
        divMusic.id = item[0];
        //divMusic.innerHTML = item[1];
		divMusic.appendChild(playIcon);
		divMusic.appendChild(span);
        ipodTable.appendChild(divMusic);

        if (i == 0) {
            divMusic.className = 'RowSelected';
        }
    }

    
}
function Rotate(value) {
    var temp = document.getElementById('Circle');
    document.getElementById('Circle').style.webkitTransform = "Rotate(" + value + "deg)";
    document.getElementById('Circle').style.msTransform = "Rotate(" + value + "deg)";
    document.getElementById('Circle').style.transform = "Rotate(" + value + "deg)";
    document.getElementById('Circle').style.OTransform = "Rotate(" + value + "deg)";
    document.getElementById('Circle').style.MozTransform = "Rotate(" + value + "deg)";

}



function MouseDown(e) {
	e.preventDefault();
    flag = true;
    var item01 = document.getElementById && !document.all;
    var item = document.getElementById('Circle');
    var dx = item.offsetLeft + 75;
    var dy = item.offsetTop + 75;
       
    var point = [];

	if(navigator.platform == "iPad"){
		if (item01) {
			point[0] = e.touches[0].clientX;
			point[1] = e.touches[0].clientY;
		}
		else {
			point[0] = event.touches[0].clientX;
			point[1] = event.touches[0].clientY;
		}	
	} else {
		
		if (item01) {
			point[0] = e.clientX;
			point[1] = e.clientY;
		}
		else {
			point[0] = event.clientX;
			point[1] = event.clientY;
		}			
	}
    

        
    var x = point[0] - dx;
    var y = point[1] - dy;

    var temp01 = Math.atan2(y, x);
    var temp02 = temp01 * 180;
    var temp03 = temp02 / Math.PI;

    oldDeg = temp03;// Start angle
}


//document.onmousemove = my.Move; 
function MouseMove(e) {
	e.preventDefault();
    
    var my = this;

    var item01 = document.getElementById && !document.all;
    var item = document.getElementById('Circle');
    var dx = item.offsetLeft + 75;
    var dy = item.offsetTop + 75;
    
    if (flag == true) {
        var point = [];

        if(navigator.platform == "iPad"){
			if (item01) {
				point[0] = e.touches[0].clientX;
				point[1] = e.touches[0].clientY;
			}
			else {
				point[0] = event.touches[0].clientX;
				point[1] = event.touches[0].clientY;
			}	
		} else {
			
			if (item01) {
				point[0] = e.clientX;
				point[1] = e.clientY;
			}
			else {
				point[0] = event.clientX;
				point[1] = event.clientY;
			}			
		}

        var x = point[0] - dx;
        var y = point[1] - dy;

        var temp01 = Math.atan2(y, x);
        var temp02 = temp01 * 180;
        var temp03 = temp02 / Math.PI;
        
        var num = temp03 - oldDeg; 

        
        delta += num;
        
		if(delta<0)
		{
			delta+=360;
		}
		if(delta>360)
		{
			delta-=360;
		}
        Rotate(delta);
		
        delta2 = delta - oldDeg02;
		
		if(Math.abs( delta2 )> 300)
		{
			if(delta2 < 0)
			{
				delta2 += 360;
			}
			else
			{
				delta2 -= 360; 
			}
		}
		
        if (Math.abs(delta2) >= 25) {
			
			if(delta2 > 0)
			{
				SelectRow01();
			}
			else
			{
				SelectRow02();
			}
           
			oldDeg02 = delta;
        }
		oldDeg = temp03; 
    }

}

function MouseUp(e) {
	e.preventDefault();
    flag = false;
}

function SelectRow01() {
    var count = arr.length;
    for (var i = 0; i < count; i++) {
        var item = arr[i];
        var div = document.getElementById(item[0]);
        if (div.className == 'RowSelected') {
            //PlayTickSound();
            if (i == (count - 1)) {
                div.className = 'Row';
                var item02 = arr[0];
                var div02 = document.getElementById(item02[0]);
                div02.className = 'RowSelected';
                
                return;
            }

            else {
                div.className = 'Row';
                var item02 = arr[i + 1];
                var div02 = document.getElementById(item02[0]);
                div02.className = 'RowSelected';
           
                return;
            }
        } 
    }
}

function SelectRow02(delta) {
    var count = arr.length;
    for (var i = 0; i < count; i++) {
        var item = arr[i];
        var div = document.getElementById(item[0]);
        if (div.className == 'RowSelected') {
            //PlayTickSound();
            if (i == 0) {
                div.className = 'Row';
                var item02 = arr[count -1];
                var div02 = document.getElementById(item02[0]);
                div02.className = 'RowSelected';
                
                return;
            }

            else {
                div.className = 'Row';
                var item02 = arr[i - 1];
                var div02 = document.getElementById(item02[0]);
                div02.className = 'RowSelected';
                
                return;
            }
        }
    }
}


function PlayTickSound() {
    flag = true;
    var item = document.getElementById('tickSound');
	item.play();

}


function CreateAudio(file) {
    mySound = document.createElement("audio");
    mySound.setAttribute('src', file);
    mySound.setAttribute('controls', false);
    mySound.setAttribute('autoplay', false);
    mySound.setAttribute('id', 'thesound');
	mySound.setAttribute('loop', true);
	mySound.style.visibility = 'hidden';
    realipod.appendChild(mySound);
}
function Play(id) {
    flag02 = true;
	
    var temp01 = document.getElementById('thesound');
	musicID = id;
	
	temp01.load();
    temp01.play();    
}

function Stop() {
    flag02 = false;
	
    var temp02 = document.getElementById('thesound');
	if(temp02 == null)
	{
		return;
	}
	temp02.pause();
    //temp02.setAttribute('ended', true);
    realipod.removeChild(temp02);
    mySound = null;
}

function PlayMusic() {

   
	 var id = '';
	 var musicURL = '';
     var count = arr.length;
	 var div;
     for (var i = 0; i < count; i++) {
        var item = arr[i];
        div = document.getElementById(item[0]);
		
		
         if (div.className == 'RowSelected') {
			
			id = item[0];
			musicURL = item[2];
			
            break;
         }
     }
	 if(musicID != id || flag02 == false)
	 {
		
		Stop();
		if(focusDiv != null)
		{
			focusDiv.childNodes[0].style.visibility = 'hidden';
		}
		CreateAudio(musicURL);
		Play(id);
		div.childNodes[0].style.visibility = 'visible';
		focusDiv = div;
		return;
	 }
	 if (flag02 == true) {
		if(focusDiv != null)
		{
			focusDiv.childNodes[0].style.visibility = 'hidden';
		}
		focusDiv = null;
        Stop();
		
		//div.childNode[0].style.visibility = 'hidden';
		return;
	}
}
/*
window.onload = function () {
	document.body.addEventListener('touchmove',function(e){e.preventDefault();},false);
    IniUI();
}
*/
window.onbeforeunload = function() {
	Stop();
}

