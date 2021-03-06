# Testing Vocabulary
This article gives an overview of some important terms.

## The Unit Test
- a piece of code that tests a piece of production code
- should be easy and fast to run (otherwise developers won't run them)
- should test software components in isolation
- no test should depend on another test
- dependencies need sometimes be mocked or stubbed
- should be runnable at any time
	+ when implementation is completed
	+ after changes are made
	+ when new components are added

## Integration Tests
> "Integration tests test the sum of its parts. Ideally those parts are unit tested and known to work correctly in isolation."

> "Consider a car manufacturer assembly line. Unit testing corresponds to verifying each individual part of the car: the steering wheel, wheels, electric windows, and so on. Integration testing corresponds to verifying that the resulting car works as a whole, or that smaller groups of units behave as expected, e.g., making sure the wheels turn when the steering wheel is rotated."

Source: http://tddjs.com

## Assertions
- the heart of a unit test
- is a boolean-valued function, that shows the intended state of a system
- used in unit tests to perform checks i.e if something is true or another expected value
- if the assertion fails, the test is aborted

A simple assertion:

```javascript
function assert(statement, message) {
	if (!statement) {
		throw new Error(message);
	}
	return true;
}
```
[jsFiddle example](http://jsfiddle.net/tangibleJ/8apt9ag9/1/)

## Test Functions, Cases and Suites
- A test function exercises one unit of code and consists of one or more assertions
- A test case is a set of related test functions
- In larger systems one or more test cases are grouped in test suites

## Test Runner
A test runner is the most important part of a testing framework. It runs the assertions organised in testcases and suites and prints out a report of which tests have passed/failed, how long they took and error messages.

Test frameworks such as **QUnit**, **Jasmine** and **Mocha** have test runners that run in the browser. Mochas also has a Node test runner and for the others there is a npm package.

## Red and Green
- failed tests are referred to as red
- successful tests are reffered to as green

These colours are also used by most test runners.

## Setup and Teardown / BeforeEach and AfterEach
TDD and BDD test Suites know the setup/beforeEach and teardown/afterEach hooks. The 'setup'-hook is run before every test case and is used to prepare the code to be tested, such as instantiate a class, load dependencies and set configs. 'teardown' runs after each test case and cleans up through resetting, unsetting and unbinding, etc.

## TDD
See [TDD](./tdd.md)

## BDD
See [BDD](./bdd.md)

Next:
[Frontend Testing](frontend-testing.md)
