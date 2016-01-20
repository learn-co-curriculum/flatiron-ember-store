/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import Ember from 'ember';

describe('Acceptance: Routing', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('can visit the home page', function() {
    visit('/');

    andThen(function() {
      expect(find('h2').text()).to.eq("Flatiron Ember Store");
    });
  });

  it('can visit the home page and see the link to /products', function() {
    visit('/');

    andThen(function() {
      let link = $("div#products a");
      expect(link.text()).to.eq('View All Our Amazing Products!');
      expect(link.attr('href')).to.eq('/products');
    });
  });

  it('can visit the home page and see the link to /products', function() {
    visit('/');

    andThen(function() {
      let link = $("div#products a");
      expect(link.text()).to.eq('View All Our Amazing Products!');
      expect(link.attr('href')).to.eq('/products');
    });
  });

  it('can visit the home page and click the link to /products', function() {
    visit('/');
    click("#products a");
    
    andThen(function() {
      expect(currentPath()).to.equal('products.index');
      expect(find('h2').text()).to.include("Products");
      expect(find('h4').text()).to.include("My Awesome Product");
      expect(find('h4').text()).to.include("Super Amazing Thing");
      expect(find('h4').text()).to.include("Buy Me!!");
    });
  });
});
