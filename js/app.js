$( document ).ready(function() {

  $(".menuBtn").on("click",function(){
  	$("nav").toggleClass("expanded");
  });

  window.setTimeout(function(){
  	$(".warning").addClass("show");
  },1000);

  $(".gaEvent").on("mousedown",function(){
    var that = $(this);
    var category = that.attr("data-ga-category");
    var action = that.attr("data-ga-action");
    var label = that.attr("data-ga-label");
    _gaq.push(['_trackEvent',category,action,label]);
  });

});
