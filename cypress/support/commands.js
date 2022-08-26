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

/// <reference types="Cypress" />

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, password) => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add("logout", () => {
    cy.get('[data-test="navbar-logout"]').click()
})

Cypress.Commands.add("register", (name, email, password) => {
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password)
    cy.get('[data-test="register-submit"]').click()
})

Cypress.Commands.add("fillFieldsProfile", (company, webSite, location, skills, github, bio) => {
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(company)
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(webSite)
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(location)
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(skills)
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(github)
        cy.get('[rows="1"]').click()
        cy.get('[rows="1"]').type(bio)                
})

Cypress.Commands.add("selectStatus", (status) => {
    cy.get('[data-test="profile-status"]').click()
    cy.get('.MuiList-root.MuiMenu-list li').then(($li) => {
        const items = $li.toArray()
        var item = "";
        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            if (element.innerText == status) {
                item = element;
            }
        };
        return item;
    }).click()
})

Cypress.Commands.add("selectRandomStatus", () => {
    cy.get('#mui-component-select-status').click()
    cy.get('.MuiMenu-list li')
        .then(($li) => {
        const items = $li.toArray()
        return Cypress._.sample(items)
    }).click()
})

Cypress.Commands.add("Perfil", (empresa, web, localização, conhecimentos, usuárioGithub, biografia, redesocial, linkedin) => {

    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('#mui-component-select-status').click()   
    cy.get('[data-test="status-1"]').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(web)
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(localização)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(conhecimentos)
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(usuárioGithub)
    cy.get('[rows="1"]').type(biografia)
    cy.get('[data-test="profile-socials"]').type(redesocial)
    cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type(linkedin)
    cy.get('[data-test="profile-submit"]').click()
})

Cypress.Commands.add("cadastro", (name, email, password, password2) => {
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password2)
    cy.get('[data-test="register-submit"]').click()
})
