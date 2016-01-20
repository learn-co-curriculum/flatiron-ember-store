import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showMore: function(product){
      this.set('currentProduct', product);
    }
  }
});
