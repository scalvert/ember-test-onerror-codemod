import { module, test } from 'qunit';
import { click, setupOnerror } from '@ember/test-helpers';

module('foo', function() {
  test('foo test', async function(assert) {
    assert.expect(1);

    setupOnerror(function() {});
    setupOnerror(() => {});
    setupOnerror(fn);
  });
});
