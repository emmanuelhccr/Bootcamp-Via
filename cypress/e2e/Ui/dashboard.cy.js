/// <reference types="cypress" />

const dashboardPage = require('../../support/Dashboard/dasboard-pages');

describe('Funcionalidade: Dashboard', () => {

    beforeEach(() => {
        cy.fixture("user").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
    });
    
    it('should contain action buttons', () => {
        dashboardPage.validateDashboardButtons()
    });

    it('Should remove experience', () => {
        dashboardPage.removeExperience()
        cy.get('[data-test="alert"]').should('have.text', "Experiência Removida")
    });

    it('should remove education', () => {
        dashboardPage.removeEducation();
        cy.get('[data-test="alert"]').should('have.text', "Formação Acadêmica Removida")
    });
});