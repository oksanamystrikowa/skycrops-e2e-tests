# skycrops-e2e-tests

This repo contains cypress tests for skycrops.io.
Files with the tests are located in: `./cypress/integration/` directory

## How to install

1) Clone this repo
2) Inside the repo folder root execute: `npm install`
3) Using the instructions from https://github.com/levz0r/gmail-tester/blob/master/README.md#how-to-get-credentialsjson, receive and download credentials file, move it to the project directory and rename to `google_credentials.json`
4) Inside the repo folder root execute: `node ./node_modules/gmail-tester/init.js ./google_credentials.json ./google_token.json <YOUR_EMAIL@EXAMPLE.COM>`. It will then ask for a code:
![Alt text](./readme-imgs/1.png?raw=true "Optional Title")
follow the suggested link, get the code and paste it to the terminal. Then await for a `./google_token.json` to get appeared in the repo root directory and execute `Ctrl+C` to terminate further execution of the script cause it is now not necessary
5) Inside the repo folder root execute: `cp ./config.example.json ./config.json`
6) In `./config.json` replace the value of `cypress.emailTesting.mailboxTo` with your email address which you have specified in step №4

## How to run tests in headless mode
`npm run cypress-run`

## How to run tests in GUI mode
`npm run cypress-open`

## Notes
- So far the test from `emailChecking.spec.js` will fail because it expects that the skycrops will send email letter after submitting the preorder form, but it doesn't send the letter
- Page scrolling seems like working out
- `toolsMenu.spec.js` is under work