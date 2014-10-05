var app = angular.module('SW',[]);
app.controller('SceneController', function(){
	  this.portfolioCards=portfolioData.portfolioCards;
});

app.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                console.log($(element).parent());
            });
        }
    };
});
var i;
app.directive('imageonloaded', function() {
    return {
        link: function(scope,element,attrs){
        	var image = new Image();
        	image.src=attrs.imageonloaded;
        	image.onload = function() {
	            //Image loaded- set the background image to it
	            element.removeClass("loading").css("background-image","url("+attrs.imageonloaded+")");
	            console.log(attrs.imageonloaded+" loaded");
	            console.log($(element).parents(".portfolioCard").removeClass("loading"));
	        };

        }
    };
});

$( document ).ready(function() {

  $(".menuBtn").on("click",function(){
  	$("#rwd-menu").toggleClass("expanded");
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
