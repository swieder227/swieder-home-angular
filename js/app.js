$( document ).ready(function() {

  $(".menuBtn").on("click",function(){
  	$("nav").toggleClass("expanded");
  });

  window.setTimeout(function(){
  	$(".warning").addClass("show");
  },1000);

  $(".pcHero").on("mouseup",function(){
  	var target = $(this).attr("data-pc-index");
  	if($("#body").attr("data-pc-index") != target)
  		$("#body").attr("data-pc-index",target);
  	else
  		$("#body").attr("data-pc-index","-1");
  });

});
