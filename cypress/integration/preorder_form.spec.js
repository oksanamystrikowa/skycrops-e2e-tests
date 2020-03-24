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


            preorderFormPageObject.getFullNameField(userFullName)
            preorderFormPageObject.getEmailField(mailboxTo)
            preorderFormPageObject.getPhoneNumberField('48123123123')
            preorderFormPageObject.getOrchardAreaField('2')
            preorderFormPageObject.getStreetField('ul.Rynek')
            preorderFormPageObject.getPostCodeField('44-100')
            preorderFormPageObject.getCityField('Gliwice')
            preorderFormPageObject.sendFormButtonClick()
            cy
                .contains('Thank you!')
                .should('be.visible')

        })

    })
    context('when filling the pre-order form with invalid full name data and send the form', () => {
        it('should show the validation message', () => {

            preorderFormPageObject.getFullNameField('qwe123')
            preorderFormPageObject.getEmailField(mailboxTo)
            preorderFormPageObject.getPhoneNumberField('48123123123')
            preorderFormPageObject.getOrchardAreaField('2')
            preorderFormPageObject.getStreetField('ul.Rynek')
            preorderFormPageObject.getPostCodeField('44-100')
            preorderFormPageObject.getCityField('Gliwice')
            preorderFormPageObject.sendFormButtonClick()
            cy.get('[name="fullName"]').should(($mydatefield) => {
                expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
            })

        })

        context('when filling the pre-order form with invalid email data and send the form', () => {
            it('should show the validation message', () => {

            preorderFormPageObject.getFullNameField(userFullName)
            preorderFormPageObject.getEmailField('qwe123!')
            preorderFormPageObject.getPhoneNumberField('48123123123')
            preorderFormPageObject.getOrchardAreaField('2')
            preorderFormPageObject.getStreetField('ul.Rynek')
            preorderFormPageObject.getPostCodeField('44-100')
            preorderFormPageObject.getCityField('Gliwice')
            preorderFormPageObject.sendFormButtonClick()
            cy.get('[name="email"]').should(($mydatefield) => {
                expect($mydatefield.get(0).validationMessage).to.equal('Please include an \'@\' in the email address. \'qwe123!\' is missing an \'@\'.')
                })


            })


        })
        context('when filling the pre-order form with invalid phone number data and send the form', () => {
            it('should show the validation message', () => {

                preorderFormPageObject.getFullNameField(userFullName)
                preorderFormPageObject.getEmailField(mailboxTo)
                preorderFormPageObject.getPhoneNumberField('abc-asd!')
                preorderFormPageObject.getOrchardAreaField('2')
                preorderFormPageObject.getStreetField('ul.Rynek')
                preorderFormPageObject.getPostCodeField('44-100')
                preorderFormPageObject.getCityField('Gliwice')
                preorderFormPageObject.sendFormButtonClick()
                cy.get('[name="phone"]').should(($mydatefield) => {
                    expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
                })


            })


        })
        context('when filling the pre-order form with invalid street data and send the form', () => {
            it('should show the validation message', () => {

                preorderFormPageObject.getFullNameField(userFullName)
                preorderFormPageObject.getEmailField(mailboxTo)
                preorderFormPageObject.getPhoneNumberField('48123123123')
                preorderFormPageObject.getOrchardAreaField('2')
                preorderFormPageObject.getStreetField('1234!#@')
                preorderFormPageObject.getPostCodeField('44-100')
                preorderFormPageObject.getCityField('Gliwice')
                preorderFormPageObject.sendFormButtonClick()
                cy.get('[name="street"]').should(($mydatefield) => {
                    expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
                })


            })
        })
        context('when filling the pre-order form with invalid post code data and send the form', () => {
            it('should show the validation message', () => {

                preorderFormPageObject.getFullNameField(userFullName)
                preorderFormPageObject.getEmailField(mailboxTo)
                preorderFormPageObject.getPhoneNumberField('48123123123')
                preorderFormPageObject.getOrchardAreaField('2')
                preorderFormPageObject.getStreetField('ul.Rynek')
                preorderFormPageObject.getPostCodeField('ad-!@#')
                preorderFormPageObject.getCityField('Gliwice')
                preorderFormPageObject.sendFormButtonClick()
                cy.get('[name="postCode"]').should(($mydatefield) => {
                    expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
                })


            })
        })
        context('when filling the pre-order form with invalid city data and send the form', () => {
            it('should show the validation message', () => {

                preorderFormPageObject.getFullNameField(userFullName)
                preorderFormPageObject.getEmailField(mailboxTo)
                preorderFormPageObject.getPhoneNumberField('48123123123')
                preorderFormPageObject.getOrchardAreaField('2')
                preorderFormPageObject.getStreetField('ul.Rynek')
                preorderFormPageObject.getPostCodeField('44-100')
                preorderFormPageObject.getCityField('123!@#')
                preorderFormPageObject.sendFormButtonClick()
                cy.get('[name="city"]').should(($mydatefield) => {
                    expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
                })


            })
        })
    })
})