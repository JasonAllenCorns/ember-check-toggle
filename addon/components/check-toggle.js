import Component from '@ember/component';
import layout from '../templates/components/check-toggle';
import { computed, get, getWithDefault } from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'label',
  classNames: 'check-toggle',
  classNameBindings: ['toggleType', 'toggleSize'],
  toggleType: computed({
    get() {
      if (get(this, 'type')) {
        return `toggle-${get(this, 'type').toString()}`;
      }
      return "";
    }
  }),
  toggleName: computed({
    get() {
      return getWithDefault(this, 'name', Math.random().toString(36).substring(2, 9));
    }
  }),
  toggleSize: computed({
    get() {
      if (get(this, 'size')) {
        return `toggle-${get(this, 'size').toString()}`;
      }
      return "";
    }
  })
});
