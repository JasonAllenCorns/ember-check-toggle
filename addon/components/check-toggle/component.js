import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'label',
  classNames: 'check-toggle',
  classNameBindings: ['toggleType', 'toggleSize'],
  toggleType: Ember.computed(function () {
    if (this.attrs.type) {
      return "toggle-" + this.attrs.type.toString();
    }
    return "";
  }),
  toggleName: Ember.computed(function () {
    return this.attrs.name || Math.random().toString(36).substring(2, 9);
  }),
  toggleSize: Ember.computed(function() {
    if (this.attrs.size) {
      return "toggle-" + this.attrs.size.toString();
    }
    return "";
  })
});
