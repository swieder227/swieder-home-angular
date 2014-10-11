var app = angular.module('SW',[]);
app.controller('SceneController', function(){
	  this.portfolioCards=portfolioData.portfolioCards;
});

app.directive('imageonloaded', function() {
    return {
        link: function(scope,element,attrs){
        	var image = new Image();
        	image.src=attrs.imageonloaded;
        	image.onload = function() {
	            //Image loaded- set the background image to it
	            element.css("background-image","url("+attrs.imageonloaded+")");
	            $(element).parents(".portfolioCard").removeClass("loading");
	            console.log(attrs.imageonloaded+" loaded");
	        };

        }
    };
});

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
