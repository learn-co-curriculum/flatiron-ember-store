/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it,
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

function addCurrentProductToHandlebarsEnvironment(env, dummyProduct) {
  env.set('currentProduct', dummyProduct);
}

describeComponent(
  'show-product',
  'Integration: ShowProductComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      this.render(hbs`{{show-product}}`);
      expect(this.$()).to.have.length(1);
    });

    it('displays the current product when its product property is set to a product object', function(){
      let dummyProduct = {name: "Collector's Item", description: "don't miss out on this collector's item!", price: 1000};
      let env = this;

      // this function does two things:
      //  1. Set a property, currentProduct, equal to the dummyProduct object
      //  2. Give the show-product handlebars template access to the currentProduct 
      //       object, from the test suite.
      // this function is defined at the top of this file if you want to check it out!
      addCurrentProductToHandlebarsEnvironment(env, dummyProduct);
      
      this.render(hbs `
        {{show-product product=currentProduct}}
      `);
      expect($.trim(this.$('h3').text())).to.eq('Collector\'s Item');
      expect($.trim(this.$('h3').text()), "description: don\'t miss out on this collector\'s item!");
      expect($.trim(this.$('h3').text()), "price: 1000");
    });
  }
);
