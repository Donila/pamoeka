;(function(ng) {
  "use strict";

  ng.module("pamoeka")
    .config([
      "$locationProvider",
      function($locationProvider) {
        
        $locationProvider
          .html5Mode(true)
          .hashPrefix('*');

        moment().locale('ru');
        
      }
    ]);
}(window.angular));
