"use strict";

const TopicController = require("../controller/topic-controller");

module.exports = class TodoRoutes {
    static init(router) {
      router
        .route("/api/topics")
        .get(TopicController.getAll)
        .post(TopicController.createTopic);

      router
        .route("/api/topics/:id")
        .get(TopicController.getById)
        .delete(TopicController.deleteTopic);
    }
}
