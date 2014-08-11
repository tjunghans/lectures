# Introduction
Welcome. My background is frontend engineering and since recently web application development. Testing on a daily basis is relatively new to me. Trying to test on a daily basis is something I've been aiming for for a long time. After giving it some thought it is clear to me as to why frontend testing is challenging. When I speak of frontend testing I mean unit tests for JavaScript code and integration tests for user flowers. In the past years I've asked myself how I can write testable code, which test framework to use, how to run the tests on my machine as well as everyone else's including an integration server and lasty how to get everyone to write tests.

Getting everyone to write tests is easy if writing the actual tests and running them is easy. Choosing the right test framework can also prove a challenge because there are so many out there. I personally went for the most spoken about framework which currently is Mocha or Jasmine. The BDD syntax seems to be more popular compared to TDD. Jasmine's popularity is underlined by Google's AngularJS, which uses Jasmine for unit tests and has its own integration test framework called Protractor with the same BDD syntax as Jasmine.

Writing tests is easy or at least easier when the code being tested is written in a way that makes it easy to tests. The key tip is to write small functions and methods that do only one thing, where one does not have to scroll to see the entire function body. Small functions are easier to test and debug.

## Goal
The goal of this course is to show at least one way of testing frontend code, give an overview of available testing tools and frameworks and to

###Reading material
This course makes use of theory and examples from [Test-Driven JavaScript Development by Christian Johansen](http://tddjs.com/), a book I can highly recommend. Christian Johansen is also the creator of [Sinon.JS](http://sinonjs.org/), a JavaScript library for creating mocks, stubs and spies.
