Hi Vineti Folks!

Thanks so much for reviewing my code challenge. 

Before you run the tests, you'll need to fill in the "password" value in the cypress.json file. Here's how to do that:
    1. Navigate to cypress.json.
    2. Type "supersecret" as the value for "password." (I know. Hardcoding passwords ANYwhere in the repo is bad practice, but to save you time and headaches I chose not to mess       with env variables or secure password storage )
    3. Save the changes (if your IDE doesn't do that automatically).

To run headless tests:
    $(npm bin)/cypress open
To run tests in Chrome viewer:
    $(npm bin)/cypress run

