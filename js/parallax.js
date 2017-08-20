var currentBox;

// Disable mouse wheel click
document.addEventListener("mouseup", function(e){
    if(e.button == 1){
      e.preventDefault();
      $("html, body").animate({ scrollTop: $("#"+currentBox).offset().top }, 250);
    }
  }, true);
  
var goTo;

// Create boxes

function createBoxes(){
	var cont=document.getElementById("bg");
	var right=document.getElementById("parallaxRight");
	var left=document.getElementById("parallaxLeft");


	var boxes=5;
	var colors=["#FF6600", "#FFCC66", "#99FF66", "#99CCFF", "#FF0066"];
	var bgColors=["#FFCC00", "#FF3300", "#009933", "#33CCCC", "#990099"];

	currentBox=0;
	var scrollTimer=null;
	var resizeTimer;
	
	
	// FUNCTIONS
	function scrollDown(){
			
	
			if (currentBox<(boxes-1))
			{
				scrollTimer=null;
				currentBox+=1;
				if(currentBox==boxes-1){
					$("#bottom").fadeOut(500);
				}else{
					$('#top').fadeIn(500);
				}
			
		
				$('#bg').animate( { "top": (-currentBox*100)+'%' }, 500);
				$('#parallaxLeft').animate({'top': (currentBox*100)+'%'}, 500);
				$('#parallaxRight').animate({'top': (currentBox*100)+'%'}, 500);
		
			
				$("#mini"+(currentBox-1)).animate( { "padding": '0' }, 500);
				$("#mini"+currentBox).animate( { "padding": '10%' }, 500);
				//Text fade effect
				$("#abs"+currentBox).fadeOut(5);
				$("#abs"+currentBox).fadeIn(1000);	
				//-STOP- text fade effect
		
			
		}	
			
	}
	
	function scrollUp(){	
		
		
			if (currentBox>0)
			{
				scrollTimer=null;
				currentBox-=1;
				if(currentBox==0){
					$("#top").fadeOut(500);
				}else{
					$('#bottom').fadeIn(500);
				
				}
		
				$('#bg').animate( { "top": (-currentBox*100)+'%' }, 500);
				$('#parallaxLeft').animate({'top': (currentBox*100)+'%'}, 500);
				$('#parallaxRight').animate({'top': (currentBox*100)+'%'}, 500);
				
				$("#mini"+(currentBox+1)).animate( { "padding": '0' }, 500);
				$("#mini"+currentBox).animate( { "padding": '10%' }, 500);
				//Text fade effect
				$("#abs"+currentBox).fadeOut(5);
				$("#abs"+currentBox).fadeIn(1000);	
				//-STOP- text fade effect
			
	
	
			}
				
			
			
		
	
	}
	
	goTo=function(number){
		if(number==0){
				$("#top").fadeOut(500);
				$("#bottom").fadeIn(500);
		}else if(number==(boxes-1)){
				$("#bottom").fadeOut(500);
				$("#top").fadeIn(500);
		}else{
				$('#bottom').fadeIn(500);
				$('#top').fadeIn(500);				
			}
		$('#bg').animate( { "top": (-number*100)+'%' }, 500);
		$('#parallaxLeft').animate({'top': (number*100)+'%'}, 500);
		$('#parallaxRight').animate({'top': (number*100)+'%'}, 500);
				
		$("#mini"+(currentBox)).animate( { "padding": '0' }, 500);
		$("#mini"+number).animate( { "padding": '10%' }, 500);
		//Text fade effect
		$("#abs"+number).fadeOut(5);
		$("#abs"+number).fadeIn(1000);	
		//-STOP- text fade effect
		
		currentBox=number;
	
	}
	
	function resizeEv(){
		$("html, body").animate({ scrollTop: $("#"+currentBox).offset().top }, 250);
		// Abs div regolation
		for(var i=0; i<boxes; i++){
			$("#abs"+i).css({"left":"1%", "width":"97%"});	
		}
		$(".circles").css({"width":"4%"});
		$(".circles").css({"height":$(".circles").width()+"px"});
		$("#graphicsPos").css({"width":"2%"});
		$(".miniCircles").css({"width":"70%"});
		$(".miniCircles").css({"height":$(".miniCircles").width()+"px"});
	
	}
	
	// -STOP- FUNCTIONS
	
	// CREATE Colorful boxes

	for(var i=0; i<(boxes-1); i++){		
		cont.innerHTML+=("<div class='bgBoxes'></div>");
		left.innerHTML+=("<div class='leftBoxes' style='height:100%; background-color:"+colors[boxes-1-i]+"'></div>");
		right.innerHTML+=("<div class='rightBoxes' style='height:100%; background-color:"+colors[boxes-1-i]+"'></div>");
		}
		
		
	cont.innerHTML+=("<div id='0' class='bgBoxes' style='background-color:"+bgColors[0]+"'></div>");
	left.innerHTML+=("<div class='leftBoxes' style='height:100%; background-color:"+colors[0]+"'></div>");
	right.innerHTML+=("<div class='rightBoxes' style='height:100%; ; background-color:"+colors[0]+"'></div>");
		
	for(var i=1; i<(boxes); i++){		
		cont.innerHTML+=("<div class='bgBoxes' id='"+i+"' style='background-color:"+bgColors[i]+"'></div>");
		left.innerHTML+=("<div class='leftBoxes' style='height:100%;'></div>");
		right.innerHTML+=("<div class='rightBoxes' style='height:100%; '></div>");
		}
	
	    
		
	// -STOP- CREATE Colorful Boxes
	
	
	
	// Mousewheel events	
	
	/*Firefox*/
	 $("body").bind('DOMMouseScroll', function(e){
		 if(e.originalEvent.detail > 0) {
			 //scroll down
		
			if(scrollTimer){
				clearTimeout(scrollTimer);
			}
			scrollTimer=setTimeout(scrollDown, 250);
				
		 }else {
			 //scroll up
			 
			if(scrollTimer){
				clearTimeout(scrollTimer);
			}			
			scrollTimer=setTimeout(scrollUp, 250);
				
		 }

		 //prevent page fom scrolling
		 return false;
	 });

	 /*IE, Opera, Safari*/
	 $("body").bind('mousewheel', function(e){
		 if(e.originalEvent.wheelDelta < 0) {
			 //scroll down
			 
			if(scrollTimer){
				clearTimeout(scrollTimer);
			}			
			scrollTimer=setTimeout(scrollDown, 250);
				
		 }else {
			//scroll up
			
			if(scrollTimer){
				clearTimeout(scrollTimer);
			}			
			scrollTimer=setTimeout(scrollUp, 250);
				
		 }

		 //prevent page fom scrolling
		 return false;
	 });
	
	
	
	
	//insert mini circles in graphicsPos
	for(var i=0; i<boxes; i++){
		document.getElementById("graphicsPos").innerHTML+="<a href='javascript:void(0)'> <div id='mini"+i+"' class='miniCircles' onclick='goTo("+i+")'></div> </a>";
	}
	
	
	
	$('#top').click(function(e) {  
        scrollUp();
    });
	
	$('#bottom').click(function(e) {  
        scrollDown();
    });
	
	
	$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(resizeEv, 100);
	});
	
	
	$("#graphicsPos").css({"width":"2%"});
	$(".miniCircles").css({"width":"70%"});
	$(".miniCircles").css({"height":$(".miniCircles").width()+"px"});
	
	
	// Inserting HTML
	for(var i=0; i<boxes; i++){
		insertHtml("hiddenContent"+i, String(i));
	}

	
}

