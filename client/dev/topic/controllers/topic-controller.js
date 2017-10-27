;(function(ng) {
  "use strict";

  ng.module("pamoeka")
    .controller("TopicController", [
      "$log",
      "Topic",
      "TopicDAO",
      "Todo",
      "TodoDAO",
      "$routeParams",
      "$route",
      function($log, Topic, TopicDAO, Todo, TodoDAO, $routeParams, $route) {

        this.topicId = $routeParams.id
        this.topic = new Topic();

        this.todo = new Todo();
        this.todo.topic = this.topicId;
        this.items = [];
        
        this.createTodo = function(todo) {
          TodoDAO.createTodo(todo)
            .then((newTodo) => {
              this.items.push(newTodo);
              this.topic = new Topic();
              this.todo.topic = this.topicId;
            })
            .catch($log.error);
        };
        
        this.deleteTodo = function(id) {
          TodoDAO.deleteTodo(id)
            .then(() => {
              return TodoDAO.getByTopic()
                .then((items) => {
                  return this.items = items;
                });
            })
            .catch($log.error);
        };

        this.fromNow = function(time) {
          return moment(time).fromNow();
        }

        ;(() => {
			  return TodoDAO.getByTopic(this.topicId)
					.then((items) => {
					  return this.items = items;
					})
					.catch($log.error);
    })();
    
        ;(() => {
          return TopicDAO.getById(this.topicId)
            .then((topic) => {
              return this.topic = topic;
            })
            .catch($log.error);
        })();
      }
    ]);
}(window.angular));
