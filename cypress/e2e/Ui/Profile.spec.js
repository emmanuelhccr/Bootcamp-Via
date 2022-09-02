/// <reference types="cypress"/>

import { pt_BR } from 'faker-br/lib/locales';

const faker = require('faker-br')

describe('US0003 - Funcionalidade: Perfil', () => {

    let company = faker.company.companyName();
    let webSite = faker.internet.url();
    let location = faker.random.locale(pt_BR);
    let skills = faker.random.words(5, ', ');
    let github = faker.random.word();   
    let bio = faker.random.words(5);

    beforeEach(() => {
        cy.login('emmanuel@bootcampvia.com', 'teste@123')
        cy.visit('criar-perfil')
    });

    it('Deve criar perfil com sucesso', () => {
        cy.selectStatus("Especialista em QA")
        cy.fillFieldsProfile(company, webSite, location, skills, github, bio)
        cy.get('[data-test="profile-socials"]').click()
        cy.get('[data-test="profile-linkedin"]').type('https://wwww.linkedin.com/in/emmanuelhcc')
        cy.get('[data-test="profile-submit"]').click()
        //Expect result
        cy.get('.large').should('contain', 'Dashboard')
        cy.get('[data-test="dashboard-editProfile"]').should('exist')
        cy.get('[data-test="dashboard-addExperience"]').should('exist')
        cy.get('[href="/adicionar-formacao"]').should('exist')
        cy.get('[data-test="dashboard-deleteProfile"]').should('exist')
    })

    it('Deve apresentar mensagem de campos obrigatórios em Conhecimentos', () => {
        cy.selectStatus("Especialista em QA")
        cy.fillFieldsProfile(company, webSite, location, " ", github, bio)
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get('[data-test="profile-submit"]').click()
        
        //Expect result
        cy.get('.MuiFormHelperText-root').should('have.text',"Conhecimentos é obrigatório")
    });

    it('Deve apresentar mensagem de campos obrigatórios em Status', () => {
        cy.fillFieldsProfile(company, webSite, location, skills, github, bio)
        cy.get('[data-test="profile-submit"]').click()
        
        //Expect result
        cy.get('#status').should('have.class',"Mui-error Mui-required")
    });
    
    it('Deve editar perfil com sucesso', () => {
        cy.visit('editar-perfil')
        cy.selectRandomStatus()
        cy.fillFieldsProfile(company, webSite, location, skills, github, bio)
        cy.get('[data-test="profile-submit"]').click()
        cy.get('[data-test="alert"]').should("have.text", "Perfil Atualizado")
    })
})