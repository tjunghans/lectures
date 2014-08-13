# Test Driven Development (TDD)
Writing tests first is a big aid in the design of production code because one only implements what is needed. A first assertion will check if the method is available. A second may test for the correct arguments. Another for the expected return value and so on. Writing assertions step by step and only writing the minimum amount of code to make the test go green, will keep the production code lean. Less code means less to debug and improved readability.

## Writing better unit tests
In the last chapter of his book [Test-Driven JavaScript Development](http://www.tddjs.com), Christian Johansen lists so very useful tips on writing better unit tests.

- Improve readability by clearly stating the intent of the test. Keep tests small and simple. This also goes for production code.
- A good test suite (collection of unit tests) should serve as a documentation for the production code being tested.
