class ExperiencePage {
    get #position() { return cy.get('[data-test="experience-title"]')}
    get #empresa() { return cy.get('[data-test="experience-company"]')}
    get #localizacao() { return cy.get('[data-test="experience-location"]')}
    get #dataInicio() { return cy.get('#from')}
    get #dataFim() { return cy.get('#to')}
    get #descricao() { return cy.get('[data-test="experience-description"]')}
    get #btnAdd() { return cy.get('[data-test="experience-submit"]')}
    get #checkAtual() { return cy.get('[data-indeterminate="false"]')}

    addExperience(position, empresa, local, dataInicio, dataFim, descricao) {
        this.#position.type(position)
        this.#empresa.type(empresa)
        this.#localizacao.type(local)
        this.#dataInicio.type(dataInicio)
        this.#dataFim.type(dataFim)
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }

    addExperienciaAtual(position, empresa, local, dataInicio, descricao) {
        this.#position.type(position)
        this.#empresa.type(empresa)
        this.#localizacao.type(local)
        this.#dataInicio.type(dataInicio)
        this.#checkAtual.check()
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }
}

module.exports = new ExperiencePage()