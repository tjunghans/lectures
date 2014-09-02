#Frontend Testing
Frontend can be JavaScript or JavaScript in combination with HTML and CSS. It makes sense to organize the frontend into modules or components instead of entire web pages. Anything that can be independently reused should be a module. Each module is tested separately and also in conjunction with other modules, to test a flow.

## Unit, Component and UI tests
When writing tests for web frontends you will be writing tests on different levels. These levels are **unit**, **component** and **ui**.

**Unit tests** are the most granular and smallest tests. Unit tests are for testing methods and functions, making sure that input leads to the expected output or exception. A unit test will contain **one or more asserts which test one case**. Unit tests will test a method in complete isolation.
Dependencies - if any - should be minimized or stubbed.

**Component tests**
Component tests are similar to unit tests but with a  higher level of integration. A component may consist of
more than one JavaScript libraries, html and css. Component tests will verify that the component works in isolation.
Any messaging to services or other components will be mocked or stubbed.

**UI tests**
These are high level tests to verify the user flow and interaction. A user flow could be filling out a multi-step form with ajax
validation. UI tests verify the combination of many components together using the actual user interactions such as mouse clicks and keyboard interactions.
UI tests can also be refered to as integration tests, because ui is tested with the backend.

## Testing-Strategy
### Unit Tests
Try to cover as many tests with **unit tests** since unit tests are fast. TDD helps to achieve this. You will typicaly write unit tests for functions and methods, controller logic. Only test the api, that is, functions that are public. Any methods that aren't for the outside world should be kept private (see [black box driven development](https://hacks.mozilla.org/2014/08/black-box-driven-development-in-javascript/)) and do not need testing. They will be tested transitively.

**Example: API exposure**
```javascript
// TODO: Create example 10.9.2014
```

### Component Tests
When DOM is required you will write **component tests**. Testing with the DOM means you will either mock the DOM or use a headless browser such as [PhantomJS](http://phantomjs.org/) (and a [helper](http://casperjs.org/)) or Selenium using PhantomJS. There's a [list of headless web browsers](https://gist.github.com/evandrix/3694955) on Github.
The reason for using a headless browser is because it's faster than opening up normal browser with a gui.

Unit and component tests will run on every change - with every save - meaning, they have to be fast!

### Integration Tests
Integration tests or UI tests test components playing together using browser automation to automate the user flow. These tests will run once or twice a day or maybe even overnight because they are slow and take time. UI tests will use Selenium for browser automation, just like component tests, but with all systems (database, authorization, etc) being used.

## Reference
- <http://blogs.msdn.com/b/raulperez/archive/2010/04/29/unit-testing-component-level-testing-and-ui-testing-what-to-use-and-when.aspx>
