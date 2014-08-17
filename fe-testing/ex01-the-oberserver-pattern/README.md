# The Observer Pattern
TDD by writing an observer pattern library. This is an exercise taken out of the book [Test-Driven JavaScript Development - By Christian Johansen](http://www.tddjs.com), page 219.

## Definition of the observer pattern
> The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

[Wikipedia](http://en.wikipedia.org/wiki/Observer_pattern)

## Setup & Run
1. Checkout and change into [this directory](https://github.com/tjunghans/lectures/tree/master/fe-testing/ex01-the-oberserver-pattern).
2. In the console, run `make install`. This will install the node module.
3. When everything is installed, run `make` or `make test` to run the tests.

## Explanation
Unlike in the example in the book, the Observer-library is written in the context of NodeJS and the tests are written with Mocha and [Assert](http://nodejs.org/api/assert.html). This is probably the easiest way to write tests with Mocha.







