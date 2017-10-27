"use strict";

const TopicDAO = require("../dao/topic-dao");

module.exports = class TopicController {
  static getAll(req, res) {
      TopicDAO
        .getAll()
        .then(Topics => res.status(200).json(Topics))
        .catch(error => res.status(400).json(error));
  }

  static getById(req, res) {
      TopicDAO
        .getById(req.params.id)
        .then(Topic => res.status(200).json(Topic))
        .catch(error => res.status(400).json(error));
  }

  static createTopic(req, res) {
      let _Topic = req.body;

      TopicDAO
        .createTopic(_Topic)
        .then(Topic => res.status(201).json(Topic))
        .catch(error => res.status(400).json(error));
  }

  static deleteTopic(req, res) {
    let _id = req.params.id;

    TopicDAO
      .deleteTopic(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
