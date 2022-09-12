const credencial = require("../../fixtures/login.json");

describe('Verificar login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verificar tela de login', () => {
    cy.get('#logInPanelHeading').should('have.text', 'LOGIN Panel');
  });
  it('Logar no sistema: credencial válida', () => {

    cy.get('#txtUsername')
      .should('be.visible')
      .type(credencial.login)
      .should('have.value', credencial.login);

    cy.get('#txtPassword')
    .should('be.visible')
    .type(credencial.senha)
    .should('have.value', credencial.senha);

    cy.get('#btnLogin').should('be.visible').click();
    
  });

  it('Logar no sistema: credencial inválida', () => {
    const credencialInvalida = 'credencial inválida'
    cy.get('#txtUsername')
      .should('be.visible')
      .type(credencialInvalida)
      .should('have.value', credencialInvalida);

    cy.get('#txtPassword')
    .should('be.visible')
    .type(credencialInvalida)
    .should('have.value', credencialInvalida);

    cy.get('#btnLogin').should('be.visible').click();
    cy.get('#spanMessage').should('be.visible').should('have.text','Invalid credentials')
    
  });
});
