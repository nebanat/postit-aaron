[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/nebanat/postit-aaron.svg?branch=master)](https://travis-ci.org/nebanat/posit-aaron)
[![Coverage Status](https://coveralls.io/repos/github/nebanat/postit-aaron/badge.svg?branch=develop)](https://coveralls.io/github/nebanat/postit-aaron?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/69b24810c071027dde76/maintainability)](https://codeclimate.com/github/nebanat/postit-aaron/maintainability)

# POSTIT
PostIt is modern web application that allows users to create groups and send and receive broadcast messages from their groups

PostIt is built with Javascript (ES6), ReactJs , Redux, NodeJs
## Installation 

1. Install [`node`](https://nodejs.org/en/download/), version 5 or greater

2. Install [`postgres`](https://www.postgresql.org/download/)

3. Clone the repo and cd into it

    ```
    git clone https://github.com/nebanat/postit-aaron.git
    cd postit-aaron
    ```

4. Install all dependencies

    ```
    npm install
    ```

5. Configure Postgres

    ```
    configure your database settings for development and test in
    `./server/config/config.json` 
    ```

6.  Run database migrations

    ```
    $ sequelize db:migrate
    ```

7. Start the app

    ```
    npm start
    ```

8. Open running application

    ```
    http://localhost:3000/
    ```    
## Features

* Create an account with username,email and password.
* Login with you new details(username,password).
* Create a new group.
* Post messages to groups you belong to.
* Add a users(friends) to groups you created or belong to.
* Retrieve list of messages in groups that you belong to. 
* View Group Members
* Reset Password (In case you forget password)

## Testing
The app uses: 
* `Mocha/Chai` and `Chai-Http` for backend testing.
* `Enzyme` and `Jest` for frontend testing
* `NightWatch` for End-2-End testing

> - `npm test` - to run test for backend
> - `npm run client:test` - to run test for frontend
> - `npm run e2e-test` - to run e2e test 

## Built With
* [NodeJS](https://nodejs.org/en/) - A Javascript runtime built on chrome V8 engine that uses an event-driven non-blocking I/O model that makes it lightweight and efficient.
* [ExpressJS](http://expressjs.com/) - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [PostgreSQL](https://www.postgresql.org/) - A powerful, open source object-relational database system.
* [Sequelize](http://docs.sequelizejs.com/) - An ORM for Node.js that supports the dialects of PostgreSQL and features solid transaction support an relations.
* [ReactJS](https://www.reactjs.org/) - A JavaScript library for building user interfaces by Facebook.
* [Redux](http://redux.js.org/) -  A predictable state container for JavaScript apps.
* [MaterializeCSS](http://materializecss.com/) -  A CSS framework supported by Google.

## Contributing
If you are interested in contributing to development of PostIt-Application,

Follow the instructions below to contribute.
* Fork the repository

* Make your change

* Commit your change to your forked repository

* Provide a detailed commit description

* Raise a pull request against the develop branch

* Please see [Project wiki](https://github.com/nebanat/postit-aaron/wiki) for project conventions

## API Documentation
Click [Here](https://postit-aaron-app.herokuapp.com/apidocs/) to view our detailed API documentation 

## License
[MIT](https://github.com/nebanat/postit-aaron/blob/develop/LICENSE)

## FAQ

#### Who can contribute?

    Anyone can! Just follow the contribution guidelines above
    
#### Is there a set standard for PRs to this repository?

    Yes please check the project wiki for project conventions.
    
#### Can I clone this application for personal use?

    Yes!. This application is licensed under MIT, and is open for
    everybody