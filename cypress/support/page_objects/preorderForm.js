module.exports = {

    getPreorderForm: () => {
        cy
            .visit('https://www.skycrops.co')
            .get('#gatsby-focus-wrapper > div > div > div > div > button').eq(0)
            .click()
    },
    getFullNameField: () => cy.get('[name="fullName"]'),
    getEmailField: () => cy.get('[name="email"]'),
    getPhoneNumberField: () => cy.get('[name="phone"]'),
    getOrchardAreaField: () => cy.get('[name="orchardArea"]'),
    getStreetField: () => cy.get('[name="street"]'),
    getPostCodeField: () => cy.get('[name="postCode"]'),
    getCityField: () => cy.get('[name="city"]'),
    sendFormButtonClick: () => {
        cy
            .get('body > div:nth-child(12) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div> form > div > button')
            .click()
    }

}