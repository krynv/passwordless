# Passwordless App

[![CircleCI](https://circleci.com/gh/krynv/passwordless.svg?style=svg)](https://circleci.com/gh/krynv/passwordless)

A simple 'passwordless' authentication app for signing in to a website using a web link sent via email. 

This solution uses Angular 8 with routing, [Google Firebase](https://firebase.google.com/docs) and [AngularFire 2](https://github.com/angular/angularfire20) for authentication and hosting.

# Live Demo
https://passwordless.flix.industries


> **Note**: You need to have the latest version of NodeJS installed (10.9+ for Angular CLI 8+) to run this project locally.

Clone:

    git clone git@github.com:krynv/passwordless.git

Install dependencies:

    npm i
    npm i -g @angular/cli

Run app: 

    npm start

Access app at:

http://localhost:4200/

This application will send you an email link to log in.

Please note that for demo purposses, the callback URL is set to the hosted app on firebase - so it will prompt you for additional verification when you run the app locally & click the verification link you received via email.
