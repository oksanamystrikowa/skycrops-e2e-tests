const {
    random
} = require('lodash')

const calculatorPageObject = require('../support/page_objects/calculator.js')

describe('calculator', () => {

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

    for (const elementName in elements) {
        context(`when user chosen element: "${elementName}"`, () => {
            context('when user enters value for "The amount of chemical compound" g/ha', () => {
                const amountOfChemicalCompoundGHa = random(1, 50000)
                const amountOfChemicalCompoundKgHa = (amountOfChemicalCompoundGHa / 1000)
                const amountOfElementGHa = (elements[elementName].percentage * amountOfChemicalCompoundGHa / 100)
                const amountOfElementKgHa = (amountOfElementGHa / 1000)
                const amountOfElementMlHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass)
                const amountOfElementLHa = (amountOfElementKgHa * 22.4 / elements[elementName].molarMass)

                before(() => {
                    calculatorPageObject.selectChemicalElement(elements[elementName].name)
                    calculatorPageObject.fillCompoundWeightG(amountOfChemicalCompoundGHa.toFixed(2))
                })

                it('should properly convert to "The amount of chemical compound" kg/ha', () => {
                    calculatorPageObject
                        .getInputOfAmountChemicalCompoundKgHa()
                        .should('have.value', amountOfChemicalCompoundKgHa.toFixed(2))
                })

                it('should properly convert to "The amount of the element" g/ha', () => {
                    calculatorPageObject
                        .getInputOfAmountOfElementGHa()
                        .should('have.value', amountOfElementGHa.toFixed(2))
                })

                it('should properly convert to "The amount of the element" kg/ha', () => {
                    calculatorPageObject
                        .getInputOfAmountOfElementKgHa()
                        .should('have.value', amountOfElementKgHa.toFixed(2))
                })

                it('should properly convert to "The amount of the element" ml/ha', () => {
                    calculatorPageObject
                        .getInputOfAmountOfElementMlHa()
                        .should('have.value', amountOfElementMlHa.toFixed(2))
                })
                it('should properly convert to "The amount of the element" l/ha', () => {
                    calculatorPageObject
                        .getInputOfAmountOfElementLHa()
                        .should('have.value', amountOfElementLHa.toFixed(2))
                })
            })
        })
    }

})