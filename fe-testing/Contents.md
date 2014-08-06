# Client Testing and Project Automation
## Contents
- [Introduction](introduction.md)
- Frontend Testing
- Writing testable JavaScript
- Unit Testing
- Functional Testing
- E2E/Integration Testing
- Behaviour Driven Testing (BDD)
- Test Driven Development
- Frameworks: Qunit, Jasmine, Mocha (Mochify), Chai, Sinon
- Selenium

- GruntJS

## Introduction
These notes are part of a four hour course on frontend testing which is divided into two hours of theory and two hours of practice.
This is just enough time for an introduction to frontend testing and the first of many steps that will hopefully follow.

### Goal
The goal of this course is to show at least one way of testing frontend code, give an overview of available testing tools and frameworks and to

### Reading material
This course makes use of theory and examples from [Test-Driven JavaScript Development by Christian Johansen](http://tddjs.com/), a book I can highly recommend. Christian Johansen is also the creator of [Sinon.JS](http://sinonjs.org/), a JavaScript library for creating mocks, stubs and spies.

### No silver bullet

## Frontend Testing
Frontend testing depends on the...

## Testable JavaScript
Testing JavaScript is only possible or at least a lot easier if JavaScript functions and methods are written in a way that makes them easy to test. The best article about writing testable JavaScript that I have come across so far is [Writing testable JavaScript - by Rebecca Murphy](http://alistapart.com/article/writing-testable-javascript).

## xUnit
"xUnit is a collective name for several unit testing frameworks" - http://en.wikipedia.org/wiki/XUnit

### xUnit architecture
An xUnit architecture consists of the following elements:
- test runner
- test case
- test fixtures
- test suites
- test execution
- test result formatter
- assertions

### Test Execution
There are four phases for each execution sequence:
setup, exercise, verify, teardown

## Unit Testing
A unit test focuses on one part of the software at a time. A unit test often depends on
the functionality of other software parts.
xUnit tests follow a typical four phase sequence: setup, exercise, verify, teardown.

**Notes**
- Try to only test public api methods

## Functional Testing

## Test Doubles
***Dummy*** objects are passed around but never actually used. Usually they are just used to fill parameter lists.

***Fake*** objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an in memory database is a good example).

***Stubs*** provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test. Stubs may also record information about calls, such as an email gateway stub that remembers the messages it 'sent', or maybe only how many messages it 'sent'.

***Mocks*** are what we are talking about here: objects pre-programmed with expectations which form a specification of the calls they are expected to receive.

**The Difference Between Mocks and Stubs**
Source: http://martinfowler.com/articles/mocksArentStubs.html#TheDifferenceBetweenMocksAndStubs

**Notes**
- Avoide mocks
- Use stubs if you do not need the original functionality and just want to observe
- Use spies to observe original functionality



## Selenium
Selenium is a browser automation tool. Selenium can be used to perform actions a user would normaly do. The results of these actions can then be tested with a programming language and testing framework of choice.
When I speak of Selenium I am refering to the Seleniun Webdriver.

### Selenium IDE
The easiest way to write tests and play around with Selenium IDE which is a Firefox add-on. It is possible to write tests in Firefox and then use them else where [!!!VERIFY].

## GruntJS

