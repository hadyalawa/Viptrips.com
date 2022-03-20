$(document).ready(function(){
	$('.header').height($(window).height());
	
	
	setTimeout(function() {
	$('#demo-modal').modal();
	}, 500);



	$(".navbar a").click(function(){
	  $("body,html").animate({
	   scrollTop:$("#" + $(this).data('value')).offset().top
	  },1000)
	  
	 })
})