module.exports = {

    getPreorderForm: () => {
        cy
            .visit('https://www.skycrops.co')
            .get('#gatsby-focus-wrapper > div > div > div > div > button').eq(0)
            .click()
    },
    getFullNameField: (userFullName) => cy.get('[name="fullName"]').type(userFullName),
    getEmailField: (userEmail) => cy.get('[name="email"]').type(userEmail),
    getPhoneNumberField: (userPhoneNumber) => cy.get('[name="phone"]').type(userPhoneNumber),
    getOrchardAreaField: (orchardArea) => cy.get('[name="orchardArea"]').type(orchardArea),
    getStreetField: (userStreet) => cy.get('[name="street"]').type(userStreet),
    getPostCodeField: (userPostCode) => cy.get('[name="postCode"]').type(userPostCode),
    getCityField: (userCity) => cy.get('[name="city"]').type(userCity),
    sendFormButtonClick: () => {
        cy
            .get('body > div:nth-child(12) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div> form > div > button')
            .click()
    },
    submitPreOrderForm(data) {
        const {
            userFullName,
            userEmail,
            userPhoneNumber,
            orchardArea,
            userStreet,
            userPostCode,
            userCity
        } = data

        cy.get('[name="fullName"]').type(userFullName)
        cy.get('[name="email"]').type(userEmail)
        cy.get('[name="phone"]').type(userPhoneNumber)
        cy.get('[name="orchardArea"]').type(orchardArea)
        cy.get('[name="street"]').type(userStreet)
        cy.get('[name="postCode"]').type(userPostCode)
        cy.get('[name="city"]').type(userCity)

        this.sendFormButtonClick()
    }

}