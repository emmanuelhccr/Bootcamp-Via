/// <reference types="cypress" />
const experienciaPage = require('../../support/Experience/experience-pages');

describe('Funcionalidade: Adicionar Experiência', () => {

    beforeEach(() => {
        cy.fixture("user").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
        cy.visit('adicionar-experiencia')
    });
    
    it('Deve adicionar experiência com sucesso', () => {
        experienciaPage.addExperiencia("QA", "Via", "Remoto","10102021", "30092022", "Via é top")
        cy.get('[data-test="alert"]').should("have.text", "Experiência Adicionada")
    });

    it('Deve adicionar experiência atual com sucesso', () => {
        experienciaPage.addExperienciaAtual("QA", "Via", "Remoto","10102021", "Via é top")
        cy.get('[data-test="alert"]').should("have.text", "Experiência Adicionada")
    });
});