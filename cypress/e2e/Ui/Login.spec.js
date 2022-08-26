/// <reference types="cypress" />

describe('US0001 - Funcionalidade login', () => {
    
    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve fazer login com sucesso', () => {
        cy.login('emmanuel@bootcampvia.com', 'teste@123')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Emmanuel Ramos')
    });
    
});