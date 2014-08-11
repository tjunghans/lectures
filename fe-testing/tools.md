## Tools
Tools covers frameworks, test runners and any other plugins or utilities that aid in writing, running and displaying tests. Currently there are plenty of tools available but no real standard way of doing things.

My personal suggestion of tools for different levels of testing:

### Unit testing
- Jasmine
- QUnit
- Mocha

### Component Testing
- Mocha running tests with Node. Use [mochify](https://www.npmjs.org/package/mochify) to run tests in the frontend. Mochify uses Browserify,  Selenium, PhantomJS and Mocha to run tests in the frontend as well.
- Selenium

Component and UI testing could use the same tools, but selenium is relatively slow, especially when you are testing thoroughly with multiple browsers. Use selenium when you need a real browser and different JavaScript engines. PhantomJS is a headless browser that let's you know your JavaScript is in good shape.

### UI Testing
- Selenium
- Mocha
- [NightwatchJS](http://nightwatchjs.org/)
