/// <reference types = "cypress"/>

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
        cy
            .visit('https://www.skycrops.co')
            .get('#gatsby-focus-wrapper > div > div > div > div > button').eq(1)
            .click()
    })
    context('when filling the pre-order form with valid data and send the', () => {
        it('should show the succesfully sending message', () => {

            cy
                .get('[name="fullName"]')
                .type(userFullName)
            cy
                .get('[name="email"]')
                .type(mailboxTo)
            cy
                .get('[name="phone"]')
                .type('+48123123123')
            cy
                .get('[name="orchardArea"]')
                .type('2')
            cy
                .get('[name="street"]')
                .type('ul.Rynek')
            cy
                .get('[name="postCode"]')
                .type('44-100')
            cy
                .get('[name="city"]')
                .type('Gliwice')
            cy
                .get('body > div:nth-child(12) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div> form > div > button')
                .click()
            cy
                .get('body > div:nth-child(12) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div')
                .should('be.visible')

        })

    })
})