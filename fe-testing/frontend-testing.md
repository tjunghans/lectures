##Frontend Testing
Frontend can be JavaScript or JavaScript in combination with HTML and CSS. It makes sense to organize the frontend into modules (or components, widgets) instead of entire web pages. Anything that can be independently reused should be a module. Each module is tested separately and also in conjunction with other modules, to test a flow.

## Things to test
What can be tested and how?
### JavaScript class methods and functions
Testing JavaScript only - without DOM - can be achieved with unit tests.

### JavaScript classes together
Still testing JavaScript only - without DOM - and these are now integration tests.

### Module
JavaScript, HTML and CSS combined - with DOM. These tests require a browser to test against the DOM, for example if the existance or change of html needs to be tested.



## Unit and integration tests
JavaScript on its own can be tested with unit tests. Unit tests are atomic and validate the functionality of a method or function. JavaScript and JavaScript - two or more module - that play together can be tested with integration tests.


## No silver bullet
