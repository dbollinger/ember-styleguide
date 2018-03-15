import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('es-header', 'Integration | Component | es header', {
    integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs `{{es-header}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs `
    {{#es-header}}
      template block text
    {{/es-header}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});

test('it uses the header html element', function(assert) {
    this.render(hbs `{{es-header}}`);
    assert.equal(this.$('header').length, 1, "the header uses the header html element!");
});

test('it has the role of banner', function(assert) {
    this.render(hbs `{{es-header}}`);
    assert.equal(this.$('header').attr('role'), 'banner', 'header has the role of banner');
});

test('it has the className es-header', function(assert) {
    this.render(hbs `{{es-header}}`);
    assert.ok(find('header').classList.contains('es-header'), 'header has the class of es-header');
});

test('it uses the backgroundImageUrl property to set a css background-image', function(assert) {
    this.set('imageUrl', 'url("assets/images/zoey-icon.png")');
    this.render(hbs `{{es-header backgroundImage=imageUrl}}`);
    assert.equal(find('header').style['background-image'], `${this.get('imageUrl')}`, 'header style is set with background image url');
    assert.equal(find('header').style['background-repeat'], `no-repeat`, 'background-repeat is set to repeat by default');
    assert.equal(find('header').style['background-position'], `initial`, 'background-position is set to initial by default');
});

test('it uses background-repeat and background-position when set', function(assert) {
    this.set('imageUrl', 'url("assets/images/zoey-icon.png")');
    this.render(hbs `{{es-header backgroundImage=imageUrl backgroundRepeat='repeat' backgroundPosition='50% 50%'}}`);
    assert.equal(find('header').style['background-repeat'], `repeat`, 'background-repeat is set to specified value');
    assert.equal(find('header').style['background-position'], `50% 50%`, 'background-position is set to specified value');
});