import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';

var app=angular.module('app', [ComponentsModule.name]).component('app', appComponent);


app.controller('myCtrl', function($scope, $http) {
    $http.get("https://www.reddit.com/r/all.json")
    .then(function(response) {
        $scope.myWelcome = response.data.data.children;
        $scope.defaultImgSrc = '/assets/img/no-image.png';
    });
});

app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});