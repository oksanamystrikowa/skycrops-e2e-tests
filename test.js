const {
    random
} = require('lodash')

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
        fillInput: () => {
            calculatorPageObject.fillCompoundWeightG(this.values.amountOfChemicalCompoundGHa)
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
        }, {})
    },
    // {
    //     title: 'The amount of the element" g/ha'
    // },
    // {
    //     title: 'The amount of the element" kg/ha'
    // }
]

console.log(JSON.stringify(writableInputs, null, '\t'))