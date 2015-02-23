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
app.controller('globalCtrl', function($scope,$rootScope){
    $rootScope.preventScroll = false;
    $rootScope.showNav = false;

    $scope.toggleNav = function(){
      $rootScope.showNav = !$rootScope.showNav;
      $rootScope.preventScroll =  $rootScope.showNav;
    }
    $scope.toggleScroll = function(override){
      if(override){
        $rootScope.preventScroll = override;
      } else {
        $rootScope.preventScroll = !$rootScope.preventScroll;
      }
    }
});
app.controller('skillsCtrl', function($scope, $rootScope, $stateParams){
    // Force body scrolling
    $rootScope.preventScroll = true;
    // Get whichskill from $stateProvider id
    $scope.whichskill = $stateParams.whichskill;
    // Get JSON object for our skill
    $scope.skillCards = skillsData.skillGroups.filter(function(s){return s.name===$scope.whichskill})[0].skills
});
app.controller('portfolioCtrl', function($scope){
    // Get JSON object for portfolio cards
    $scope.portfolioCards = portfolioData.portfolioCards;
    // Internal index for showing pCards
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
// app.run( ['$rootScope', '$state', '$stateParams',
//     function ($rootScope,   $state,   $stateParams) {
//       $rootScope.$state = $state;
//       $rootScope.$stateParams = $stateParams;
//   }
// ]);
////////////////////