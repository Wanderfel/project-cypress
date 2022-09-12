/// <reference types="cypress" />


describe('example to-do app', () => {
    before(() => {
        cy.visit('https://consultoria.natura.com.br')
    })

    it('Login Natura', () => {
        var usuario = 'vera-me@hotmail.com'
        var senha = `Castiel7anos`
        cy.clearCookies()
        
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('#botaoOK').should('be.visible').click()
            //var successo_url = 'https://consultoria.natura.com.br/webfv'
            //cy.url().should('be.equal', successo_url)
    })

    // it('Pontuacao', () => {
    //     cy.visit('https://consultoria.natura.com.br/webfv/my-score')
    //     var nivel = cy.get('h2 span').last().text()
    //     cy.log(nivel)
    // })

})