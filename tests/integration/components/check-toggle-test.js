import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { get, set } from '@ember/object';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | check-toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('it properly renders default style', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{check-toggle}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#check-toggle}}
        template block text
      {{/check-toggle}}
    `);

    const classNamesArray = this.element.querySelectorAll('label')[0].getAttribute('class').split(' ');
    assert.equal(this.element.textContent.trim(), 'template block text');
    assert.equal(classNamesArray.length, 2, `default element has two classes: ${this.element.querySelectorAll('label')[0].getAttribute('class')}`);
    assert.ok(classNamesArray.includes('check-toggle'));
  });

  test('it updates controller property', async function (assert) {
    set(this, 'toggleProperty', false);
    assert.equal(get(this, 'toggleProperty'), false, 'default "toggleProperty" value is false');
    await render(hbs`
      {{#check-toggle isChecked=toggleProperty}}
        template block text
      {{/check-toggle}}
    `);

    const labelElem = this.element.querySelectorAll('label')[0];
    await click(labelElem);
    assert.equal(get(this, 'toggleProperty'), true, 'toggled "toggleProperty" to true');
    await click(labelElem);
    assert.equal(get(this, 'toggleProperty'), false, 'toggled "toggleProperty" back to false');
  });

  test('it renders label text', async function (assert) {
    set(this, 'textWhenChecked', "text when checked");
    set(this, 'textWhenOpen', "text when open");
    await render(hbs`
      {{check-toggle checked-text=textWhenChecked open-text=textWhenOpen}}
    `);

    const tlb = this.element.querySelectorAll('span.toggle-label-before');
    const tla = this.element.querySelectorAll('span.toggle-label-after');

    assert.equal(tlb.length, 1, 'renders only one "before" label');
    assert.equal(tla.length, 1, 'renders only one "after" label');
    assert.equal(tlb[0].textContent.trim(), get(this, "textWhenOpen"), '"unchecked" label matches expectations');
    assert.equal(tla[0].textContent.trim(), get(this, "textWhenChecked"), '"checked" label matches expectations');

  });
});