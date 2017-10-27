;(function(ng) {
  "use strict";

  ng.module("pamoeka")
    .factory("TopicDAO", [
      "$q",
      "Topic",
      "TopicResource",
      function($q, Topic, TopicResource) {
        class TopicDAO {
          constructor() {

          }

          getById(id) {
            if (ng.isUndefined(id)) {
              return $q.reject(new TypeError("Invalid id for search."));
            }

            return TopicResource.get({id: id})
              .$promise
              .then((topic) => {
                return new Topic(topic);
              });
          }

          getAll() {
            return TopicResource.query()
              .$promise
              .then((topics) => {
                return topics.map((topic) => {
                  return new Topic(topic);
                });
              });
          }

          createTopic(topic) {
            if (!ng.isObject(topic) || !(topic instanceof Topic) || !topic.isValid()) {
              return $q.reject(new TypeError("Invalid topic to be created."));
            }

            return TopicResource.save(topic)
              .$promise
              .then((t) => {
                return new Topic(t);
              });
          }

          deleteTopic(id) {
            if (!ng.isString(id)) {
              return $q.reject(new TypeError("Invalid id for deletion."));
            }

            return TopicResource.delete({id: id}).$promise;
          }         
        }

        return new TopicDAO();
      }
    ]);
}(window.angular));
