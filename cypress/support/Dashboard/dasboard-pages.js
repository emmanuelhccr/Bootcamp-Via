class DashboardPage {
    get #btnEditProfile() { return cy.get('[data-test="dashboard-editProfile"]')}
    get #btnAddExperience() { return cy.get('[data-test="dashboard-addExperience"]')}
    get #btnAddEducation() { return cy.get('[href="/adicionar-formacao"]')}
    get #btnDeleteExperience() { return cy.get('[data-test="experience-delete"]')}
    get #btnDeleteEducation() { return cy.get('[data-test="education-delete"]')}
    get #btnDeleteProfile() { return cy.get('[data-test="dashboard-deleteProfile"]')}

    validateDashboardButtons() { 
        this.#btnEditProfile.should("be.visible")
        this.#btnAddExperience.should("be.visible");
        this.#btnAddEducation.should("be.visible");
        this.#btnDeleteProfile.should("be.visible");
    }
    removeExperience() {
        this.#btnDeleteExperience.first().click()
    }

    removeEducation() {
        this.#btnDeleteEducation.first().click()
    }

    deleteProfile() {
        this.#btnDeleteProfile.click()
    }
}

module.exports = new DashboardPage()