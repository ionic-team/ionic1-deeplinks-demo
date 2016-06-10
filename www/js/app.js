// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.native', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $cordovaStatusBar) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    $cordovaStatusBar.styleLightContent();
    $cordovaStatusBar.hide();
  });
})

.run(['$ionicPlatform', '$cordovaDeeplinks', '$state', '$timeout', function($ionicPlatform, $cordovaDeeplinks, $state, $timeout) {
  $ionicPlatform.ready(function() {
    $cordovaDeeplinks.route({
      '/product/:productId': {
        target: 'product',
        parent: 'products'
      }
    }).subscribe(function(match) {
      $timeout(function() {
        $state.go(match.$route.parent, match.$args);
        $timeout(function() {
          $state.go(match.$route.target, match.$args);
        }, 800);
      }, 100);
    }, function(nomatch) {
      console.warn('No match', nomatch);
    });
  });
}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('product', {
    url: '/product/:productId',
    templateUrl: 'templates/product.html',
    controller: 'ProductCtrl'
  })
  .state('products', {
    url: '/product',
    templateUrl: 'templates/products.html',
    controller: 'ProductsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/product');

});
