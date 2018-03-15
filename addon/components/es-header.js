import Component from '@ember/component';
import layout from '../templates/components/es-header';
import {computed} from '@ember/object';
import {htmlSafe} from '@ember/string';

export default Component.extend({
  layout,
  attributeBindings: ['ariaLabel:aria-label', 'style'],
  classNames: ['es-header'],
  tagName: 'header',

  backgroundImageUrl: null,

  //default
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'initial',

  style: computed('backgroundImage', 'backgroundRepeat', 'backgroundPosition', function() {
    if (this.get('backgroundImage')) {
      return htmlSafe(`
      background-image:${this.get('backgroundImage')};
      background-repeat:${this.get('backgroundRepeat')};
      background-position:${this.get('backgroundPosition')};
      `);
    }
  }),

  //accessibility support
  ariaDescribedby: null,
  ariaLabel: null,
  ariaRole: 'banner',
  title: null
});