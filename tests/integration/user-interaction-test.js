import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

describe('Integration: User Interaction', function() {
  var application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('shows the product details when the user clicks on the product name', function(){
    visit('/products');
    click('h4:first');
    
    andThen(function() {
      expect(find('h3').text()).to.eq('My Awesome Product');
      expect(find('p').text()).to.include('price: $10000');
      expect(find('p').text()).to.include('description: something');
    });
  });

  it('does not show the product details if a user has not clicked on the product name', function(){
    visit('/products');
  
    
    andThen(function() {
      expect(find('h3').text()).to.not.eq('My Awesome Product');
      expect(find('p').text()).to.not.include('price: $10000');
      expect(find('p').text()).to.not.include('description: something');
    });
  });

});