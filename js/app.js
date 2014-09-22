$( document ).ready(function() {

  $(".menuBtn").on("click",function(){
  	$("#rwd-menu").toggleClass("expanded");
  });

  window.setTimeout(function(){
  	$(".warning").addClass("show");
  },1000);

});