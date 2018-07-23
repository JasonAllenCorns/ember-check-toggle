import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | check toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('check-toggle renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    await render(hbs`{{check-toggle}}`);

    assert.dom('*').hasText('');

    // Template block usage:" + EOL +
    await render(hbs`
      {{#check-toggle}}
        template block text
      {{/check-toggle}}
    `);

    assert.dom('*').hasText('template block text');
  });
  test('check-toggle container has "check-toggle" class', async function(assert) {
    await render(hbs`
      {{#check-toggle}}
        template block text
      {{/check-toggle}}
    `);

    assert.dom(':first-child').hasClass('check-toggle', 'has check-toggle class');
  });
  test('check-toggle updates controller property', async function(assert) {
    this.set('toggleProperty', false);
    assert.equal(this.get('toggleProperty'), false, 'default "toggleProperty" value is false');

    await render(hbs`
      {{#check-toggle isChecked=toggleProperty}}
        template block text
      {{/check-toggle}}
    `);
    await click('label');
    assert.equal(this.get('toggleProperty'), true, 'toggled "toggleProperty" value is true');
    await click('label');
    assert.equal(this.get('toggleProperty'), false, 'double-toggled "toggleProperty" value is false');
  });
  test('check-toggle label text renders', async function(assert) {

    await render(hbs`
      {{#check-toggle}}
        template block text
      {{/check-toggle}}
    `);
    assert.dom('.labelText').hasText('template block text', 'has label text');
  });
  test('check-toggle track texts match assignments', async function(assert) {

    await render(hbs`
      {{check-toggle checked-text="itIsChecked" open-text="itIsOpen"}}
    `);
    assert.dom('.toggle-label-before').hasText('itIsOpen', 'has proper open label text');
    assert.dom('.toggle-label-after').hasText('itIsChecked', 'has proper checked label text');
  });
});
