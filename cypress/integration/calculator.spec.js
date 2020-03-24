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

    const writableInputs = [
        {
            title: '"The amount of chemical compound" g/ha',
            values: Object.keys(elements).reduce((obj, elementName) => {
                const amountOfChemicalCompoundGHa = random(1, 50000)
                const amountOfChemicalCompoundKgHa = (amountOfChemicalCompoundGHa / 1000).toFixed(2)
                const amountOfElementGHa = (elements[elementName].percentage * amountOfChemicalCompoundGHa / 100).toFixed(2)
                const amountOfElementKgHa = (amountOfElementGHa / 1000).toFixed(2)
                const amountOfElementMlHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass).toFixed(2)
                const amountOfElementLHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass / 1000).toFixed(2)

                return {
                    ...obj,
                    [elementName]: {
                        amountOfChemicalCompoundGHa,
                        amountOfChemicalCompoundKgHa,
                        amountOfElementGHa,
                        amountOfElementKgHa,
                        amountOfElementMlHa,
                        amountOfElementLHa
                    }
                }
            }, {}),
            fillInput(elementName) {
                calculatorPageObject.fillCompoundWeightG(this.values[elementName].amountOfChemicalCompoundGHa)
            }
        },
        {
            title: '"The amount of chemical compound" kg/ha',
            values: Object.keys(elements).reduce((obj, elementName) => {
                const amountOfChemicalCompoundKgHa = random(1, 50000)
                const amountOfChemicalCompoundGHa = (amountOfChemicalCompoundKgHa * 1000).toFixed(2)
                const amountOfElementGHa = (elements[elementName].percentage * amountOfChemicalCompoundGHa / 100).toFixed(2)
                const amountOfElementKgHa = (amountOfElementGHa / 1000).toFixed(2)
                const amountOfElementMlHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass).toFixed(2)
                const amountOfElementLHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass / 1000).toFixed(2)

                return {
                    ...obj,
                    [elementName]: {
                        amountOfChemicalCompoundGHa,
                        amountOfChemicalCompoundKgHa,
                        amountOfElementGHa,
                        amountOfElementKgHa,
                        amountOfElementMlHa,
                        amountOfElementLHa
                    }
                }
            }, {}),
            fillInput(elementName) {
                calculatorPageObject.fillCompoundWeightKg(this.values[elementName].amountOfChemicalCompoundKgHa)
            }
        },
        {
            title: '"The amount of the element" g/ha',
            values: Object.keys(elements).reduce((obj, elementName) => {
                const amountOfElementGHa = random(1, 50000)
                const amountOfChemicalCompoundGHa = (amountOfElementGHa * 100 / elements[elementName].percentage).toFixed(2)
                const amountOfChemicalCompoundKgHa = (amountOfChemicalCompoundGHa / 1000).toFixed(2)
                const amountOfElementKgHa = (amountOfElementGHa / 1000).toFixed(2)
                const amountOfElementMlHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass).toFixed(2)
                const amountOfElementLHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass / 1000).toFixed(2)

                return {
                    ...obj,
                    [elementName]: {
                        amountOfChemicalCompoundGHa,
                        amountOfChemicalCompoundKgHa,
                        amountOfElementGHa,
                        amountOfElementKgHa,
                        amountOfElementMlHa,
                        amountOfElementLHa
                    }
                }
            }, {}),
            fillInput(elementName) {
                calculatorPageObject.fillElementWeightG(this.values[elementName].amountOfElementGHa)
            }
        },
        {
            title: '"The amount of the element" kg/ha',
            values: Object.keys(elements).reduce((obj, elementName) => {
                const amountOfElementKgHa = random(1, 1000)
                const amountOfChemicalCompoundKgHa = (amountOfElementKgHa * 100 / elements[elementName].percentage).toFixed(2)
                const amountOfChemicalCompoundGHa = (amountOfChemicalCompoundKgHa * 1000).toFixed(2)
                const amountOfElementGHa = (amountOfElementKgHa * 1000).toFixed(2)
                const amountOfElementMlHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass).toFixed(2)
                const amountOfElementLHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass / 1000).toFixed(2)

                return {
                    ...obj,
                    [elementName]: {
                        amountOfChemicalCompoundGHa,
                        amountOfChemicalCompoundKgHa,
                        amountOfElementGHa,
                        amountOfElementKgHa,
                        amountOfElementMlHa,
                        amountOfElementLHa
                    }
                }
            }, {}),
            fillInput(elementName) {
                calculatorPageObject.fillElementWeightKg(this.values[elementName].amountOfElementKgHa)
            }
        }
        // {
        //     title: 'The amount of the element" g/ha'
        // },
        // {
        //     title: 'The amount of the element" kg/ha'
        // }
    ]

    before(() => {
        cy
            .visit('https://www.skycrops.co')
            .contains('calculator')
            .click()
    })

    for (const elementName in elements) {
        context(`when user chosen element: "${elementName}"`, () => {
            for (const writableInput of writableInputs) {
                const {
                    amountOfChemicalCompoundGHa,
                    amountOfChemicalCompoundKgHa,
                    amountOfElementGHa,
                    amountOfElementKgHa,
                    amountOfElementMlHa,
                    amountOfElementLHa
                } = writableInput.values[elementName]
                // const amountOfChemicalCompoundGHa = random(1, 50000)
                // const amountOfChemicalCompoundKgHa = (amountOfChemicalCompoundGHa / 1000).toFixed(2)
                // const amountOfElementGHa = (elements[elementName].percentage * amountOfChemicalCompoundGHa / 100).toFixed(2)
                // const amountOfElementKgHa = (amountOfElementGHa / 1000).toFixed(2)
                // const amountOfElementMlHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass).toFixed(2)
                // const amountOfElementLHa = (amountOfElementGHa * 22.4 / elements[elementName].molarMass / 1000).toFixed(2)
                context(`when user enters value for ${writableInput.title}`, () => {
                    before(() => {
                        calculatorPageObject.selectChemicalElement(elements[elementName].name)
                        // calculatorPageObject.fillCompoundWeightG(amountOfChemicalCompoundGHa)
                        writableInput.fillInput(elementName)
                    })
    
                    it('should properly display "The amount of chemical compound" g/ha', () => {
                        calculatorPageObject
                            .getInputOfAmountChemicalCompoundGHa()
                            .should('have.value', amountOfChemicalCompoundGHa.toString())
                    })
    
                    it('should properly display "The amount of chemical compound" kg/ha', () => {
                        calculatorPageObject
                            .getInputOfAmountChemicalCompoundKgHa()
                            .should('have.value', amountOfChemicalCompoundKgHa.toString())
                    })
    
                    it('should properly display "The amount of the element" g/ha', () => {
                        calculatorPageObject
                            .getInputOfAmountOfElementGHa()
                            .should('have.value', amountOfElementGHa.toString())
                    })
    
                    it('should properly display "The amount of the element" kg/ha', () => {
                        calculatorPageObject
                            .getInputOfAmountOfElementKgHa()
                            .should('have.value', amountOfElementKgHa.toString())
                    })
    
                    it('should properly display "The amount of the element" ml/ha', () => {
                        calculatorPageObject
                            .getInputOfAmountOfElementMlHa()
                            .should('have.value', amountOfElementMlHa.toString())
                    })
    
                    it('should properly display "The amount of the element" l/ha', () => {
                        calculatorPageObject
                            .getInputOfAmountOfElementLHa()
                            .should('have.value', amountOfElementLHa.toString())
                    })
                })
            }

        })
    }
})