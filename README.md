Hi Vineti Folks!

Thanks so much for reviewing my code challenge. 

This test suite handles passwords as environment variables. Here's how to access the password you'll need in order to construct the test script:

1. Copy the password from here: https://docs.google.com/document/d/1j0oIErGByIcQV-r872lEe7vlfmUtYVFBLBFR5yHP_wo/edit?usp=sharing  
2. To run tests via Cypress runner: CYPRESS_password=<*password from step 1*> npx cypress open
3. To run headless tests: CYPRESS_password=<*password from step 1*> npx cypress run

Note: I used google docs today just for simplicity's sake, but in the real world I'd definitely use a more secure password storage solution :) 

Please let me know if you have any trouble running the tests.

-Stephanie Franco
