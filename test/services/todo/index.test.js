'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('todo service', function() {
  it('registered the todos service', () => {
    assert.ok(app.service('todos'));
  });
});
