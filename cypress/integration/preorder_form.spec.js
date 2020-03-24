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

            preorderFormPageObject.submitPreOrderForm({
                userFullName: userFullName,
                userEmail: mailboxTo,
                userPhoneNumber: '48123123123',
                orchardArea: '2',
                userStreet: 'ul.Rynek',
                userPostCode: '44-100',
                userCity: 'Gliwice'
            })

            cy
                .contains('Thank you!')
                .should('be.visible')

        })

    })
    context('when filling the pre-order form with invalid full name data and send the form', () => {
        it('should show the validation message', () => {

            preorderFormPageObject.submitPreOrderForm({
                userFullName: 'qwe123',
                userEmail: mailboxTo,
                userPhoneNumber: '48123123123',
                orchardArea: '2',
                userStreet: 'ul.Rynek',
                userPostCode: '44-100',
                userCity: 'Gliwice'
            })

            cy.get('[name="fullName"]').should(($mydatefield) => {
                expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')


            })
        })
    })

    context('when filling the pre-order form with invalid email data and send the form', () => {
        it('should show the validation message', () => {


            preorderFormPageObject.submitPreOrderForm({
                userFullName: userFullName,
                userEmail: 'qwe123!',
                userPhoneNumber: '48123123123',
                orchardArea: '2',
                userStreet: 'ul.Rynek',
                userPostCode: '44-100',
                userCity: 'Gliwice'
            })

            cy.get('[name="email"]').should(($mydatefield) => {
                expect($mydatefield.get(0).validationMessage).to.equal('Please include an \'@\' in the email address. \'qwe123!\' is missing an \'@\'.')
            })


        })


    })
    context('when filling the pre-order form with invalid phone number data and send the form', () => {
        it('should show the validation message', () => {

            preorderFormPageObject.submitPreOrderForm({
                userFullName: userFullName,
                userEmail: mailboxTo,
                userPhoneNumber: 'abc-asd!',
                orchardArea: '2',
                userStreet: 'ul.Rynek',
                userPostCode: '44-100',
                userCity: 'Gliwice'
            })

            cy.get('[name="phone"]').should(($mydatefield) => {
                expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
            })


        })


    })
    context('when filling the pre-order form with invalid street data and send the form', () => {
        it('should show the validation message', () => {

            preorderFormPageObject.submitPreOrderForm({
                userFullName: userFullName,
                userEmail: mailboxTo,
                userPhoneNumber: '48123123123',
                orchardArea: '2',
                userStreet: '1234!#@',
                userPostCode: '44-100',
                userCity: 'Gliwice'
            })

            cy.get('[name="street"]').should(($mydatefield) => {
                expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
            })


        })
    })
    context('when filling the pre-order form with invalid post code data and send the form', () => {
        it.only('should show the validation message', () => {

            preorderFormPageObject.submitPreOrderForm({
                userFullName: userFullName,
                userEmail: mailboxTo,
                userPhoneNumber: '48123123123',
                orchardArea: '2',
                userStreet: 'ul.Rynek',
                userPostCode: 'ad-!@#',
                userCity: 'Gliwice'
            })

            cy.get('[name="postCode"]').should(($mydatefield) => {
                expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
            })


        })
    })
    context('when filling the pre-order form with invalid city data and send the form', () => {
        it('should show the validation message', () => {

            preorderFormPageObject.submitPreOrderForm({
                userFullName: userFullName,
                userEmail: mailboxTo,
                userPhoneNumber: '48123123123',
                orchardArea: '2',
                userStreet: 'ul.Rynek',
                userPostCode: '44-100',
                userCity: '123!@#'
            })

            cy.get('[name="city"]').should(($mydatefield) => {
                expect($mydatefield.get(0).validationMessage).to.equal('Please match the format requested.')
            })


        })
    })
})