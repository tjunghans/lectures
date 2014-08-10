##Frontend Testing
Frontend can be JavaScript or JavaScript in combination with HTML and CSS. It makes sense to organize the frontend into modules (or components, widgets) instead of entire web pages. Anything that can be independently reused should be a module. Each module is tested separately and also in conjunction with other modules, to test a flow.

## Unit, Component and UI tests
When writing tests for web frontends you will be writing tests on different levels. These levels or either unit, component or ui.

**Unit tests** are the most granular and smallest tests. Unit tests are for testing methods and functions, making sure that input leads to the expected output or exception. A unit test will contain **one or more asserts which test one case**. Unit tests will test a method in complete isolation.
Dependencies - if any - should be minimized or stubbed.

**Component tests**
Component tests are similar to unit tests but with a  higher level of integration. A component may consist of
more than one JavaScript library, html and css. Component tests will verify that the component works in isolation.
Any messaging to services or other components will be mocked or stubbed.

**UI tests**
These are high level tests to verify the user flow and interaction. This could be filling out a multi-step form with ajax
validation.

What can be tested and how?
### JavaScript class methods and functions
Testing JavaScript only - without DOM - can be achieved with unit tests.

### JavaScript classes together
Still testing JavaScript only - without DOM - and these are now integration tests.

### Module
JavaScript, HTML and CSS combined - with DOM. These tests require a browser to test against the DOM, for example if the existance or change of html needs to be tested.

## Unit and integration tests
JavaScript on its own can be tested with unit tests. Unit tests are atomic and validate the functionality of a method or function. JavaScript and JavaScript - two or more module - that play together can be tested with integration tests.



## References
- <http://blogs.msdn.com/b/raulperez/archive/2010/04/29/unit-testing-component-level-testing-and-ui-testing-what-to-use-and-when.aspx>
