'use strict';

// todo-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, 'default': false },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

// Duplicate the ID field.
todoSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
todoSchema.set('toJSON', {
  virtuals: true
});

const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;
