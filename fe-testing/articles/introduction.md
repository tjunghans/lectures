# Introduction
Welcome. I am a web application developer and I've been working with the web since 1999. Testing on a daily basis is relatively new to me. I started writing tests quite a few years ago, but only in the last two years have I gotten serious about it. The urge to have the code I write tested was becoming stronger and stronger. This can be explained with the increase in JavaScript, the popularity of AJAX and the increasing the demands the user has in a website ui.

Trying to test on a daily basis is something I've been aiming for for a long time. After giving it some thought it is clear to me as to why frontend testing is challenging. In the past years I've asked myself the following questions:

1. How can I write tests so that it's fun or at least easy?
2. How I can write testable JavaScript?
3. Which test framework(s) do I use?
4. How can I run tests on my machine as well as everyone else's including an integration server
5. Lasty how do I get everyone else to write tests in the team?

## Motivation for writing tests
The last question is easiest to answer. I recently joined a new team at Julius Baer with a fantastic testing environment. Writing tests is easy thanks to an excellent testing environment and the applications well documented mvc architecture. Because of the ease, writing tests is a joy. By writing tests I can prove my code works as I intend it too and I can refactor and add on without worry.

## Running tests
The excellent testing environment that let's me run unit tests and component tests locally as well as full integration tests with selenium on a server must have taken some time. I'm fortunate to work with [Maximilian Antoni](http://maxantoni.de/), lead web application developer, major contributor of [Sinon](http://sinonjs.org/) and author of several node plugins such as [mochify](https://www.npmjs.org/package/mochify).

## Chosing a framework
Choosing the right test framework can  prove a challenge because there are so many out there. I personally think it's best to pick most popular one(s) and play around a bit. In my case that would be QUnit, Jasmine and since recently Mocha. The BDD syntax seems to be more popular compared to the class xunit assertions. Jasmine's popularity is underlined by AngularJS, which uses Jasmine for unit tests and has its own integration test framework called [Protractor](https://github.com/angular/protractor) with the same BDD syntax as Jasmine.

## Testable JavaScript
Writing tests is easy or a lot easier when the code being tested is written in a way that makes testing easy. The key tip is to write small methods and functions, keep DOM dependencies and dependencies in general as low as possible, ensure that methods to be tested - mainly api methods - are public. Applying tdd enforces the writing of testable code.

## Goal of this course
The goal of this course is to discuss the above points and to show at one way of testing frontend code to give a head start. Knowing where to begin and that writing tests depends heavily on how you write code and setup your application and development environment. We'll look at that too.

##Reading material
This course makes use of theory and examples from [Test-Driven JavaScript Development by Christian Johansen](http://tddjs.com/), a book I can highly recommend. Christian Johansen is also the creator of [Sinon.JS](http://sinonjs.org/), a JavaScript library for creating mocks, stubs and spies.

## Next
[Frontend Testing](frontend-testing.md)