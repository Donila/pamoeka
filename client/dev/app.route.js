;(function(ng) {
  "use strict";

  ng.module("pamoeka")
    .config([
      "$routeProvider",
      function($routeProvider) {
        $routeProvider
          .when("/", {
            templateUrl: "main/templates/main.html",
            controller: "MainController",
            controllerAs: "mainCtrl"
          })
          .when("/topic/:id", {
            templateUrl: "topic/templates/topic.html",
            controller: "TopicController",
            controllerAs: "topicCtrl"
          })
          .otherwise({
            redirectTo: "/"
          });
      }
    ]);
}(window.angular));
