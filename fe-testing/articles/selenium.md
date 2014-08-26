# Selenium

## Overview
Selenium is a browser automation tool. Whatever you would do when testing a website, such as navigating with links, clicking a button or typing text, can be automated with Selenium. Selenium sends commands the browser via the JSON protocol and [Webdriver API](http://www.w3.org/TR/webdriver/).

There is a good introduction with a quickstart tutorial to Selenium on http://engineering.wingify.com/posts/e2e-testing-with-webdriverjs-jasmine/.

## The Webdriver
Selenium controls the browser via the Webdriver API. The Webdriver API is defined by WC3 as
> a platform and language-neutral interface and associated wire protocol that  allows programs or scripts to introspect into, and control the behaviour of, a web browser. The WebDriver API is primarily intended to allow developers to write tests that automate a browser from a separate controlling process, but may also be implemented in such a way as to allow in-browser scripts to control a — possibly separate — browser.

Source: http://www.w3.org/TR/webdriver/

There are various language bindings for the webdriver such as Java, CSharp, Ruby, PHP, Python, Perl and JavaScript (more of that [here](http://docs.seleniumhq.org/docs/03_webdriver.jsp)).

We will focus on the JavaScript Webdriver, the WebdriverJS.

## WebdriverJS
The WebdriverJS language binding allows to communciate with the Webdriver API using JavaScript. The official project page is https://code.google.com/p/selenium/wiki/WebDriverJs. I personally find this website confusing and poorly structured. Thankfully there are two projects that make writing tests using Selenium and JavaScript much easier.

- [NightwatchJS](http://nightwatchjs.org/)
- [Webdriver.io](http://webdriver.io/)

We will have a look at the [latter](http://webdriver.io/).

