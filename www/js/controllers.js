angular.module('starter.controllers', [])

.controller('ProductCtrl', function($scope, $stateParams, Chats) {
  $scope.$on('$ionicView.enter', function(event, data) {
    $scope.productId = data.stateParams && data.stateParams.productId;
  })
})

.controller('ProductsCtrl', function($scope, $stateParams, Chats) {
})
