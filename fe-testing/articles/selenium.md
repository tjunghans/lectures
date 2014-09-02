# Selenium

## Overview
Selenium is a browser automation tool. Whatever you would do when testing a website, such as navigating with links, clicking a button or typing text, can be automated with Selenium. Selenium sends commands the browser via the [JSON protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol) and [Webdriver API](http://www.w3.org/TR/webdriver/).

There is a good introduction with a quickstart tutorial to Selenium on http://engineering.wingify.com/posts/e2e-testing-with-webdriverjs-jasmine/.

## The Webdriver
Selenium controls the browser via the Webdriver API. The Webdriver API is defined by WC3 as
> a platform and language-neutral interface and associated wire protocol that  allows programs or scripts to introspect into, and control the behaviour of, a web browser. The WebDriver API is primarily intended to allow developers to write tests that automate a browser from a separate controlling process, but may also be implemented in such a way as to allow in-browser scripts to control a — possibly separate — browser.

[Source](http://www.w3.org/TR/webdriver/)

There are [various language bindings](http://docs.seleniumhq.org/docs/03_webdriver.jsp) for the webdriver such as Java, CSharp, Ruby, PHP, Python, Perl and JavaScript.

We will focus on the one for JavaScript, the WebdriverJS.

## WebdriverJS
The WebdriverJS language binding allows to communciate with the Webdriver API using JavaScript. The official project page is https://code.google.com/p/selenium/wiki/WebDriverJs. I personally find this website confusing and poorly structured. Thankfully there are two projects that make writing tests using Selenium and JavaScript much easier.

- [NightwatchJS](http://nightwatchjs.org/)
- [Webdriver.io](http://webdriver.io/)

We will have a look at the [latter](http://webdriver.io/).

### WebdriverJS confusion
Don't get confused by
- the [official WebdriverJS](https://code.google.com/p/selenium/wiki/WebDriverJs) with the node package [selenium-webdriver](https://www.npmjs.org/package/selenium-webdriver) and
- [webdriverjs](https://www.npmjs.org/package/webdriverjs) with it's website at [Webdriver.io](http://webdriver.io/).

They both have the same goal, but reach it differently. Also have a look at [this thread](https://github.com/webdriverio/webdriverio/issues/138) on Github explaining the differences.

### WebdriverIO update
Until [recently](https://twitter.com/webdriverio/status/486277447718297601) the WebdriverIO node package went under [webdriverjs](https://www.npmjs.org/package/webdriverjs). This is now deprecated and replaced by [webdriverio](https://www.npmjs.org/package/webdriverio).

## Webdriver.io installation
This is a step by step guide to get Webdriver.io up and running.

1. Start with the [Webdriver.io Guide](http://webdriver.io/guide.html) as a quickstart.
2. Read the [installation instructions](http://webdriver.io/guide/getstarted/install.html) to get selenium up and running. You can also use the node package [selenium-standalone](https://www.npmjs.org/package/selenium-standalone) to run selenium.
3. At the time of writing the [examples on Github were outdated](https://github.com/webdriverio/webdriverio/tree/master/examples) and aimed at the old WebdriverJS. Instead we'll look at an example I created.

## Webdriver.io, Node, Assert and Mocha

https://github.com/tjunghans/learning-webdriverjs



