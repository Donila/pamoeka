"use strict";

const mongoose = require("mongoose");

const _topicSchema = {
    title: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: Date.now},
    createdBy: {type: String, trim: true},
    imageUrl: {type: String, trim: true}
}

module.exports = mongoose.Schema(_topicSchema);
