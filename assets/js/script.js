$(document).ready(function(){
	$(".login").click(function() {
		$("#modal-container").fadeIn(300)
	});
	
	$("#cancel").click(function(){
		$("#modal-container").fadeOut(300)
	});
	$("#modal-overlay").click(function(){
		$("#modal-container").fadeOut(300)
	});

	$("#name").hover(function(){
		$(this).text("LOGOUT")
	});

	$("#name").mouseleave(function(){
		$(this).text("Hello, Clancy")
	});

	$("#tabEdit").click(function(){
		if($(".minusImage1").css("display") == "none"){
			$(".minusImage1").css("display","block")
		}else{
			$(".minusImage1").css("display","none")
		}
		
	});
	
	$("#tabEdit2").click(function(){
		if($(".minusImage2").css("display") == "none"){
			$(".minusImage2").css("display","block")
		}else{
			$(".minusImage2").css("display","none")
		}
		
	});

	$("#edit").click(function(){
		if($(".minusImage").css("display") == "none"){
			$(".minusImage").css("display","block")
		}else{
			$(".minusImage").css("display","none")
		}
		if($(".minusImage0").css("display") == "none"){
			$(".minusImage0").css("display","block")
		}else{
			$(".minusImage0").css("display","none")
		}
		
	});

	$(".tabImage").hover(function() {
		$(this).parent().parent().find(".plusImage").show()
		$(this).parent().parent().find(".tabText").addClass("large")
		$(this).addClass("selected")
	});	
	$(".plusImage").hover(function() {
		$(this).show()
		$(this).siblings(".tabText").addClass("large")
		$(this).siblings().find(".tabImage").addClass("selected")
	});	

	$(".tabImage").mouseleave(function() {
		$(this).parent().parent().find(".plusImage").hide()
		$(this).parent().parent().find(".tabText").removeClass("large")
		$(this).removeClass("selected")

	});	

});