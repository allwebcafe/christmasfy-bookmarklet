javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement('script');c.type='text/javascript';c.src='//ajax.googleapis.com/ajax/libs/jquery/'+g+'/jquery.min.js';c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=='loaded'||d=='complete')){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.body.appendChild(c)}})(window,document,'1.8',function($,L){  


if($("#awc-shnow").length==0)
{

	/* LET IT SNOW */
	flakeCount = 30;
	var snowflakeImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAYAAABIiGl0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RjlFQjg3RDY0MkYxMUU0OUYxQTk4MEJDNDI3MUVEMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RjlFQjg3RTY0MkYxMUU0OUYxQTk4MEJDNDI3MUVEMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRGOUVCODdCNjQyRjExRTQ5RjFBOTgwQkM0MjcxRUQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRGOUVCODdDNjQyRjExRTQ5RjFBOTgwQkM0MjcxRUQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+frm4bAAAA65JREFUeNrM13toTnEcx/HdXDLD1oQxlzINzTW3P1xym3vKZC6lxB9za63EH4uaS25/uZS7XLdFIhTSWCyXmIRhbGxhRMPcGY/3V58npxN5ztO2nHr1nPOc3+93zu/+PaE+ny8kyOOEfscFkzkiiDyz0Axx+I4FaIoVnkqxGns0Bt9Q7ft9TPFaTpjH2o5ED0ThDkrRAq11L+Aj1GMfd0EhrqMRfuAdBiERxYEW5KXG4eiDfrinmvdCBbpjjPq6xmrcXrWxhKfQFUW4Yfn1ArF4iVRU4S4eBzq4lmMP4jAVUeiEZLxECS460l9HoeM6B5WowgjljVJZcSp7pT+9TafdaKD+s7eOx0K8wBn1aaxMRwzeolJ9bEdLbMYUXdvU6q0Bt1CD0KZfTw3MGOvjAjWl9dN73fiAa5iEg9iAj+rDVA2ieF3nYw7qK42lzVHeayorSl2QhAnIs2rH46DmozXfC1cTmjAswReUotwxh5/iHl5h7R/mbKHKPI+3OItWdiMNV9ED6Y4CLUESQpW5RP+XIVz/3dC5/16xzu1FW+CMo7zVaK3KbfLXpjmOoAIZGIwiZZiH2ziGxfovRIPlsM6/Y5kG6BOV4VN5wzBXrWIVbItof3NEYxdSXM00AZ9UyA79l62XOK7znWodu7deaT9imqusIdiOmF9T2HVzr6OQCPWr9Wm+3j5fL/NQtXyiKTRV+V4rzQNkIVJlFSDP+Sz3gxPwWU1m1xf0YP/9dbipvvQf1iK3sN+R7pH62s7nK13i3zYJm8spmr+ZOKTVx1auK9iKam2lCY58DbX0lmGL0rbDJeRiI55jop7hea2u2cPV1B3woS6a2v3gk7hSl4MrWkN9Yl1OJ1tAYlVYuZrG6wLyA0uRqSU0oAUkTc1rS+aqIJfM+7pXpQeEB7JktleT2Vtf/scm8VV9XuraJO6or7f/YZOwBz13bxIR2ocTFU1UaA4v06AfqFDHtsDZGKu0a3Afb/AFZ7W9HsEnlOMyLmqrnIwMNEFHjLYHz1TEaKFNYwVvNtH74zRuK9YKUQCQKwcUCCQrEEjQ/mxx9lVkYYiCwi76tbLOYag1RRM1SZYj9EnV6OuKkY7QpyDA0Ge48jbFDA2wXRpDv9L/F8Hev9hInYlu2OYYXNka/emqYUDleQ3oOyuOeqYWqNT304DaDOjtaIOV6IuviMQwLFKX1OpH2ygto9+0XlcH89EWzGeqTbPlGI962Ofan2vlo83fPTZ/jyooCOrD/KcAAwCotU9/uXNufgAAAABJRU5ErkJggg==';

	function Flake() {
		this.x = Math.floor((Math.random() * $(window).width()) + 10);
		this.y = Math.floor(Math.random()*$(window).height()+1);
		this.size = Math.floor((Math.random() * 10) + 8);
		this.speed = Math.floor((Math.random() * 10) + 1);
	    this.step = 0;
	    this.stepSize = (Math.floor((Math.random() * 10)))/100;

		this.element = $('<img>').addClass('awc-snow-flake').attr({'src':snowflakeImg}).css({'pointer-events':'none','width':this.size,'height':this.size,'position':'absolute','top':this.y,'left':this.x,'z-index':'9999'}).appendTo('body');

		this.update = update;
		function update() {
			this.y += this.speed;
	        if (this.x > $(window).width()-30) {
	            this.reset();
	        }
			if (($('body').scrollTop()+$(window).height()-25) < this.y) {
				this.reset();
			}

	        this.x += Math.cos(this.step);
	        this.step += this.stepSize;

			this.element.css({'top':this.y,'left':this.x});
		}

		this.reset = reset;
		function reset() {
			this.x = Math.floor((Math.random() * $(window).width()-32) + 20);
			this.y = $('body').scrollTop();
			this.size = Math.floor((Math.random() * 12) + 8);
			this.speed = Math.floor((Math.random() * 10) + 1);
	    	this.step = 0;
	    	this.stepSize = (Math.floor((Math.random() * 10)))/100;

			this.element.css('left',this.x);
		}
	}

	function letItSnow(){
	    for( i = 0; i < flakes.length; i += 1){
	        flakes[i].update();
	    }
	    
	    snowTimeout = requestAnimationFrame(function(){letItSnow()});
	}

	var flakes = [];
	for(i = 0; i < flakeCount; i++){
	    flakes.push(new Flake());
	}

	letItSnow();

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
	} 

	/* CREATE ICE CYCLES */
	var icePattern = 'data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAiAAD/4QNfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjMxRDhGOTEwMzU5RTg1OUYyMTYwRkNGOUMyRjlBRkExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQyMURFMjdBNjg0QTExRTQ4NDAyQjM4NzU1ODZDMURBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQyMURFMjc5Njg0QTExRTQ4NDAyQjM4NzU1ODZDMURBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjg3RjExNzQwNzIwNjgxMTgyMkFENTc1NjNCNTdEQjEiIHN0UmVmOmRvY3VtZW50SUQ9IjMxRDhGOTEwMzU5RTg1OUYyMTYwRkNGOUMyRjlBRkExIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNr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';
	var imgIcePattern = new Image;
	imgIcePattern.src = icePattern;

	$('img:visible').not().not('.awc-snow-flake').each(function(i,img) {
	    if ($(this).attr('src').substr(($(this).attr('src').lastIndexOf('.') +1)) == 'png')
	        return true;

	    var origimg = $(this);

	    margin = $(this).css('margin');
	    padding = $(this).css('padding');

	    var imgWid = $(this).width();
	    var imgHgt = $(this).height();

	    var divCanvas = $('<canvas>').attr({'width':imgWid,'height':imgHgt}).appendTo('body');

	    var canvas = divCanvas[0],
	        ctx = canvas.getContext('2d'),
	        img = new Image,
	        icePat = ctx.createPattern(imgIcePattern,'repeat');

	    img.src = $(this).attr('src');
	    img.setAttribute('crossOrigin','anonymous');

	    img.onload = function() {
	        var startPt = 0;

	        ctx.beginPath();
	        ctx.moveTo(0, 0);
	        ctx.lineTo(0, 20);

	        if (imgHgt < 200) {
	            var maxLen = imgHgt;
	            var nextStartLong = 2;
	            var nextStartShort = 1;
	        } else {
	            var maxLen = 200;
	            var nextStartLong = 5;
	            var nextStartShort = 6;
	        }

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
	        ctx.fillStyle = icePat;
	        ctx.fill();
	        ctx.strokeStyle = 'rgba(120,120,250,0.2)';
	        ctx.stroke();

	        dataInfo = canvas.toDataURL();

	        origimg.css({'background-image':'url('+origimg.attr('src')+')', 'background-clip':'content-box', 'background-size':imgWid+'px '+imgHgt+'px', 'background-position':origimg.css('padding-left')+' '+origimg.css('padding-top')});
	        origimg.attr({'src':dataInfo,'height':imgHgt,'width':imgWid});

	        divCanvas.remove();
	    }

	});


	$('body').prepend('<style> body { margin: 0; } #awc-clack { max-width: 360px; display: block; position: absolute; top: 0; left: 0; width: 30%; pointer-events: none; animation: clackers 1s; -webkit-animation: clackers 1s; } @-webkit-keyframes clackers { from {top: -300px;} to {top: 0px;} } @keyframes clackers { from {top: -300px;} to {top: 0px;} } #awc-snow { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url(\'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/shnow.png\'); background-size: 100%; background-position: right bottom; background-repeat: no-repeat;  } #awc-frost { width: 100%; height: 100%; background-image: url(\'http://www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/vignette.png\'); background-size: cover; pointer-events: none; animation: awc-vignette-anim 30s; -webkit-animation: awc-vignette-anim 30s; } @media (min-aspect-ratio: 1/1) { #awc-vignette { height: 300%; top: -100%; } } @media (max-aspect-ratio: 1/1) { #awc-vignette { width: 300%; left: -100%; } } @supports (object-fit: cover) { #awc-vignette { top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; } } @-webkit-keyframes awc-vignette-anim { from {opacity: 0;} to {opacity: 1;} } @keyframes awc-vignette-anim { from {opacity: 0;} to {opacity: 1;} } #awc-tree { display: block; position: absolute; width:33%; height: auto; right: -6.5%; bottom: 0px; pointer-events: none; } #awc-shnow { z-index: 10000; position: fixed; top: 0px; bottom: 0px; right: 0px;  width: 100%; height: 100%;  pointer-events: none; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; animation: awc-shnow-anim 1s; -webkit-animation: awc-shnow-anim 1s; } @-webkit-keyframes awc-shnow-anim { from {bottom: -50%;} to {opacity: 0%;} } @keyframes awc-shnow-anim { from {bottom: -50%;} to {opacity: 0%;} } </style> </canvas> <div id=\'awc-shnow\'> <div id=\'awc-frost\'></div> <div id=\'awc-snow\'></div> <canvas id=\'awc-clack\' width=\'360\' height=\'300\' style=\'top:0px;\'></canvas> <canvas id=\'awc-tree\' width=\'839\' height=\'1400\'></canvas> </div> ');

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
	images[0].src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/orn1.png';
	imagesToLoad++;
	images[1].src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/orn2.png';
	imagesToLoad++;
	images[2].src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/orn3.png';
	imagesToLoad++;
	images[3].src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/orn4.png';
	imagesToLoad++;
	images[4].src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/orn5.png';
	imagesToLoad++;

	/*****************************************************************/
	var awctreecanvas = document.getElementById('awc-tree');
	var awctreectx	= awctreecanvas.getContext('2d');

	var treeImage = new Image();
	treeImage.src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/tree.png';
	imagesToLoad++;

	var treePuff = new Image();
	treePuff.src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/puff.png';
	imagesToLoad++;
	var needlesPuff = new Image();
	needlesPuff.src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/pine-needles.png';
	imagesToLoad++;

	var treeLightsOff = new Image();
	treeLightsOff.src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/tree-lights.png';
	imagesToLoad++;
	var treeLights = [new Image(), new Image(), new Image()];
	treeLights[0].src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/tree-lights0.png';
	imagesToLoad++;
	treeLights[1].src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/tree-lights1.png';
	imagesToLoad++;
	treeLights[2].src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/tree-lights2.png';
	imagesToLoad++;

	var box1img = new Image();
	box1img.src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/gift1.png';
	imagesToLoad++;
	var box2img = new Image();
	box2img.src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/gift2.png';
	imagesToLoad++;
	var box3img = new Image();
	box3img.src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/gift3.png';
	imagesToLoad++;
	var box4img = new Image();
	box4img.src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/gift4.png';
	imagesToLoad++;
	var box5img = new Image();
	box5img.src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/gift5.png';
	imagesToLoad++;
	var box6img = new Image();
	box6img.src = '//www.allwebcafe.com/public/images/labs/christmasfy-bookmarklet/gift6.png';
	imagesToLoad++;


	images[0].onload = function(){ imageLoaded(); };
	images[1].onload = function(){ imageLoaded(); };
	images[2].onload = function(){ imageLoaded(); };
	images[3].onload = function(){ imageLoaded(); };
	images[4].onload = function(){ imageLoaded(); };
	treeImage.onload = function(){ imageLoaded(); };
	treePuff.onload = function(){ imageLoaded(); };
	needlesPuff.onload = function(){ imageLoaded(); };
	treeLightsOff.onload = function(){ imageLoaded(); };
	treeLights[0].onload = function(){ imageLoaded(); };
	treeLights[1].onload = function(){ imageLoaded(); };
	treeLights[2].onload = function(){ imageLoaded(); };
	box1img.onload = function(){ imageLoaded(); };
	box2img.onload = function(){ imageLoaded(); };
	box3img.onload = function(){ imageLoaded(); };
	box4img.onload = function(){ imageLoaded(); };
	box5img.onload = function(){ imageLoaded(); };
	box6img.onload = function(){ imageLoaded(); };

	var tree = new xmasTree(treeImage, 0.35);

	var treedelay = parseInt(60 * 1);
	var treeticker = 0;
	var scalegiftanim = 0.5;
	var giftdelay = [parseInt(60 * 1.4), parseInt(60 * 1.5), parseInt(60 * 1.6), parseInt(60 * 1.8), parseInt(60 * 1.85), parseInt(60 * 2)];
	var giftticker = [0, 0, 0, 0, 0, 0];

	var gifts = [new box(box1img, 196, awctreecanvas.height-123, 122, 122), new box(box2img, 248, awctreecanvas.height-101, 117, 139), new box(box3img, 445, awctreecanvas.height-110, 157, 145), new box(box4img, 319, awctreecanvas.height-52, 151, 168), new box(box5img, 575, awctreecanvas.height-120, 115, 131), new box(box6img, 530, awctreecanvas.height-80, 116, 128)];


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

		/* FOR NEEDLES */
		this.needlesactive = false;
		this.needlesorigin = awctreecanvas.height-300;
		this.needlesy = this.needlesorigin;
		this.needlesspeed = 15;
		this.needlestransp = 0;

		/* FOR TREE ROTATION */
		this.shake = false;
		this.maxrotate = 0.35;
		this.treerotate = 0;

		this.draw = draw;
		function draw()
		{
			/* DRAW NEEDLES */
			if(this.needlesactive)
			{
				/* MAKE NEEDLE PUFFS */
				awctreectx.globalAlpha = this.needlestransp;
				awctreectx.drawImage(needlesPuff, parseInt(awctreecanvas.width/2 - (this.targetwidth*0.6)), this.needlesy, parseInt(this.targetwidth*1.2), 200);
				awctreectx.globalAlpha = 1;
			}

			/* DRAW TREE */
			awctreectx.save();
			awctreectx.translate(awctreecanvas.width / 2, awctreecanvas.height - 147);

			awctreectx.rotate((Math.sin(this.treerotate)*this.maxrotate)*Math.PI/180);

			var treex = -(this.width/2);
			var treey = -this.height;
			awctreectx.drawImage(this.image, treex, treey, this.width, this.height);

			awctreectx.restore();

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

			this.pufftransp -= .075;
			if(this.pufftransp<=0)
			{
				this.pufftransp = 0;
			}
			else
			{
				this.puffy -= this.puffspeed;
			}

			if(this.needlesactive)
			{
				this.needlestransp -= .04;
				if(this.needlestransp<=0)
				{
					this.needlestransp = 0;
					this.needlesactive = false;
				}
				else
				{
					this.needlesy -= this.needlesspeed;
				}
			}

			if(this.shake)
			{
				//ROTATE TREE
				this.treerotate += .75;
				this.shake = false;
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

	function box(image, x, y, width, height)
	{
		this.image = image;
		this.initialwidth = width*1.2;
		this.initialheight = 0;
		this.width = this.initialwidth;
		this.height = this.initialheight;
		this.targetwidth = width;
		this.targetheight = height;
		this.scalevel = 0;
		this.scaleacc = .01;
		this.ratio = 0;
		this.stopgrow = false;
		this.x = x;
		this.y = y;
		this.jump = 150 + (Math.random()*100);

		/* FOR PUFF */
		this.puffy = this.y;
		this.puffspeed = 17;
		this.pufftransp = 1;

		this.draw = draw;
		function draw()
		{
			var boxx = this.x - (this.width/2);
			var boxy = this.y - this.height;
			if(this.ratio>1)
			{
				boxy -= (this.ratio - 1) * this.jump;
			}
			awctreectx.drawImage(this.image, boxx, boxy, this.width, this.height);

			/* MAKE SNOW PUFFS */
			var puffx = this.x - (this.targetwidth*0.75);
			awctreectx.globalAlpha = this.pufftransp;
			awctreectx.drawImage(treePuff, puffx, this.puffy, parseInt(this.targetwidth*1.2), 75);
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
			this.pufftransp -= .04;
			if(this.pufftransp<0)
			{
				this.pufftransp = 0;
			}	
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

				tree.shake = true;

				if(!(tree.needlesactive))
				{
					tree.needlesactive = true;
					tree.needlestransp = 1;
					tree.needlesy = tree.needlesorigin;
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
		for(var i=0; i<gifts.length; i++)
		{
			gifts[i].draw();
		}

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
		for(var i=0; i<gifts.length; i++)
		{
			if(giftticker[i]==giftdelay[i])
			{
				gifts[i].process();
			}
			else
			{
				giftticker[i]++;
			}
		}
	}

}


    });