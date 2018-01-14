# javascript-robot

This is a toy robot program designed to solve the problem described in challenge.md

## Start the application
```javasscript
npm start
```

## Test the application

Install dependencies:
```javascript
npm install 
```

Run tests:
```javacript
npm test
```

## Solution

The solution chosen for this challenge was a command pattern approach. 
The intention of this approach is to create decoupled code and to prevent 'switch statement hell' making it easier to follow. 
It would also be beneficial if more commands were nessecary at a later stage

There are domain objects for the Table and Robot which the commands will be used by the command method parsed from user input

The commands update the robots state and validate it against the tables limits

The mover object is simple and purely responsible for instantiating the table, calling the command and referencing current robots instance state
Despite calling the command, the mover object does not know about the command. It just passes the domain instances into it to be used.

The project only has one third party library which is Jest, used for the test runner

## Improvements

With more time there are a few things that I would perhaps consider:

- Moving logic to parse the command into the mover which would simplify the tests though perhaps adding more logic to the Mover
- Remove the turn method from internal the robot class, simplifying it. This however was implemented this way due to JS lack of Enums


