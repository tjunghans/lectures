# Testing Tools
Tools cover
- test frameworks,
- browser automation,
- any other plugins or utility that aids in writing, running and displaying tests.

The choice of tools depends on how and what you want to test. To learn it is best to play around with all of them and pick your favourite and what works for your production code.

## Test Frameworks
- [Jasmine](http://jasmine.github.io/2.0/introduction.html)
- [QUnit](http://qunitjs.com/)
- [Mocha](http://visionmedia.github.io/mocha/)

### Jasmine
Jasmine is a behaviour driven testing framework for JavaScript. Jasmine runs tests in the browser, just like QUnit. There is also a node plugin, [jasmine-node](https://github.com/mhevery/jasmine-node).

### QUnit
QUnit is jQuery's testing framework. QUnit is an independent framework and does not require jQuery or any other library to run. QUnit is easy to use and it is similar to Jasmine without the BDD syntax.

### Mocha
Mocha is my framework of choice. It's written for Node JS but can be used to test JavaScript in the browser in conjunction with the node package mochify.

## Browser Automation
- Selenium
- PhantomJS (headless browser testin)
- [NightwatchJS](http://nightwatchjs.org/), a NOodeJS

## Stubbing, Moching and Spies
I recommend [Sinon](http://sinonjs.org/), which is a dedicated library and very powerful. Sinon is a project by Christian Johansen, the author of [Test-Driven JavaScript Development](http://tddjs.com/).


