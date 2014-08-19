# Testing Basics
This article covers the basics very quickly. Most of it is derived from [Christian Johansen's excellent book, Test-Driven JavaScript Development](http://tddjs.com) and summarized.

Following now are some terms that you should become familiar with when testing.

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
}
```
[jsFiddle example](http://jsfiddle.net/tangibleJ/8apt9ag9/1/)

## Red and Green




[Frontend Testing](frontend-testing.md)
