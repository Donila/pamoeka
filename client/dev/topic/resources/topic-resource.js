;(function(ng) {
  "use strict";

  ng.module("pamoeka")
    .factory("TopicResource", [
      "$resource",
      function($resource) {
        const _url = "/api/topics/:id";
        const _params = {};
        const _methods = {};

        return $resource(_url, _params, _methods);
      }
    ]);
}(window.angular));
