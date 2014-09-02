# Test Driven Development (TDD)
Writing tests first is a big aid in the design of production code. One only implements what is needed and is forced to think about implementation details before writing code. Tests will show you cases you may not think of at first and eliminate the chance of a future bug.

## TDD Cycle
In the book [Test-Driven Development by Example](http://www.amazon.com/dp/0321146530/) author Kent Beck explains the **tdd cycle** with the following steps:

>1. Quickly add a test.
>2. Run all tests and see the new one fail.
>3. Make a little change.
>4. Run all tests and see them all succeed.
>5. Refactor to remove duplication.

A first assertion will check if the method is available. A second may test for the correct arguments. Another for the expected return value and so on. Writing assertions step by step and only writing the minimum amount of code to make the test go green, will keep the production code lean. Less code means less to debug and improved readability.

## Writing better unit tests
In the last chapter of his book [Test-Driven JavaScript Development](http://www.tddjs.com), Christian Johansen has tips on writing better unit tests.

- Improve readability by clearly stating the intent of the test.
- Keep tests small and simple. This also goes for production code.
- A good test suite (collection of unit tests) should serve as a documentation for the production code being tested.
- Name the test clearly. If you are using bdd then keep the requirement as short and precise. eg. "it should `verb goes here` something".

Further reading:
- http://www.agiledata.org/essays/tdd.html
- http://en.wikipedia.org/wiki/Test-driven_development
- http://martinfowler.com/articles/is-tdd-dead/
