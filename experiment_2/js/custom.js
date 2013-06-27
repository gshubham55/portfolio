$(document).ready(function(){
	$("#navul > li").mouseover(function(){

		var cur_li = $(this).attr("id");
		if(cur_li!="nav_trigger"&&cur_li!="logo")
		{
			$(this).children("a").children("img").attr("src","img/navicon/"+ cur_li +"_hover.png") ; 
			$("#text_cont").html(cur_li);
		}
	});
	$("#navul > li").mouseout(function(){
		var cur_li = $(this).attr("id");
		$(this).children("a").children("img").attr("src","img/navicon/"+ cur_li +".png") ; 
		$("#text_cont").html("");
	});
	var nav_show = 1;
	$("#nav_trigger").click(function(){
		if (nav_show==1){
			$("#trigger_image").rotate({animateTo:-90});
			$('#navul').animate({
			    left: '-24em'
			    // opacity:'0.5'
			  }, 500, function() {
			    // Animation complete.
			  });
			$('#text_cont').animate({
			    left: '5em'
			  }, 500, function() {
			    // Animation complete.
			  });
			nav_show=0;
		}
		else {
			$("#trigger_image").rotate({animateTo:0});
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