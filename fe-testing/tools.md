## Tools
Tools cover
- frameworks,
- test runners and
- any other plugins or utility that aids in writing, running and displaying tests.

Currently there are plenty of tools available but no real standard way of doing things.

My personal suggestion of tools for different levels of testing are listed below. There is no official list of pros and cons and I cannot tell you which is best, but I do know what works. The choice of tools depends on the type of website you are testing and the technologies in use. You may not want to introduce or feel comfortable with NodeJS. You may be working with a content driven website such as a cms or a web application with an mvc architecture.

The best is to play around with all of them and pick your favourite and what works for your code.

### Unit testing
- [Jasmine](http://jasmine.github.io/2.0/introduction.html)
- [QUnit](http://qunitjs.com/)
- [Mocha](http://visionmedia.github.io/mocha/)

#### Jasmine
Jasmine is a behaviour driven testing framework for JavaScript. Jasmine runs tests in the browser, just like QUnit. There is also a node plugin, [jasmine-node](https://github.com/mhevery/jasmine-node).

#### QUnit
QUnit is jQuery's testing framework. QUnit is an independent framework and does not require jQuery or any other library to run. QUnit is easy to use and it is similar to Jasmine without the BDD syntax.

#### Mocha
Mocha is my framework of choice. It's written for Node JS but can be used to test JavaScript in the browser in conjunction with the node package mochify.

### Component Testing
- Mocha running tests with Node. Use [mochify](https://www.npmjs.org/package/mochify) to run tests in the frontend. Mochify uses Browserify,  Selenium, PhantomJS and Mocha to run tests in the frontend as well.
- Selenium

Component and UI testing could use the same tools, but selenium is relatively slow, especially when you are testing thoroughly with multiple browsers. Use selenium when you need a real browser and different JavaScript engines. PhantomJS is a headless browser that let's you know your JavaScript is in good shape.

### UI Testing
- Selenium
- Mocha
- [NightwatchJS](http://nightwatchjs.org/)

### Stubbing, Moching and Spies
I recommend [Sinon](http://sinonjs.org/), which is a dedicated library and very powerful. Sinon is a project by Christian Johansen, the author of [Test-Driven JavaScript Development](http://tddjs.com/).