function createBoxesMobile(){
	var cont=document.getElementById("bg");
	var right=document.getElementById("parallaxRight");
	var left=document.getElementById("parallaxLeft");


	var boxes=5;
	var colors=["#FF6600", "#FFCC66", "#99FF66", "#99CCFF", "#FF0066"];
	var bgColors=["#FFCC00", "#FF3300", "#009933", "#33CCCC", "#990099"];

	currentBox=0;
	
	
	// FUNCTIONS

	$(window).scroll(function() {
		var height = $(window).scrollTop();

		if(height == 0) {
			location.reload();
		}
	});
	
	
	function scrollDown(){
		
	
			if (currentBox<(boxes-1))
			{
				
				currentBox+=1;
				if(currentBox==boxes-1){
					$("#bottom").fadeOut(500);
				}else{
					$('#top').fadeIn(500);
				}
			
		
				$('#bg').animate( { "top": (-currentBox*100)+'%' }, 500);
				$('#parallaxLeft').animate({'top': (currentBox*100)+'%'}, 500);
				$('#parallaxRight').animate({'top': (currentBox*100)+'%'}, 500);
			
				$("#mini"+(currentBox-1)).animate( { "padding": '0' }, 500);
				$("#mini"+currentBox).animate( { "padding": '10%' }, 500);
				//Text fade effect
				$("#abs"+currentBox).fadeOut(5);
				$("#abs"+currentBox).fadeIn(1000);	
				//-STOP- text fade effect
		
			
		}	
			
	}
	
	function scrollUp(){	
		
		
			if (currentBox>0)
			{
				
				currentBox-=1;
				if(currentBox==0){
					$("#top").fadeOut(500);
				}else{
					$('#bottom').fadeIn(500);
				
				}
		
				$('#bg').animate( { "top": (-currentBox*100)+'%' }, 500);
				$('#parallaxLeft').animate({'top': (currentBox*100)+'%'}, 500);
				$('#parallaxRight').animate({'top': (currentBox*100)+'%'}, 500);
				
				$("#mini"+(currentBox+1)).animate( { "padding": '0' }, 500);
				$("#mini"+currentBox).animate( { "padding": '10%' }, 500);
				//Text fade effect
				$("#abs"+currentBox).fadeOut(5);
				$("#abs"+currentBox).fadeIn(1000);	
				//-STOP- text fade effect
			
	
	
			}
				
			
			
		
	
	}
	
	goTo=function(number){
		if(number==0){
				$("#top").fadeOut(500);
				$("#bottom").fadeIn(500);
		}else if(number==(boxes-1)){
				$("#bottom").fadeOut(500);
				$("#top").fadeIn(500);
		}else{
				$('#bottom').fadeIn(500);
				$('#top').fadeIn(500);				
			}
		$('#bg').animate( { "top": (-number*100)+'%' }, 500);
		$('#parallaxLeft').animate({'top': (number*100)+'%'}, 500);
		$('#parallaxRight').animate({'top': (number*100)+'%'}, 500);
				
		$("#mini"+(currentBox)).animate( { "padding": '0' }, 500);
		$("#mini"+number).animate( { "padding": '10%' }, 500);
		//Text fade effect
		$("#abs"+number).fadeOut(5);
		$("#abs"+number).fadeIn(1000);	
		//-STOP- text fade effect
		
		currentBox=number;
	
	}
	
	
	function adjustSizes(){
		
		//Other Sizes
		if ($(".bgBoxes").width()>$(".bgBoxes").height()) //landscape
			{
				$(".circles").css({"width":"10%"});
				$(".circles").css({"height":$(".circles").width()+"px"});
				
				$("#graphicsPos").css({"width":"5%"});
				$("#graphicsPos").css({"top":$(".bgBoxes").height()/2-$("#graphicsPos").height()});
				$(".miniCircles").css({"width":"70%"});
				$(".miniCircles").css({"height":$(".miniCircles").width()+"px"});
							
			
			}else{	//portrait
				$(".circles").css({"width":"20%"});
				$(".circles").css({"height":$(".circles").width()+"px"});
				
				$("#graphicsPos").css({"width":"10%"});
				$("#graphicsPos").css({"top":$(".bgBoxes").height()/2-$("#graphicsPos").height()});
				$(".miniCircles").css({"width":"70%"});
				$(".miniCircles").css({"height":$(".miniCircles").width()+"px"});
								
			}
			$("#parallaxLeft").css({"width":"4%"});
			$("#parallaxRight").css({"width":"7%"});
			// Abs div regolation
			for(var i=0; i<boxes; i++){
				$("#abs"+i).css({"left":"4%", "width":"89%"});	
			}
			//Font Sizes
			$("p").css({"font-size":$(".bgBoxes").height()/30+"px"});
			$("ul").css({"font-size":$(".bgBoxes").height()/30+"px"});
			$("h1").css({"font-size":$(".bgBoxes").height()/20+"px"});
		
	
	}
	
	// -STOP- FUNCTIONS
	
	// CREATE Colorful boxes

	for(var i=0; i<(boxes-1); i++){		
		cont.innerHTML+=("<div class='bgBoxes'></div>");
		left.innerHTML+=("<div class='leftBoxes' style='height:100%; background-color:"+colors[boxes-1-i]+"'></div>");
		right.innerHTML+=("<div class='rightBoxes' style='height:100%; background-color:"+colors[boxes-1-i]+"'></div>");
		}
		
		
	cont.innerHTML+=("<div id='0' class='bgBoxes' style='background-color:"+bgColors[0]+"'></div>");
	left.innerHTML+=("<div class='leftBoxes' style='height:100%; background-color:"+colors[0]+"'></div>");
	right.innerHTML+=("<div class='rightBoxes' style='height:100%; ; background-color:"+colors[0]+"'></div>");
		
	for(var i=1; i<(boxes); i++){		
		cont.innerHTML+=("<div class='bgBoxes' id='"+i+"' style='background-color:"+bgColors[i]+"'></div>");
		left.innerHTML+=("<div class='leftBoxes' style='height:100%;'></div>");
		right.innerHTML+=("<div class='rightBoxes' style='height:100%; '></div>");
		}
	
	    
		
	// -STOP- CREATE Colorful Boxes
	
	
	
	// Disable TouchMove events	
	
	var lastY;
	$(document).bind('touchmove', function (e){
		 e.preventDefault();
	});
	
	
	
	//insert mini circles in graphicsPos
	for(var i=0; i<boxes; i++){
		document.getElementById("graphicsPos").innerHTML+="<a href='javascript:void(0)'> <div id='mini"+i+"' class='miniCircles' onclick='goTo("+i+")'></div> </a>";
	}
	
	adjustSizes();
	
	//Adjust sizes on orientation change
	$(window).bind("orientationchange", function(){
		var orientation = window.orientation;
		var new_orientation = (orientation) ? 0 : 180 + orientation;
		$("html, body").animate({ scrollTop: $("#"+currentBox).offset().top }, 5);
		adjustSizes();
	});
	
	
	
	$('#top').click(function(e) {  
        scrollUp();
    });
	
	$('#bottom').click(function(e) {  
        scrollDown();
    });
	
	//Inserting Html
	/*for(var i=0; i<boxes; i++){
		insertHtmlMobile("hiddenContent"+i, String(i));
	}*/
	
	insertHtmlMobile("hiddenContent0", "0");


	
}

// -STOP- Create boxes functions


function insertHtml(divId, boxId){
	//boxIds are numbers: 0, 1, 2, 3, 4 if boxes=5
	document.getElementById(boxId).innerHTML+=document.getElementById(divId).innerHTML;

}

function insertHtmlMobile(divId, boxId){
	//boxIds are numbers: 0, 1, 2, 3, 4 if boxes=5
	document.getElementById(boxId).innerHTML+=document.getElementById(divId).innerHTML;

}


function settingUp(){
	//Text fade effect
	$("#abs0").fadeOut(5);
	$("#abs0").fadeIn(1000);	
	//-STOP- text fade effect
	
	$("#top").fadeOut(500);
	$("#mini0").animate( { "padding": '10%' }, 500);
	$("html, body").animate({ scrollTop: $("#0").offset().top }, 5);

	
	}