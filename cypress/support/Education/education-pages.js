class EducationPage {
    get #school() { return cy.get('[data-test="education-school"]')}
    get #degree() { return cy.get('[data-test="education-degree"]')}
    get #fieldOfStudy() { return cy.get('[data-test="education-fieldOfStudy"]')}
    get #dateFrom() { return cy.get('#from')}
    get #dateTo() { return cy.get('#to')}
    get #description() { return cy.get('[data-test="education-description"]')}
    get #btnAdd() { return cy.get('[data-test="education-submit"]')}
    get #actualDateCheck() { return cy.get('[data-indeterminate="false"]')}

    addEducation(school, degree, fieldOfStudy, dateFrom, dateTo, description) {
        this.#school.type(school)
        this.#degree.type(degree)
        this.#fieldOfStudy.type(fieldOfStudy)
        this.#dateFrom.type(dateFrom)
        this.#dateTo.type(dateTo)
        this.#description.type(description)
        this.#btnAdd.click()
    }

    addEducationInProgress(school, degree, fieldOfStudy, dateFrom, description) {
        this.#school.type(school)
        this.#degree.type(degree)
        this.#fieldOfStudy.type(fieldOfStudy)
        this.#dateFrom.type(dateFrom)
        this.#actualDateCheck.check()
        this.#description.type(description)
        this.#btnAdd.click()
    }
}

module.exports = new EducationPage()