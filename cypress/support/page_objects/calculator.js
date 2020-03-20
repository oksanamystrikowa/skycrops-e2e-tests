module.exports = {
    fillCompoundWeightG: (amountOfChemicalCompoundGHa) => {
        cy.get('input[name="compoundWeightG"]').clear().type(amountOfChemicalCompoundGHa)
    },

    getInputOfAmountChemicalCompoundKgHa: () => cy.get('input[name="compoundWeightKg"]'),

    getInputOfAmountOfElementGHa: () => cy.get('input[name="weight"]'),

    getInputOfAmountOfElementKgHa: () => cy.get('input[name="weightKg"]'),

    getInputOfAmountOfElementMlHa: () => cy.get('#gatsby-focus-wrapper > div > main > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > input'),

    getInputOfAmountOfElementLHa: () => cy.get('#gatsby-focus-wrapper > div > main > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > input'),

    selectChemicalElement: name => {
        cy.get('.ant-select').click()
        cy.get('.ant-select-dropdown-menu').contains(name).click()
    }
}