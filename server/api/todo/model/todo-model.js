"use strict";

const mongoose = require("mongoose");

const _todoSchema = {
    message: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: Date.now},
    createdBy: {type: String, trim: true},
    imageUrl: {type: String, trim: true},
    topic: {type: mongoose.Schema.Types.ObjectId, required: true, trim: true}
}

module.exports = mongoose.Schema(_todoSchema);
