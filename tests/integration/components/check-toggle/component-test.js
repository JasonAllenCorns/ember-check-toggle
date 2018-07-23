import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('check-toggle', 'Integration | Component | check toggle', {
  integration: true
});

test('check-toggle renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{check-toggle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#check-toggle}}
      template block text
    {{/check-toggle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
test('check-toggle container has "check-toggle" class', function(assert) {
  this.render(hbs`
    {{#check-toggle}}
      template block text
    {{/check-toggle}}
  `);

  assert.equal(this.$(':first-child').hasClass('check-toggle'), true, 'has check-toggle class');
});
test('check-toggle updates controller property', function (assert) {
  this.set('toggleProperty', false);
  assert.equal(this.get('toggleProperty'), false, 'default "toggleProperty" value is false');

  this.render(hbs`
    {{#check-toggle isChecked=toggleProperty}}
      template block text
    {{/check-toggle}}
  `);
  this.$('label').click();
  assert.equal(this.get('toggleProperty'), true, 'toggled "toggleProperty" value is true');
  this.$('label').click();
  assert.equal(this.get('toggleProperty'), false, 'double-toggled "toggleProperty" value is false');
});
test('check-toggle label text renders', function (assert) {

  this.render(hbs`
    {{#check-toggle}}
      template block text
    {{/check-toggle}}
  `);
  assert.equal(this.$('.labelText').text().trim(), 'template block text', 'has label text');
});
test('check-toggle track texts match assignments', function (assert) {

  this.render(hbs`
    {{check-toggle checked-text="itIsChecked" open-text="itIsOpen"}}
  `);
  assert.equal(this.$('.toggle-label-before').text().trim(), 'itIsOpen', 'has proper open label text');
  assert.equal(this.$('.toggle-label-after').text().trim(), 'itIsChecked', 'has proper checked label text');
});
