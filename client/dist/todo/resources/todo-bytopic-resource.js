;(function(ng) {
  "use strict";

  ng.module("pamoeka")
    .factory("TodoByTopicResource", [
      "$resource",
      function($resource) {
        const _url = "/api/todos/bytopic/:id";
        const _params = {};
        const _methods = {};

        return $resource(_url, _params, _methods);
      }
    ]);
}(window.angular));
