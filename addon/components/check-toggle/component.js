import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout: layout,
  tagName: 'label',
  classNames: 'check-toggle',
  classNameBindings: ['toggleType', 'toggleSize'],
  toggleType: computed(function () {
    if (this.attrs.type) {
      return "toggle-" + this.attrs.type.toString();
    }
    return "";
  }),
  toggleName: computed(function () {
    return this.attrs.name || Math.random().toString(36).substring(2, 9);
  }),
  toggleSize: computed(function() {
    if (this.attrs.size) {
      return "toggle-" + this.attrs.size.toString();
    }
    return "";
  })
});
