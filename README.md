# testing-lab

Link to Trello for part 1: https://trello.com/b/teYcX5ub/week-5-testing-lab

Testing Lab
Part 1
Clone and run the Wanted Queries application by using the following commands in your terminal

Navigate to the folder you want to store this inside in command line and run the following commands:

git clone -b version-1.1 https://github.com/DevMountain-QA/wanted-queries.git

cd wanted-queries

npm i

npm start

The Wanted Queries app should be up and running in your browser

Review the requirements located here: https://github.com/DevMountain-QA/wanted-queries/blob/version-1.1/README.md

Create a test plan to organize your testing, and create a total of 5 tests:

2 high level (broad) tests

2 low level (specific) tests

1 smoke/sanity test (basic run through of the whole site)

There is no “Bug Bounty”, however you should have enough coverage in your tests to find some flaws with the application

Part 2
For part 2 you will need to create a directory and open it up in VS Code. Call the directory testing-lab.

Step 1
In this step, we’ll initialize a package.json and import Jest into our project.

Instructions:

Run npm init -y.

Run npm install --save-dev jest to install Jest and save it to the development dependencies.

Open package.json and modify the test script, replacing the entire string with `jest`

Step 2
In this step, create a JavaScript file that has a couple functions.

Instructions:

Create a functions.js file.

Use module.exports to export an object.

Add a new property to the object called returnTwo:

returnTwo should be a function that returns the integer 2.

Add a new property to the object called greeting:

greeting should be a function with a name parameter.

greeting should return "Hello, name." where name is the value of the name parameter.

Add a new property to the object called add:

add should be a function with a num1 and num2 parameter.

add should return the sum of num1 and num2.

Step 3
In this step, we’ll create a test file to test the functions inside of functions.js.

Instructions:

Create a new test file called functions.test.js.

Open functions.test.js.

Require functions.js at the top.

Create a test for returnTwo:

This test should expect returnTwo() to equal 2.

Create a test for greeting:

This test should expect greeting('James') to equal "Hello, James.".

This test should expect greeting('Jill') to equal "Hello, Jill.".

Create a test for add:

This test should expect add(1, 2) to equal 3.

This test should expect add(5, 9) to equal 14.

Step 4
In this step, we’ll run our test script and watch Jest in action.

Instruction:

Run npm run test.

If everything worked correctly, you should have a total of 3 passed tests.

Challenge
If you have finished the lab and still have some time remaining, take on this challenge.

Instructions:

Open functions.js.

Add a new function for multiply, divide, and subtract:

All these functions should follow the same structure as the add function.

Open functions.test.js.

Add a new test case for multiply, divide, and subtract:

All these tests should follow the same structure as the add test case.

Use whatever numbers you like, but include two ``expect``s.

Group the add, multiply, divide, and subtract test cases using describe.

You will want to go look up the jest documentation to learn the correct syntax for a describe block.

Call this group Math functions.

Run npm run test.

Once you’ve run your new tests, go back through all of your tests and see if there are other things you can check for

check data types

read through jest documentation for other ideas

think about edge cases and add to your tests and functions in order for these edge cases not to break things. some ideas:

what will happen if more arguments are sent in than there are parameters?

what will happen to a math function if a string is sent in

what if a falsey value is sent into the function?