/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'controller:products',
  'ProductsController',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    it('exists', function() {
      let controller = this.subject();
      expect(controller).to.be.ok;
    });

    it('has an action, showMore, that sets the currentProduct', function() {
      let controller = this.subject();
      let fakeProduct = {name: "My Fake Product", description: "buy buy buy!", price: 100};
      
      expect(controller.get('currentProduct')).to.eq(undefined);
      
      controller.send('showMore', fakeProduct);
      let retrievedCurrentProduct = controller.get('currentProduct');
      
      expect(retrievedCurrentProduct.name).to.eq("My Fake Product");
      expect(retrievedCurrentProduct.description).to.eq("buy buy buy!");
      expect(retrievedCurrentProduct.price).to.eq(100);
    });
  });
