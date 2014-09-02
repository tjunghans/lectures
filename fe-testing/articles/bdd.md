# BDD
BDD stands for Behaviour Driven Development. BDD is a process like TDD. And, like TDD, BDD sees testing as part of the design process (before development). The BDD emphasises this by using an improved vocabulary to describe test cases.

BDD uses a vocabulary that all stakeholders, from project manager to developer understands.

BDD **describes** a component and what **it should** be able to do by stating **expectations**.

User story example:
"As a calculator I want to be able to add two numbers, so that the return value is the sum of the two numbers."

Example:
```javascript
describe("Calculator", function() {
  it("should add two numbers", function() {
    expect(2 + 2).toBe(4);
  });
});
```
Further reading:
- https://pythonhosted.org/behave/philosophy.html
- http://en.wikipedia.org/wiki/Behavior-driven_development
- http://www.ryangreenhall.com/articles/bdd-by-example.html
- http://jasmine.github.io/2.0/introduction.html
- http://chaijs.com/api/bdd/
