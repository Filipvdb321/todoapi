'use strict';

// notes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  username: { type: String, required: true },
  note: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const notesModel = mongoose.model('notes', notesSchema);
// Duplicate the ID field.
  notesSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
  notesSchema.set('toJSON', {
  virtuals: true
});


module.exports = notesModel;
