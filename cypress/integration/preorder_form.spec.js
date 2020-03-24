const {
    random
} = require('lodash')
const preorderFormPageObject = require('../support/page_objects/preorderForm.js')

const {
    cypress: {
        emailTesting: {
            mailboxTo,
            userFullName
        }
    }
} = require('../../config.json')

describe('sending a preorder form', () => {
    beforeEach(() => {
        preorderFormPageObject.getPreorderForm()
    })
    context('when filling the pre-order form with valid data and send the form', () => {
        it('should show the succesfully sending message', () => {


            preorderFormPageObject.getFullNameField().type(userFullName)
            preorderFormPageObject.getEmailField().type(mailboxTo)
            preorderFormPageObject.getPhoneNumberField().type('48123123123')
            preorderFormPageObject.getOrchardAreaField().type('2')
            preorderFormPageObject.getStreetField().type('ul.Rynek')
            preorderFormPageObject.getPostCodeField().type('44-100')
            preorderFormPageObject.getCityField().type('Gliwice')
            preorderFormPageObject.sendFormButtonClick()
            cy
                .contains('Thank you!')
                .should('be.visible')

        })

    })
    context('when filling the pre-order form with invalid full name data and send the form', () => {
        it('should show the validation message', () => {

            preorderFormPageObject.getFullNameField().type('qwe123')
            preorderFormPageObject.getEmailField().type(mailboxTo)
            preorderFormPageObject.getPhoneNumberField().type('48123123123')
            preorderFormPageObject.getOrchardAreaField().type('2')
            preorderFormPageObject.getStreetField().type('ul.Rynek')
            preorderFormPageObject.getPostCodeField().type('44-100')
            preorderFormPageObject.getCityField().type('Gliwice')
            preorderFormPageObject.sendFormButtonClick()
            preorderFormPageObject.getFullNameField().should(($mydatefield) => {
                expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
            })

        })

        context('when filling the pre-order form with invalid email data and send the form', () => {
            it('should show the validation message', () => {

                preorderFormPageObject.getFullNameField().type(userFullName)
                preorderFormPageObject.getEmailField().type('qwe123!')
                preorderFormPageObject.getPhoneNumberField().type('48123123123')
                preorderFormPageObject.getOrchardAreaField().type('2')
                preorderFormPageObject.getStreetField().type('ul.Rynek')
                preorderFormPageObject.getPostCodeField().type('44-100')
                preorderFormPageObject.getCityField().type('Gliwice')
                preorderFormPageObject.sendFormButtonClick()
                preorderFormPageObject.getEmailField().should(($mydatefield) => {
                    expect($mydatefield.get(0).validationMessage).to.equal('Please include an \'@\' in the email address. \'qwe123!\' is missing an \'@\'.')
                })


            })


        })
        context('when filling the pre-order form with invalid phone number data and send the form', () => {
            it('should show the validation message', () => {

                preorderFormPageObject.getFullNameField().type(userFullName)
                preorderFormPageObject.getEmailField().type(mailboxTo)
                preorderFormPageObject.getPhoneNumberField().type('abc-asd!')
                preorderFormPageObject.getOrchardAreaField().type('2')
                preorderFormPageObject.getStreetField().type('ul.Rynek')
                preorderFormPageObject.getPostCodeField().type('44-100')
                preorderFormPageObject.getCityField().type('Gliwice')
                preorderFormPageObject.sendFormButtonClick()
                preorderFormPageObject.getPhoneNumberField().should(($mydatefield) => {
                    expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
                })


            })


        })
        context('when filling the pre-order form with invalid street data and send the form', () => {
            it('should show the validation message', () => {

                preorderFormPageObject.getFullNameField().type(userFullName)
                preorderFormPageObject.getEmailField().type(mailboxTo)
                preorderFormPageObject.getPhoneNumberField().type('48123123123')
                preorderFormPageObject.getOrchardAreaField().type('2')
                preorderFormPageObject.getStreetField().type('1234!#@')
                preorderFormPageObject.getPostCodeField().type('44-100')
                preorderFormPageObject.getCityField().type('Gliwice')
                preorderFormPageObject.sendFormButtonClick()
                preorderFormPageObject.getStreetField().should(($mydatefield) => {
                    expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
                })


            })
        })
        context('when filling the pre-order form with invalid post code data and send the form', () => {
            it.only('should show the validation message', () => {

                preorderFormPageObject.getFullNameField().type(userFullName)
                preorderFormPageObject.getEmailField().type(mailboxTo)
                preorderFormPageObject.getPhoneNumberField().type('48123123123')
                preorderFormPageObject.getOrchardAreaField().type('2')
                preorderFormPageObject.getStreetField().type('ul.Rynek')
                preorderFormPageObject.getPostCodeField().type('ad-!@#')
                preorderFormPageObject.getCityField().type('Gliwice')
                preorderFormPageObject.sendFormButtonClick()
                preorderFormPageObject.getPostCodeField().should(($mydatefield) => {
                    expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
                })


            })
        })
        context('when filling the pre-order form with invalid city data and send the form', () => {
            it.only('should show the validation message', () => {

                preorderFormPageObject.getFullNameField().type(userFullName)
                preorderFormPageObject.getEmailField().type(mailboxTo)
                preorderFormPageObject.getPhoneNumberField().type('48123123123')
                preorderFormPageObject.getOrchardAreaField().type('2')
                preorderFormPageObject.getStreetField().type('ul.Rynek')
                preorderFormPageObject.getPostCodeField().type('44-100')
                preorderFormPageObject.getCityField().type('123!@#')
                preorderFormPageObject.sendFormButtonClick()
                preorderFormPageObject.getCityField().should(($mydatefield) => {
                    expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
                })


            })
        })
    })
})