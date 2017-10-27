"use strict";

let mongoose = require("mongoose");
const Promise = require("bluebird");
const topicSchema = require("../model/topic-model");
const _ = require("lodash");

topicSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        Topic.find(_query)
            .exec((err, Topics) => {
              err ? reject(err)
                  : resolve(Topics);
            });
    });
};

topicSchema.statics.getById = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
          return reject(new TypeError("Id is not defined."));
        }

        Topic.findById(id)
            .exec((err, Topic) => {
              err ? reject(err)
                  : resolve(Topic);
            });
    });
}

topicSchema.statics.createTopic = (topic) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(topic)) {
          return reject(new TypeError("Topic is not a valid object."));
      }

      let _Topic = new Topic(topic);

      _Topic.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}

topicSchema.statics.deleteTopic = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Topic.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
}

const Topic  = mongoose.model("Topic", topicSchema);

module.exports = Topic;
