;(function(ng) {
    "use strict";
  
    ng.module("pamoeka")
      .controller("MainController", [
        "$log",
        "Topic",
        "TopicDAO",
        function($log, Topic, TopicDAO) {
          this.topic = new Topic();
          this.topics = [];
          this.title = "PAMOEKA EBANAYA";
          
          this.createTopic = function(topic) {
            TopicDAO.createTopic(topic)
              .then((newTopic) => {
                this.topics.push(newTopic);
                this.topic = new Topic();
              })
              .catch($log.error);
          };
          
          this.deleteTopic = function(id) {
            TopicDAO.deleteTopic(id)
              .then(() => {
                return TopicDAO.getAll()
                  .then((topics) => {
                    return this.topics = topics;
                  });
              })
              .catch($log.error);
          };
  
          ;(() => {
            return TopicDAO.getAll()
              .then((topics) => {
                return this.topics = topics;
              })
              .catch($log.error);
          })();
        }
      ]);
  }(window.angular));
  