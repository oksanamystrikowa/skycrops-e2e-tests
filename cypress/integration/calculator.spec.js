const {
    random
} = require('lodash')

const calculatorPageObject = require('../support/page_objects/calculator.js')

describe('calculator', () => {
    // const percentage = {
    //     calcium: 71.4691,
    //     phosphorus: 43.642
    // }
    // const molarMas = {
    //     calcium: 40.078,
    //     phosphorus: 30.973762
    // }

    const elements = {
        phosphorus: {
            percentage: 43.6421,
            molarMass: 30.973762,
            name: 'Phosphorus'
        },
        nitrogen: {
            percentage: 46.646,
            molarMass: 14.0067,
            name: 'Nitrogen'
        },
        potassium: {
            percentage: 80.0148,
            molarMass: 39.0983,
            name: 'Potassium'
        },
        magnesium: {
            percentage: 60.3036,
            molarMass: 24.305,
            name: 'Magnesium'
        },
        calcium: {
            percentage: 71.4691,
            molarMass: 40.078,
            name: 'Calcium'
        }
        
    }

    before(() => {
        cy
            .visit('https://www.skycrops.co')
            .contains('calculator')
            .click()
    })
    // const elementName = 'calcium'

    for (const elementName in elements) {
        context(`when user chosen element: "${elementName}"`, () => {
            context('when user enters value for "The amount of chemical compound" g/ha', () => {
                const amountOfChemicalCompoundGHa = random(1, 50000)
                const amountOfChemicalCompoundKgHa = (amountOfChemicalCompoundGHa / 1000)
                console.log('amountOfChemicalCompoundGHa', amountOfChemicalCompoundGHa)
                console.log('elements[elementName].percentage', elements[elementName].percentage)
                const amountOfElementGHa = (elements[elementName].percentage * amountOfChemicalCompoundGHa / 100)
                const amountOfElementKgHa = (amountOfElementGHa / 1000)
                const amountOfElementMlHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass)
                const amountOfElementLHa = (amountOfElementKgHa * 22.4 / elements[elementName].molarMass)
        
                before(() => {
                    // cy.get('.ant-select').click()
                    // cy.get('.ant-select-dropdown-menu').contains(elements[elementName].name).click()
                    calculatorPageObject.selectChemicalElement(elements[elementName].name)
                    // cy.get('input[name="compoundWeightG"]').clear().type(amountOfChemicalCompoundGHa)
                    calculatorPageObject.fillCompoundWeightG(amountOfChemicalCompoundGHa.toFixed(2))
                })
        
                it('should properly convert to "The amount of chemical compound" kg/ha', () => {
        
                    // cy
                    //     .wait(3000)
                    //     .get('input[name="compoundWeightKg"]')
                    //     .should('have.value', amountOfChemicalCompoundKgHa)
        
                    calculatorPageObject
                        .getInputOfAmountChemicalCompoundKgHa()
                        .should('have.value', amountOfChemicalCompoundKgHa.toFixed(2))
                })
        
                it('should properly convert to "The amount of the element" g/ha', () => {
                    // cy
                    //     .get('input[name="weight"]')
                    //     .should('have.value', amountOfElementGHa)
        
                    calculatorPageObject
                        .getInputOfAmountOfElementGHa()
                        .should('have.value', amountOfElementGHa.toFixed(2))
                })
        
                it('should properly convert to "The amount of the element" kg/ha', () => {
                    // cy
                    //     .get('input[name="weightKg"]')
                    //     .should('have.value', amountOfElementKgHa)
        
                    calculatorPageObject
                        .getInputOfAmountOfElementKgHa()
                        .should('have.value', amountOfElementKgHa.toFixed(2))
                })
        
                it('should properly convert to "The amount of the element" ml/ha', () => {
                    // cy
                    //     .get('#gatsby-focus-wrapper > div > main > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > input')
                    //     .should('have.value', amountOfElementMlHa)
        
                    calculatorPageObject
                        .getInputOfAmountOfElementMlHa()
                        .should('have.value', amountOfElementMlHa.toFixed(2))
                })
                it('should properly convert to "The amount of the element" l/ha', () => {
                    // cy
                    //     .get('#gatsby-focus-wrapper > div > main > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > input')
                    //     .should('have.value', amountOfElementLHa)
        
                    calculatorPageObject
                        .getInputOfAmountOfElementLHa()
                        .should('have.value', amountOfElementLHa.toFixed(2))
                })
            })
        })
    }

})