javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement('script');c.type='text/javascript';c.src='//ajax.googleapis.com/ajax/libs/jquery/'+g+'/jquery.min.js';c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=='loaded'||d=='complete')){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.body.appendChild(c)}})(window,document,'1.8',function($,L){  


/* LET IT SNOW */
$.snowfall = function(t,e){function i(i,s,a,n,o){this.id=o,this.x=i,this.y=s,this.size=a,this.speed=n,this.step=0,this.stepSize=h(1,10)/100,e.collection&&(this.target=g[h(0,g.length-1)]);var l=null;e.image?(l=$(document.createElement('img')),l[0].src=e.image):(l=$(document.createElement('div')),l.css({background:e.flakeColor})),l.attr({'class':'snowfall-flakes',id:'flake-'+this.id}).css({width:this.size,height:this.size,position:e.flakePosition,top:this.y,left:this.x,fontSize:0,zIndex:e.flakeIndex}),$(t).get(0).tagName===$(document).get(0).tagName?($('body').append(l),t=$('body')):$(t).append(l),this.element=document.getElementById('flake-'+this.id),this.update=function(){if(this.y+=this.speed,this.y>r-(this.size+6)&&this.reset(),this.element.style.top=this.y+'px',this.element.style.left=this.x+'px',this.step+=this.stepSize,this.x+=y===!1?Math.cos(this.step):y+Math.cos(this.step),e.collection&&this.x>this.target.x&&this.x<this.target.width+this.target.x&&this.y>this.target.y&&this.y<this.target.height+this.target.y){var t=this.target.element.getContext('2d'),i=this.x-this.target.x,s=this.y-this.target.y,a=this.target.colData;if(void 0!==a[parseInt(i)][parseInt(s+this.speed+this.size)]||s+this.speed+this.size>this.target.height)if(s+this.speed+this.size>this.target.height){for(;s+this.speed+this.size>this.target.height&&this.speed>0;)this.speed*=.5;t.fillStyle='#fff',void 0==a[parseInt(i)][parseInt(s+this.speed+this.size)]?(a[parseInt(i)][parseInt(s+this.speed+this.size)]=1,t.fillRect(i,s+this.speed+this.size,this.size,this.size)):(a[parseInt(i)][parseInt(s+this.speed)]=1,t.fillRect(i,s+this.speed,this.size,this.size)),this.reset()}else this.speed=1,this.stepSize=0,parseInt(i)+1<this.target.width&&void 0==a[parseInt(i)+1][parseInt(s)+1]?this.x++:parseInt(i)-1>0&&void 0==a[parseInt(i)-1][parseInt(s)+1]?this.x--:(t.fillStyle='#fff',t.fillRect(i,s,this.size,this.size),a[parseInt(i)][parseInt(s)]=1,this.reset())}(this.x>d-p||this.x<p)&&this.reset()},this.reset=function(){this.y=0,this.x=h(p,d-p),this.stepSize=h(1,10)/100,this.size=h(100*e.minSize,100*e.maxSize)/100,this.speed=h(e.minSpeed,e.maxSpeed)}}function s(){for(l=0;l<n.length;l+=1)n[l].update();f=requestAnimationFrame(function(){s()})}var a={flakeCount:35,flakeColor:'#ffffff',flakePosition:'absolute',flakeIndex:999999,minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,collectionHeight:40,deviceorientation:!1},e=$.extend(a,e),h=function(t,e){return Math.round(t+Math.random()*(e-t))};$(t).data('snowfall',this);var n=[],o=0,l=0,r=$(t).height(),d=$(t).width(),p=0,f=0;if(e.collection!==!1){var c=document.createElement('canvas');if(c.getContext&&c.getContext('2d'))for(var g=[],m=$(e.collection),x=e.collectionHeight,l=0;l<m.length;l++){var u=m[l].getBoundingClientRect(),z=$('<canvas/>',{'class':'snowfall-canvas'}),w=[];if(u.top-x>0){$('body').append(z),z.css({position:e.flakePosition,left:u.left+'px',top:u.top-x+'px'}).prop({width:u.width,height:x});for(var v=0;v<u.width;v++)w[v]=[];g.push({element:z.get(0),x:u.left,y:u.top-x,width:u.width,height:x,colData:w})}}else e.collection=!1}for($(t).get(0).tagName===$(document).get(0).tagName&&(p=25),$(window).bind('resize',function(){r=$(t)[0].clientHeight,d=$(t)[0].offsetWidth}),l=0;l<e.flakeCount;l+=1)o=n.length,n.push(new i(h(p,d-p),h(0,r),h(100*e.minSize,100*e.maxSize)/100,h(e.minSpeed,e.maxSpeed),o));e.round&&$('.snowfall-flakes').css({'-moz-border-radius':e.maxSize,'-webkit-border-radius':e.maxSize,'border-radius':e.maxSize}),e.shadow&&$('.snowfall-flakes').css({'-moz-box-shadow':'1px 1px 1px #555','-webkit-box-shadow':'1px 1px 1px #555','box-shadow':'1px 1px 1px #555'});var y=!1;e.deviceorientation&&$(window).bind('deviceorientation',function(t){y=.1*t.originalEvent.gamma}),s(),this.clear=function(){$(t).children('.snowfall-flakes').remove(),$('.snowfall-canvas').remove(),n=[],cancelAnimationFrame(f)}},
$.fn.snowfall=function(t){return'object'==typeof t||void 0==t?this.each(function(){new $.snowfall(this,t)}):'string'==typeof t?this.each(function(){var t=$(this).data('snowfall');t&&t.clear()}):void 0};

var snowflakeImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAYAAABIiGl0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RjlFQjg3RDY0MkYxMUU0OUYxQTk4MEJDNDI3MUVEMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RjlFQjg3RTY0MkYxMUU0OUYxQTk4MEJDNDI3MUVEMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRGOUVCODdCNjQyRjExRTQ5RjFBOTgwQkM0MjcxRUQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRGOUVCODdDNjQyRjExRTQ5RjFBOTgwQkM0MjcxRUQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+frm4bAAAA65JREFUeNrM13toTnEcx/HdXDLD1oQxlzINzTW3P1xym3vKZC6lxB9za63EH4uaS25/uZS7XLdFIhTSWCyXmIRhbGxhRMPcGY/3V58npxN5ztO2nHr1nPOc3+93zu/+PaE+ny8kyOOEfscFkzkiiDyz0Axx+I4FaIoVnkqxGns0Bt9Q7ft9TPFaTpjH2o5ED0ThDkrRAq11L+Aj1GMfd0EhrqMRfuAdBiERxYEW5KXG4eiDfrinmvdCBbpjjPq6xmrcXrWxhKfQFUW4Yfn1ArF4iVRU4S4eBzq4lmMP4jAVUeiEZLxECS460l9HoeM6B5WowgjljVJZcSp7pT+9TafdaKD+s7eOx0K8wBn1aaxMRwzeolJ9bEdLbMYUXdvU6q0Bt1CD0KZfTw3MGOvjAjWl9dN73fiAa5iEg9iAj+rDVA2ieF3nYw7qK42lzVHeayorSl2QhAnIs2rH46DmozXfC1cTmjAswReUotwxh5/iHl5h7R/mbKHKPI+3OItWdiMNV9ED6Y4CLUESQpW5RP+XIVz/3dC5/16xzu1FW+CMo7zVaK3KbfLXpjmOoAIZGIwiZZiH2ziGxfovRIPlsM6/Y5kG6BOV4VN5wzBXrWIVbItof3NEYxdSXM00AZ9UyA79l62XOK7znWodu7deaT9imqusIdiOmF9T2HVzr6OQCPWr9Wm+3j5fL/NQtXyiKTRV+V4rzQNkIVJlFSDP+Sz3gxPwWU1m1xf0YP/9dbipvvQf1iK3sN+R7pH62s7nK13i3zYJm8spmr+ZOKTVx1auK9iKam2lCY58DbX0lmGL0rbDJeRiI55jop7hea2u2cPV1B3woS6a2v3gk7hSl4MrWkN9Yl1OJ1tAYlVYuZrG6wLyA0uRqSU0oAUkTc1rS+aqIJfM+7pXpQeEB7JktleT2Vtf/scm8VV9XuraJO6or7f/YZOwBz13bxIR2ocTFU1UaA4v06AfqFDHtsDZGKu0a3Afb/AFZ7W9HsEnlOMyLmqrnIwMNEFHjLYHz1TEaKFNYwVvNtH74zRuK9YKUQCQKwcUCCQrEEjQ/mxx9lVkYYiCwi76tbLOYag1RRM1SZYj9EnV6OuKkY7QpyDA0Ge48jbFDA2wXRpDv9L/F8Hev9hInYlu2OYYXNka/emqYUDleQ3oOyuOeqYWqNT304DaDOjtaIOV6IuviMQwLFKX1OpH2ygto9+0XlcH89EWzGeqTbPlGI962Ofan2vlo83fPTZ/jyooCOrD/KcAAwCotU9/uXNufgAAAABJRU5ErkJggg==';

$(document).snowfall({image :snowflakeImg, minSize: 5, maxSize:12, flakeCount: 50});


if ( document.location.hostname == 'allwebcafe.com' || document.location.hostname == 'www.allwebcafe.com' ) {
	/* Replace the Hero image with the Christmas-y fireplace and stockings image */
	$('html, body').animate({ scrollTop: 0 }, 'slow');
	$('.mc-image').css('background-image', 'url(//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/fp-test.jpg)');
	/* Swap out the H1 in the allwebcafe Hero Image with a custom holiday message */
	$('.mc-image').find('h1').html('Happy Holidays<br /><span class=\x22green-color\x22>from allwebcafe</span><br />');
	/* Loop through the images on the allwebcafe site. If they are headshots, replace them with Burl Ives' claymation Christmas characters */
	$('img').each(function() {
		if ( $(this).attr('src') == '/images/member_photos/photo_10.jpg' ) { /* If this is Brandon Morse */
			$(this).attr('src', '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/brandon-morse.jpg');
		} else if ( $(this).attr('src') == '/images/member_photos/photo_17.jpg' ) { /* If this is Jan Waldeck */
			$(this).attr('src', '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/jan-waldeck.jpg');
		} else if ( $(this).attr('src') == '/images/member_photos/photo_23.jpg' ) { /* If this is Paul Manz */
			$(this).attr('src', '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/paul-manz.jpg');
		} else if ( $(this).attr('src') == '/images/member_photos/photo_16.jpg' ) { /* If this is Nekeidra Filinov */
			$(this).attr('src', '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/nekeidra-filinov.jpg');
		} else if ( $(this).attr('src') == '/images/member_photos/photo_26.jpg' ) { /* If this is Kristin Conran */
			$(this).attr('src', '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/kristin-conran.jpg');
		} else if ( $(this).attr('src') == '/images/member_photos/photo_4.jpg' ) { /* If this is Steve Williams */
			$(this).attr('src', '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/steve-williams.jpg');
		}
	});
} else {
	$('body').wrapInner('<div></div>');
}

$('img:visible').not('.snowfall-flakes').each(function(i,img) {
	var origimg = $(this);

	margin = $(this).css('margin');
	padding = $(this).css('padding');

	var imgWid = $(this).width();
	var imgHgt = $(this).height();

	var divCanvas = $('<canvas>').attr({'width':imgWid,'height':imgHgt}).appendTo('body');

	var canvas = divCanvas[0],
		ctx = canvas.getContext('2d'),
		img = new Image;

	img.src = $(this).attr('src');
	img.setAttribute('crossOrigin','anonymous');

	img.onload = function() {
		var startPt = 0;

		/* console.log(origimg.attr('src') + ' ' + origimg.width() + ' ' + origimg.height() + ' ' + origimg.css('padding-top')); */
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, 20);

		if (imgHgt < 200) {
			var maxLen = imgHgt;
			var nextStartLong = 4;
			var nextStartShort = 3;
		} else {
			var maxLen = 200;
			var nextStartLong = 8;
			var nextStartShort = 6;
		}

		/* imgLoop = imgWid + ((imgWid/imgHgt*1.8)*100); */
		while (startPt < imgWid) {


			randLong = Math.floor((Math.random() * 20));

			if (randLong < 3) {
				length = Math.floor((Math.random() * maxLen) + 1);
				endPt = Math.floor((Math.random() * 10) + 1);
				nextStart = nextStartLong;
			}
			else {
				length = Math.floor((Math.random() * 7) + 1);
				endPt = Math.floor((Math.random() * 4) + 1);
				nextStart = nextStartShort;
			}

			ctx.quadraticCurveTo(startPt+4, length+20, startPt+nextStart, endPt);
			startPt += nextStart;
		}

		ctx.lineTo(imgWid,0);
		ctx.closePath();
		ctx.lineWidth = 1;
		ctx.fillStyle = 'rgba(220,220,250,0.7)';
		ctx.fill();
		ctx.strokeStyle = 'rgba(120,120,250,0.8)';
		ctx.stroke();

		dataInfo = canvas.toDataURL();

		origimg.css({'background-image':'url('+origimg.attr('src')+')', 'background-clip':'content-box', 'background-size':imgWid+'px '+imgHgt+'px', 'background-position':origimg.css('padding-left')+' '+origimg.css('padding-top')});
		origimg.attr({'src':dataInfo,'height':imgHgt,'width':imgWid});

		divCanvas.remove();
	}

});

/* THIS IS THE HTML BEING PREPENDED TO THE BODY */
/*

<style>

body {
	margin: 0;
	background-color: #aaa;
}

#awc-clack {
	pointer-events: none;
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 30%;
	pointer-events: none;
	animation: clackers 1s;
	-webkit-animation: clackers 1s;
}

@-webkit-keyframes clackers {
    from {top: -300px;}
    to {top: 0px;}
}

@keyframes clackers {
    from {top: -300px;}
    to {top: 0px;}
}

#awc-vignette {
	z-index: 1;
	transform: translateZ(0);
	opacity: 1;
	top: 0; 
	left: 0;
	position: fixed;
	pointer-events: none;
	animation: awc-vignette-anim 1s;
	-webkit-animation: awc-vignette-anim 1s;
}

@media (min-aspect-ratio: 1/1) { 
	#awc-vignette {
		height: 300%; 
		top: -100%;
	}
}

@media (max-aspect-ratio: 1/1) {
	#awc-vignette {
		width: 300%; 
		left: -100%;
	}
}

@supports (object-fit: cover) {
  	#awc-vignette {
  		top: 0;
  		left: 0;
		width: 100%; 
		height: 100%;
		object-fit: cover;
	}
}

@-webkit-keyframes awc-vignette-anim {
    from {opacity: 0;}
    to {opacity: 1;}
}

@keyframes awc-vignette-anim {
    from {opacity: 0;}
    to {opacity: 1;}
}

#awc-tree {
	display: block;
	position: absolute;
	width:33%; height:auto;
	right: 0px;
	bottom: 0px;
	pointer-events: none;
}

#awc-shnow {
	pointer-events: none;
	z-index: 10000;
	position: fixed;
	top: 0px;
	bottom: 0px;
	right: 0px;
	background-image: url('http://www.allwebcafe.com/public/images/labs/labs/christmasfy-bookmarklet/shnow.png');
	background-size: contain;
	background-position: right bottom;
	background-repeat: no-repeat;
	width: 100%;
	pointer-events: none;
	-webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
	animation: awc-shnow-anim 1s;
	-webkit-animation: awc-shnow-anim 1s;
}

@-webkit-keyframes awc-shnow-anim {
    from {bottom: -50%;}
    to {opacity: 0%;}
}
@keyframes awc-shnow-anim {
    from {bottom: -50%;}
    to {opacity: 0%;}
}

	</style><img id='awc-vignette' src='http://www.allwebcafe.com/public/images/labs/labs/christmasfy-bookmarklet/vignette.png'></canvas>
	<div id='awc-shnow'>
		<canvas id='awc-clack' width='360' height='300' style='top:0px;'></canvas>
		<canvas id='awc-tree' width='839' height='1400'></canvas>
	</div>

*/


$('body').prepend('<style> body { margin: 0; background-color: #aaa; } #awc-clack { display: block; position: absolute; top: 0; left: 0; width: 30%; pointer-events: none; animation: clackers 1s; -webkit-animation: clackers 1s; } @-webkit-keyframes clackers { from {top: -300px;} to {top: 0px;} } @keyframes clackers { from {top: -300px;} to {top: 0px;} } #awc-vignette { z-index: 1; transform: translateZ(0); opacity: 1; top: 0; left: 0; position: fixed; pointer-events: none; animation: awc-vignette-anim 1s; -webkit-animation: awc-vignette-anim 1s; } @media (min-aspect-ratio: 1/1) { #awc-vignette { height: 300%; top: -100%; } } @media (max-aspect-ratio: 1/1) { #awc-vignette { width: 300%; left: -100%; } } @supports (object-fit: cover) { #awc-vignette { top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; } } @-webkit-keyframes awc-vignette-anim { from {opacity: 0;} to {opacity: 1;} } @keyframes awc-vignette-anim { from {opacity: 0;} to {opacity: 1;} } #awc-tree { display: block; position: absolute; width:33%; height:auto; right: 0px; bottom: 0px; pointer-events: none; } #awc-shnow { z-index: 10000; position: fixed; top: 0px; bottom: 0px; right: 0px; background-image: url(\'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/shnow.png\'); background-size: contain; background-position: right bottom; background-repeat: no-repeat; width: 100%; pointer-events: none; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; animation: awc-shnow-anim 1s; -webkit-animation: awc-shnow-anim 1s; } @-webkit-keyframes awc-shnow-anim { from {bottom: -50%;} to {opacity: 0%;} } @keyframes awc-shnow-anim { from {bottom: -50%;} to {opacity: 0%;} } </style><img id=\'awc-vignette\' src=\'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/vignette.png\'></canvas> <div id=\'awc-shnow\'> <canvas id=\'awc-clack\' width=\'360\' height=\'300\' style=\'top:0px;\'></canvas> <canvas id=\'awc-tree\' width=\'839\' height=\'1400\'></canvas> </div>');

window.requestAnimFrame = (function()
{
    return  window.requestAnimationFram           || 
            window.webkitRequestAnimationFrame    || 
            window.mozRequestAnimationFrame       || 
            window.oRequestAnimationFrame         || 
            window.msRequestAnimationFrame        || 
            function(/* function */ callback, /* DOMElement */ element)
            {
                window.setTimeout(callback, 1000 / 60);
            };
})();       

var imagesLoaded = 0;
var imagesToLoad = 0;

var canvas = document.getElementById('awc-clack');
var ctx	= canvas.getContext('2d');

var images = [new Image(), new Image(), new Image(), new Image(), new Image()];
images[0].src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/orn1.png';
imagesToLoad++;
images[1].src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/orn2.png';
imagesToLoad++;
images[2].src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/orn3.png';
imagesToLoad++;
images[3].src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/orn4.png';
imagesToLoad++;
images[4].src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/orn5.png';
imagesToLoad++;

/*****************************************************************/
var awctreecanvas = document.getElementById('awc-tree');
var awctreectx	= awctreecanvas.getContext('2d');

var treeImage = new Image();
treeImage.src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/tree.png';
imagesToLoad++;

var treePuff = new Image();
treePuff.src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/puff.png';
imagesToLoad++;

var treeLightsOff = new Image();
treeLightsOff.src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/tree-lights.png';
imagesToLoad++;
var treeLights = [new Image(), new Image(), new Image()];
treeLights[0].src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/tree-lights0.png';
imagesToLoad++;
treeLights[1].src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/tree-lights1.png';
imagesToLoad++;
treeLights[2].src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/tree-lights2.png';
imagesToLoad++;

/*var box1 = new box();
box1.src = 'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/boxtest.png';*/


images[0].onload = function(){ imageLoaded(); };
images[1].onload = function(){ imageLoaded(); };
images[2].onload = function(){ imageLoaded(); };
images[3].onload = function(){ imageLoaded(); };
images[4].onload = function(){ imageLoaded(); };
treeImage.onload = function(){ imageLoaded(); };
treePuff.onload = function(){ imageLoaded(); };
treeLightsOff.onload = function(){ imageLoaded(); };
treeLights[0].onload = function(){ imageLoaded(); };
treeLights[1].onload = function(){ imageLoaded(); };
treeLights[2].onload = function(){ imageLoaded(); };
/*box1.onload = function(){ imageLoaded(); };*/

var tree = new xmasTree(treeImage, 0.35);

var treedelay = parseInt(60 * 1);
var treeticker = 0;

/*var xmasbox = new box();*/


/* OUR CLACKER OBJECT */
function circle(x, y, pointx, pointy, radius, image)
{
	this.x = x;
	this.y = y;
	this.pointx = pointx;
	this.pointy = pointy;
	this.radius = radius;
	this.stringcolor = '#70431a';
	this.fillstyle = '#000000';
	this.image = image;
	this.velocityx = 0;
	this.velocityy = 0;
	this.velocitymax = 2;
	this.velocitybasemax = 2;
	this.accx = .1;
	this.accy = 0;

	this.draw = draw;
	function draw()
	{

		ctx.shadowColor = 'rgba(0,0,0,.25)';
		ctx.shadowOffsetX = 10;
		ctx.shadowOffsetY = 10;
		ctx.shadowBlur = 10;

		ctx.strokeStyle = this.stringcolor;
		ctx.beginPath();
		ctx.moveTo(this.pointx, 0);
		ctx.lineTo(this.x, this.y-52);
		ctx.closePath();
		ctx.stroke();

		ctx.fillStyle = this.fillstyle;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		ctx.closePath();
		ctx.fill();

		ctx.shadowColor = 'black';
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 0;

		ctx.drawImage(this.image, this.x-(image.width/2), this.y-(image.height/2)-10, image.width, image.height);
	}

	this.process = process;
	function process()
	{
		if(this.velocityx<0.5 && this.velocityx>-0.5 && Math.abs(this.x - this.pointx) < 0.5)
		{
			this.velocityx = 0;
			this.x = this.pointx;
		}
		else
		{
			if(this.x < this.pointx)
			{
				this.velocityx += this.accx;
			}
			else
			{
				this.velocityx -= this.accx;
			}
			if(this.y < this.pointy)
			{
				this.velocityy += this.accy;
			}
			else
			{
				this.velocityy -= this.accy;
			}
			if(this.velocityx > this.velocitymax)
			{
				this.velocityx = this.velocitymax;
			}
			else if(this.velocityx < (this.velocitymax * -1) )
			{
				this.velocityx = -this.velocitymax;
			}
			else
			{
				this.velocitymax *= .99;
			}

			this.x += this.velocityx;
			this.y += this.velocityy;
		}
	}
}

/* OUR TREE OBJECT */
function xmasTree(image, growthtime)
{
	this.image = image;
	this.targetwidth = 559;
	this.targetheight = 654;
	this.initialwidth = this.targetwidth*1.5;
	this.initialheight = 0;
	this.width = this.initialwidth;
	this.height = this.initialheight;
	this.steps = 0;
	this.stepduration = 60 * growthtime;
	this.scaleacc = 0.01; /*SCALE ACCELERATION*/
	this.scalevel = 0; /*SCALE VELOCITY*/
	var overflowratio = 1.2;
	var endratio = 1.35;
	this.ratio = 0;
	this.stopgrow = false;

	/* FOR LIGHT ANIMATION */
	this.currentlight = 0;
	this.currentlightstage = 'turnon';
	this.currentlightstep = 0;

	/* FOR PUFF */
	this.puffy = awctreecanvas.height-200;
	this.puffspeed = 45;
	this.pufftransp = 1;

	this.draw = draw;
	function draw()
	{
		var treex = (awctreecanvas.width / 2) - (this.width/2);
		var treey = awctreecanvas.height - this.height - 147;
		awctreectx.drawImage(this.image, treex, treey, this.width, this.height);

		/* DO THE LIGHTS UP WUT WUT */
		this.drawLights(treex, treey);

		/* MAKE SNOW PUFFS */
		awctreectx.globalAlpha = this.pufftransp;
		awctreectx.drawImage(treePuff, parseInt(awctreecanvas.width/2 - (this.targetwidth*0.6)), this.puffy, parseInt(this.targetwidth*1.2), 200);
		awctreectx.globalAlpha = 1;
	}
	

	this.process = process;
	function process()
	{
		if(this.ratio<1 && this.scalevel >= 0 )
		{
			this.scalevel += this.scaleacc;
			this.ratio += this.scalevel;
		}
		else if(this.ratio >= 1 && this.stopgrow == false)
		{
			this.scalevel -= this.scaleacc*1.75;
			this.ratio += this.scalevel;

			if(this.ratio<1)
			{
				this.ratio = 1;
			}
		}
		else
		{
			this.ratio = 1;	
			this.stopgrow = true;
		}
		this.width = this.initialwidth + ((this.targetwidth - this.initialwidth)  * this.ratio);
		this.height = this.initialheight + ((this.targetheight - this.initialheight)  * this.ratio);
		this.puffy -= this.puffspeed;
		this.pufftransp -= .075;
		if(this.pufftransp<0)
		{
			this.pufftransp = 0;
		}
	}

	this.drawLights = drawLights;
	function drawLights(treex, treey)
	{
		awctreectx.drawImage(treeLightsOff, treex, treey, this.width, this.height);
		if(this.currentlightstage=='turnon')
		{
			awctreectx.globalAlpha = this.currentlightstep/10;
		}
		else if(this.currentlightstage=='turnoff')
		{
			awctreectx.globalAlpha = (10-this.currentlightstep)/10;
		}
		awctreectx.drawImage(treeLights[this.currentlight], treex, treey, this.width, this.height);
		awctreectx.globalAlpha = 1;

		this.currentlightstep++;
		if(this.currentlightstep==10 && this.currentlightstage=='turnon')
		{
			this.currentlightstage = 'stayon';			
			this.currentlightstep = 0;
		}
		else if(this.currentlightstep==35 && this.currentlightstage=='stayon')
		{
			this.currentlightstage = 'turnoff';
			this.currentlightstep = 0;
		}
		else if(this.currentlightstep==10 && this.currentlightstage=='turnoff')
		{
			this.currentlightstage = 'turnon';		
			this.currentlightstep = 0;
			this.currentlight++;
			if(this.currentlight>2)
			{
				this.currentlight = 0;
			}
		}
	}
}

function box()
{
	this.draw = draw;
	function draw()
	{
		/*awctreectx.drawImage(box1, 0, awctreecanvas.height-200, 100, 100);*/
	}

	this.process = process;
	function process()
	{
		
	}
}

/* OUR HIT DETECTION */
function circleHitDetection(x1, y1, radius1, x2, y2, radius2)
{
	var dx = x2 - x1;
	var dy = y2 - y1;
	var radii = radius1 + radius2;
	if( (dx*dx) + (dy*dy) < radii*radii)
	{
		return true;
	}
}

/* INITIALIZE STUFFS */
var clackers = [
	new circle(30, 117, 70, 117, 37, images[0]),
	new circle(151, 202, 121, 202, 37, images[1]),
	new circle(133, 78, 173, 78, 38, images[2]),
	new circle(247, 164, 227, 164, 37, images[3]),
	new circle(251, 98, 283, 98, 38, images[4])
	];



function imageLoaded() {

	imagesLoaded++;
	if(imagesLoaded == imagesToLoad)
	{

		/* DRAW TREE */
		enterFrame();

		/* CAUSE CLACKERS TO MOVE */
		window.onscroll = function() {

			for(var i=0; i<clackers.length; i++)
			{
				if(clackers[i].velocityx == 0 )
				{
					var range = 2;
					var rand = ((Math.random()*range)-(range/2))*2;
					clackers[i].velocitybasemax = Math.abs(rand);
					clackers[i].velocitymax = Math.abs(rand);
					clackers[i].velocityx = rand;
				}
			}
		}
	}
}

/* WHAT TO DO EACH FRAME */
function enterFrame()
{
	process();
	draw();
	window.requestAnimFrame(enterFrame);
}

/* DRAW ALL CLACKERS */
function draw()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	awctreectx.clearRect(0,0,awctreecanvas.width,awctreecanvas.height);

	for(var i=0; i<clackers.length; i++)
	{
		clackers[i].draw();
	}
	tree.draw();
	/*xmasbox.draw();*/

}

/* MOVE ALL CLACKERS */
function process()
{
	for(var i=0; i<clackers.length; i++)
	{
		clackers[i].process();
	}
	if(treeticker==treedelay)
	{
		tree.process();
	}
	else
	{
		treeticker++;
	}
	/*xmasbox.process();*/
}


    });