// $( document ).ready(function() {

//   $(".menuBtn").on("mousedown",function(){
//   	$("nav").toggleClass("expanded");
//   });

//   $(".gaEvent").on("mousedown",function(){
//     var that = $(this);
//     var category = that.attr("data-ga-category");
//     var action = that.attr("data-ga-action");
//     var label = that.attr("data-ga-label");
//     _gaq.push(['_trackEvent',category,action,label]);
//   });

// });

/*----------------------------------------------------------
  Angular
------------------------------------------------------------*/
var app = angular.module('SW',['ui.router']);
/*----------------------------------------------------------
  UI Router
------------------------------------------------------------*/
app.config(function($stateProvider, $urlRouterProvider) {
  // Default URL to /home
  $urlRouterProvider.otherwise("/home");
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "homeCtrl"
    })
    .state('portfolio', {
      url: "/portfolio",
      templateUrl: "templates/portfolio.html",
      controller: "portfolioCtrl"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "templates/contact.html"
    })
});
/*----------------------------------------------------------
  Controllers
------------------------------------------------------------*/
app.controller('globalNavCtrl', function($scope){
    $scope.data = {navShow : false }
});
app.controller('homeCtrl', function($scope){
    $scope.skillBoxes = skillsData.skillBoxes;
});
app.controller('portfolioCtrl', function($scope){
    $scope.portfolioCards = portfolioData.portfolioCards;
    $scope.data = {activeIndex : -1};
});
/*----------------------------------------------------------
  Directives
------------------------------------------------------------*/
app.directive('imageonloaded', function() {
    return {
        link: function(scope,element,attrs){
          var image = new Image();
          image.src=attrs.imageonloaded;
          image.onload = function() {
              //Image loaded- set the background image to it
              element.css("background-image","url("+attrs.imageonloaded+")");
              element.parent().parent().removeClass("loading");
              console.log(attrs.imageonloaded+" loaded");
          };

        }
    };
});