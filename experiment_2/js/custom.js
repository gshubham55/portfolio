$(document).ready(function(){
	$("#navul > li").mouseover(function(){

		var cur_li = $(this).attr("id");
		if(cur_li!="logo")
		{
			$(this).children("a").children("img").attr("src","img/navicon/"+ cur_li +"_hover.png") ; // Switching icons (with brighter ones)
			$("#text_cont").html(cur_li);
		}
	});
	$("#navul > li").mouseout(function(){
		var cur_li = $(this).attr("id");
		$(this).children("a").children("img").attr("src","img/navicon/"+ cur_li +".png") ; //switching icon back to darker one
		$("#text_cont").html("");
	});
	var nav_show = 1; //to check if the nav bar is hidden or not
	$("#nav_trigger").click(function(){
		if (nav_show==1){                     //if is visible
			$("#trigger_image").rotate({animateTo:-90}); //the 1st image
			$('#navul').animate({
			    left: '-24em'		//hides the nav bar by sliding left
			    // opacity:'0.5'
			  }, 500, function() {
			    // Animation complete.
			  });
			$('#text_cont').animate({
			    left: '5em'
			  }, 500, function() {
			    // Animation complete.
			  });
			nav_show=0; // to tell that nav bar is now hidden
		}
		else {
			$("#trigger_image").rotate({animateTo:0}); // and vice versa
			$('#navul').animate({
			    left: '4em'
			  }, 500, function() {
			    // Animation complete.
			  });	
			$('#text_cont').animate({
			    left: '21em'
			  }, 500, function() {
			    // Animation complete.
			  });
			nav_show=1;
		}	
	});
})