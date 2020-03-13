# Angular-TDD-BDD-2020
An example of how to I like to set up test-driven and behavior-driven agile Angular projects in 2020. 

WIP - (the code in this repo is not yet ready for usage and is still actively under development!)

# Timeless Principles, New Libraries
It's hard to believe that it's been ***4 years*** since I wrote [AngularJS UGAT](), the self-proclaimed "ultimate guide for automated testing" which featured karma and jasmine for unit testing, protractor for UI testing, and cucumber.js for the BDD Gherkin tests.

After being somewhat resentfully thrown into a React project, I fell in love with React because it was "just regular JavaScript" and had a very-functional-if-you-want-it-to-be style which I somewhat preferred to Angular's enforced OOP. After trying out various tools in the React ecosystem I eventually landed on a similar TDD + BDD setup with Jest handling the unit testing side of things and Cypress on the UI automation with the cypress-cucumber plugin giving us the executable BDD Gherkin tests. I liked this setup so much that I created a Gatsby TDD BDD starter template for it.

I'll be on a new team at work soon, and there's a good chance I'll be doing a _lot_ of Angular development in my next role so I decided to build a modern Angular TDD BDD starter project we can use (or easily rebuild from scratch if so desired).


# Unit Tests - Jasmine & Karma
Karma is a great test runner, and I personally very much like the jasmine syntax api. Although Jest is also an excellent tests runner, I didn't really see any super compelling reason why a team would _need_ to use Jest. 

### For unit testing, we have two scripts.

Run unit tests once and create/print code coverage output:
```
npm test
```

Run unit tests in watch mode:
```
npm test:watch
```

# E2e BDD Tests - Choose Your Favorite
While I see unit tests as invoking individual functions and rendering components in insolation to test, the UI automation tests map much more closely to Gherkin syntax. This is why I prefer to use the cucumber plugins for the e2e UI automation tests. In this project I could not decide between Protractor or Cypress so I decided to add both, and they both have their respective cucumber plugins installed! 👍 🥒


## Cypress

// TODO 

## Protractor

// TODO





