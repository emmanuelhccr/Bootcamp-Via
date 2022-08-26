/// <reference types="cypress"/>
const faker = require('faker-br')

describe('US0002 - Funcionalidade: Cadastro', () => {

    let name = faker.name.findName();
    let email = faker.internet.email(name);
    let password = faker.internet.password();

    beforeEach(() => {
        cy.visit('cadastrar')
    });

    it('Deve fazer cadastro com sucesso', () => {
        cy.register(name, email, password)

        //Expect result
        cy.get('.large').should('contain', 'Dashboard')
        cy.get('[data-test="dashboard-createProfile"]').should('exist')
    })
})