/// <reference types="cypress" />
const educationPage = require('../../support/Education/education-pages');

describe('Funcionalidade: Adicionar Experiência', () => {

    beforeEach(() => {
        cy.fixture("user").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
        cy.visit('adicionar-formacao')
    });
    
    it('Deve adicionar experiência com sucesso', () => {
        educationPage.addEducation("QA", "Via", "Remoto","10102021", "30092022", "Via é top")
        cy.get('[data-test="alert"]').should("have.text", "Formação Acadêmica Adicionada")
    });

    it('Deve adicionar experiência atual com sucesso', () => {
        educationPage.addEducationInProgress("QA", "Via", "Remoto","10102021", "Via é top")
        cy.get('[data-test="alert"]').should("have.text", "Formação Acadêmica Adicionada")
    });
});