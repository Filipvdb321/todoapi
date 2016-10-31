'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');


const sanitizeData= (hook) => {
  console.log('creating note:' + hook.data);
  if(hook.data.username){
    hook.data.username = hook.data.username.toLowerCase();
  }
  console.log('sanitized note:' + hook.data);
}


const checkData= (hook) => {
  console.log('found notes:' + hook.result);
}



exports.before = {
  all: [],
  find: [],
  get: [],
  create: [sanitizeData],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [checkData],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

