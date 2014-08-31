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

## Testing-Strategy
Try to cover as many tests with **unit tests** since unit tests are fast. TDD helps to achieve this.

When DOM is required you will write **component tests**. Testing with the DOM means you will either mock the DOM or use a headless browser such as [PhantomJS](http://phantomjs.org/) (and a [helper](http://casperjs.org/)) or Selenium using PhantomJS. There's a [list of headless web browsers](https://gist.github.com/evandrix/3694955) on Github.

## Reference
- <http://blogs.msdn.com/b/raulperez/archive/2010/04/29/unit-testing-component-level-testing-and-ui-testing-what-to-use-and-when.aspx>
