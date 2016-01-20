
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{name: "My Awesome Product", description: "something", price: 10000},
      {name: "Super Amazing Thing", description: "stuff", price: 200},
      {name: "Buy Me!!", description: "wow what a great thing to buy. buy this thing!", price: 525}];
  }
});