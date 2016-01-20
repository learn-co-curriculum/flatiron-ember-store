# Flatiron Ember Store

## Objectives

1. Define a route that renders a specific handlebars template. 
2. Define a route handler to return model data. 
3. User Handlebars to render model data.
4. Build a controller action to respond to user events on the page. 
5. Build a component and pass data into that component to be rendered on the page. 

## Overview

Our goal is to create a simple Ember app that allows uses to quickly and easily browse the products available for sale at the Flatiron Ember Store. A user should be able to visit the landing page and click a link to the products index page. On that page, a user should be able to click on the name of any product on the list and see the product details rendered immediately on the page, without the page having to refresh and without visiting another page. Check out the demo below to get a better idea of what we'll be building:

<iframe width="640" height="480" src="https://www.youtube.com/embed/oI9zoqLBKjc" frameborder="0" allowfullscreen></iframe>

In order to implement this super responsive functionality, we'll be using Ember components and controller actions. Here's how it's going to work: We'll create a controller that has an action to respond to a user clicking the name of a product. That controller action handler will do the job of passing that product's data into a component, and the component will be responsible for rendering the data on the page. 

Let's get started!

## Instructions

Fork and clone this lab to begin, use the guidelines here in conjunction with running the test suite. Remember you can run the tests by connecting to the server with `ember s` and visiting `localhost:4200/tests`. 

