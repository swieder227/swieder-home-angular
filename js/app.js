/*----------------------------------------------------------
  Angular
------------------------------------------------------------*/
var app = angular.module('SW',['ui.router', 'ngAnimate']);
//
app.run(function($rootScope, $timeout) {
  $timeout(function() {
    console.log("$rootScope.pageInit = true");
    $rootScope.pageInit = true;
  }, 2000)
});
/*----------------------------------------------------------
  UI Router
------------------------------------------------------------*/
app.config(function($urlRouterProvider, $stateProvider, $uiViewScrollProvider) {
  // Default URL to /home
  $urlRouterProvider.otherwise("/home");
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "homeCtrl"
    })
    .state('home.skills', {
      url: "/skills/:whichskill",
      templateUrl: "templates/skills.html",
      controller: "skillsCtrl"
    })
    .state('portfolio', {
      url: "/portfolio",
      templateUrl: "templates/portfolio.html",
      controller: "portfolioCtrl"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "templates/contact.html"
    });
});
/*----------------------------------------------------------
  Controllers
------------------------------------------------------------*/
app.controller('globalCtrl', function($scope){
    $scope.data = {preventScroll : false }
    $scope.data = {showNav : false }

    $scope.toggleNav = function(){
      $scope.data.showNav = !$scope.data.showNav;
      $scope.data.preventScroll =  $scope.data.showNav;
    }
    $scope.toggleScroll = function(override){
      if(override){
        $scope.data.preventScroll = override;
      } else {
        $scope.data.preventScroll = !$scope.data.preventScroll;
      }
    }
});
app.controller('homeCtrl', function($scope){

});
app.controller('skillsCtrl', function($scope, $stateParams){
    $scope.whichskill = $stateParams.whichskill;
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


// For debugging, exposes $state
app.run( ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }
]);
////////////////////