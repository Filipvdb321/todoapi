'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('dinners service', function() {
  it('registered the dinners service', () => {
    assert.ok(app.service('dinners'));
  });
});
