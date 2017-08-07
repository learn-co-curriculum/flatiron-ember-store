# Flatiron Ember Store

## Objectives

1. Define a route that renders a specific handlebars template. 
2. Define a route handler to return model data. 
3. Use Handlebars to render model data.
4. Build a controller action to respond to user events on the page. 
5. Build a component and pass data into that component to be rendered on the page. 

## Overview

Our goal is to create a simple Ember app that allows uses to quickly and easily browse the products available for sale at the Flatiron Ember Store. A user should be able to visit the landing page and click a link to the products index page. On that page, a user should be able to click on the name of any product on the list and see the product details rendered immediately on the page, without the page having to refresh and without visiting another page. Check out the demo below to get a better idea of what we'll be building:

<iframe width="640" height="480" src="https://www.youtube.com/embed/oI9zoqLBKjc" frameborder="0" allowfullscreen></iframe>

In order to implement this super responsive functionality, we'll be using Ember components and controller actions. Here's how it's going to work: We'll create a controller that has an action to respond to a user clicking the name of a product. That controller action handler will do the job of passing that product's data into a component, and the component will be responsible for rendering the data on the page. 

Let's get started!

## Instructions

Fork and clone this lab to begin, use the guidelines here in conjunction with running the test suite. Remember you can run the tests by connecting to the server with `ember s` and visiting `localhost:4200/tests`. 

### Part I: Routes and Route Handlers

In `app/router.js` define the route `/products`. Then, define your route handler in `app/routes/products.js`. Here, return a model that contains the following data:

```javascript
[
    {name: "My Awesome Product", description: "something", price: 10000}, 
    {name: "Super Amazing Thing", description: "stuff", price: 200},
    {name: "Buy Me!!", description: "wow what a great thing to buy. buy this thing!", price: 525}
]
```

### Part II: Templates

First, add a link to the products index page in your `application.hbs`. 

Then, on the `app/templates/products.hbs` page, we'll render our model data. 

Iterate over the collection of product objects in your model, rendering the name of each product in the `<h4>` tag provided for you. 

### Part III: The Controller and Component

Here's where things get a little trickier. We need to show the details of a given product in a div to the right of our product list, when a user clicks the name of that product. In order to get this working, we'll need to build a component that is responsible for rendering a product's details *and* we'll need to build a controller that responds to the user's click of a product name, passing that product's details into the component. Our component and our controller will be working together. 

We're going to start out with the component. 

#### Building our component

1. Generate your component in the terminal with `ember g component show-product`. This will create the following two files: `/app/components/show-product.js` and `app/templates/components/show-product.hbs`. We'll only be coding in the second one, the template for our component. 
2. Let's code the template for our component! Our component will render the details of a single product. We'll come back to the question of how we will pass that product into the component, and simply assume that we have access to the product, `{{product}}` in the component template for now. 

    * Render the product's name, price and description. Wrap the name in an `<h3>` tag and the price and description in `<p>` tags. The price should come before the description (tests are picking). Lastly, if you want your product to render as beautifully as in the demo, place it in a `<div>` with a class of `<"container product well">`. 
    * Now, let's render our component on the `/products` page by calling `{{show-product}}`. In the interests of styling, make sure you call the component *below the line on which you close the `<div>` with class `"container"`. 
    * Now, if you visit the `/products` page, you should see this:

![](http://readme-pics.s3.amazonaws.com/%20ember-component-pic-1.png)

This is not quite what we want, but we're getting closer. Currently, we're not passing any product info into our component, so the component doesn't have any data to render. Our usage of `{{product}}` within the component renders absolutely nothing. 

Before we worry about how to pass the right product info into our component when someone clicks on the name of a product, let's fix up our component so that if there *isn't* a product available, the component try to display the name, price and description. 

We can do this using [Handlebars if block helpers](http://handlebarsjs.com/builtin_helpers.html). Here's how they work: 

```javascript
{{#if someTrueThing}}
<p> Something is true!</p>
{{else}}
<p> Something is not true :( </p>
{{/if}}
```

Use the if helper to wrap your rendering of a product's details in the component. If there is a `{{product}}`, show the details. Otherwise, don't show anything. 

#### Passing Data Into the Component

Now we're ready to tackle the question of passing a product into the `{{show-product}}` component. The first thing you need to know is that its easy to pass data into a component! We simply set a property equal to the object we want access to inside our component, when we call the component. 

For example:

```javascript
{{show-product product=currentProduct}}
```

Here, we set a property, `product`, equal to some object. This has the effect of giving our component template access to a whatever object is stored in `currentProduct`, referenced within the component template by `{{product}}`. Think of it like passing an instance variable into a Rails partial. 

But, you are might be wondering, how do we dynamically pass the *right* product into the component, in response to the user clicking on a product's name? This is where controller actions come in. We need to build a controller and tell it to response to the action of the user's click on a product name by setting the `currentProduct` property equal to the product that the user clicked on. Let's do it!

#### Building Out the Controller Action

First, generate a controller from the command line with `ember g controller products`. That will create the file: `app/controllers/products.js`. 

In our controller, we'll define an action, `showMore`, that takes in an argument of a product and does the job of setting the `currentProduct` property equal to that product. Here's the syntax you want to use:

```javascript
# app/controllers/something.js

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    someAction: function(item){
      this.set('propertyName', item);
    }
  }
});

```

Then, we'll add our action to the element on the `products.hbs` page that contains the product name, so that it is trigged when a user clicks the product name:

```javascript
<h4 {{action 'showMore' product}}>{{product.name}}</h4>
```

Note that we pass the `{{product}}` object into the action as an argument by simply adding it to the action like this:

```javascript
{{action 'actionName' argument}}
```

Now, test it out! Connect to your app via `ember s` and try clicking on various product names. You should see the product details appear to the right with each click. Run the tests by visiting `localhost:4200/tests` and you should be passing. 



















<p data-visibility='hidden'>View <a href='https://learn.co/lessons/flatiron-ember-store' title='Flatiron Ember Store'>Flatiron Ember Store</a> on Learn.co and start learning to code for free.</p>

<p class='util--hide'>View <a href='https://learn.co/lessons/flatiron-ember-store'>Flatiron Ember Store</a> on Learn.co and start learning to code for free.</p>
