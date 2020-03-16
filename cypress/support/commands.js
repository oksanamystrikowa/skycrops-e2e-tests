// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })




Cypress.Commands.add('isFullyInViewport', { prevSubject: true },(subject) => {
  const screenHeight = Cypress.$(cy.state('window')).height();
  const rect = subject[0].getBoundingClientRect();

  expect(
    rect.top >= 0 && rect.bottom <= screenHeight
  ).to.be.true
  
  return subject;
});

Cypress.Commands.add('isFullyNotInViewport', { prevSubject: true },(subject) => {
  const screenHeight = Cypress.$(cy.state('window')).height();
  const rect = subject[0].getBoundingClientRect();

  expect(
    rect.top >= 0 && rect.bottom <= screenHeight
  ).to.be.false

  return subject;
});
