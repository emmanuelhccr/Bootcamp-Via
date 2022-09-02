/// <reference types="cypress" />

import users from "../../fixtures/user.json"

describe('US0001 - Funcionalidade: login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.login('emmanuel@bootcampvia.com', 'teste@123')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Emmanuel Ramos')
    });

    it('Deve fazer login com sucesso - usando importação', () => {
        cy.login(users[0].email, users[0].senha)
        cy.title().should('eq', "ConexaoQA")
    });
    
    it('Deve fazer login com sucesso - usando fixtures', () => {
        cy.fixture("user").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
        cy.title().should('eq', "ConexaoQA")
    });
});