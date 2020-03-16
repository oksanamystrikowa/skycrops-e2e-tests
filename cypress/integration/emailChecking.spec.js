const {
    cypress: {
        emailTesting: {
            mailboxTo,
            mailboxFrom,
            userFullName
        }
    }
} = require('../../config.json')

describe('Email receiving', () => {
    before(() => {
        cy
            .visit('https://www.skycrops.co')
            .get('#gatsby-focus-wrapper > div > div > div > div > button').eq(1)
            .click()

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

    context("when pre-order form was sent", () => {
        it("should service reply with payment details to user email", () => {
            cy
                .task("gmail:check", {
                    from: mailboxFrom,
                    to: mailboxTo,
                    subject: `${userFullName} dziękujemy za Twoje zainteresowanie skycrops`
                })
                .then(email => {
                    assert.isNotNull(email)
                });
        });
    });
})