# Github Mock User Data

_Simple mock user service for testing guthub servie structure._

This project uses [Node SOAP](https://github.com/vpulim/node-soa), to serve the mock service on port `8000`.

## QA Notes and Overview

- The goal and puprose of this project is test and verify the structure of a user's profile data. Three changes are in scope for this update: the storage destination for all user's avatar; additional options being implememnted for a user's 'type' and said user's 'plan'. Business has developed an objective to better manage how vendor, contractor and employee accounts are managed. The first, simply verify that all user's storage destinations has been updated to point to the server's new host name/path. At that, QA would like to also verify no loss or corruption of data in terms of personal image files. Next is the verification of permissions in relationship to plan and user type. For example, any plan below the 'Pro' level should not have access to site admin rights. While a 'Pro' plan user may have access to employee related permisisons, give that they are both a 'Vendor', or 'Contractor' and have an 'Employee' plan or higher.

## Depndencies and Requirements:
- Login to github and navigate to https://github.com/settings/profile, click on 'Developer Settings' at the bottom of thelefthand column. Click on 'Personal access tokens' in the left column, and generate a new token. Once generated, duplicate the .env.example file and rename it, '.env'. 
- More on generating a personal access token here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

## Setup & Run

```sh

# Install dependencies
npm install
# Run Server
npm start
# Run Server and reload on change
npm run-script dev
# Generate new stub file
# unavailable as the solution under developement does not yet have a completed WSDL 
```

_***The following mock service was created under a hypothetical contract of a WSDL that is still in progress._

## Example Request

```sh
curl --header "Content-Type: text/xml;charset=UTF-8" --header "SOAPAction: getAllStatements" --data @FILE_NAME http://localhost:8000/githubby
```

## Running Tests

- Given that the scope of the project covers all plan scales, tests for each structure (free, medium, pro, and employee). All test suites can be run together, or each individually, by the plan grouping.

```sh
# Run Free plan test suite
npm run test:free

# Run Medium plan test suite
npm run test:medium

# Run Pro plan test suite
npm run test:pro

# Run Employee plan test suite
npm run test:employee

# Run all test suites
npm test
```

## Testing Notes

- Requirements schema for test user validation can be found in tests/requirements_schema/user.js. This includes the intended future structural changes to be made to the user profile schema. More specifically is changes to the storage destination or 'pathPrefix' for a user's 'avatar_url'. As well as additional options available for a user's 'type' and 'plan'.

## TODO

- Develop a runner to run the subsequent tests against multiple user ids. This would reduce duplication and allow test case data. Allowing test cases that apply to any/all plans, be run multiple times against different data schemas.