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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});



Cypress.Commands.add("login", () => {
  const credencial = require('../fixtures/login.json')
  
  cy.get('#logInPanelHeading').should('have.text', 'LOGIN Panel');

  cy.get('#txtUsername')
    .should('be.visible')
    .type(credencial.login)
    .should('have.value', credencial.login);

  cy.get('#txtPassword')
  .should('be.visible')
  .type(credencial.senha)
  .should('have.value', credencial.senha);

  cy.get('#btnLogin').should('be.visible').click();
  cy.get('#menu_dashboard_index').should('have.contain','Dashboard')
})

    
