'use strict';

const service = require('feathers-mongoose');
const notes = require('./notes-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: notes
  };

  // Initialize our service with any options it requires
  app.use('/notes', service(options));

  // Get our initialize service to that we can bind hooks
  const notesService = app.service('/notes');

  // Set up our before hooks
  notesService.before(hooks.before);

  // Set up our after hooks
  notesService.after(hooks.after);
};
