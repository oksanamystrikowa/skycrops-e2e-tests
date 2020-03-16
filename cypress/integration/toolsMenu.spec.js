describe.skip('when tools menu is selected', () => {
    beforeEach(() => {
        cy.visit('https://www.skycrops.co')

    })
    it('should be shown tools menu', () => {
        cy
            .contains('tools')
            .click()
            .should('be.visible', '#gatsby-focus-wrapper > div > div > div. > div:nth-child(1) > div')

    })
    context('and when cameras is selected', () => {
        it('should show cameras screen', () => {
            cy
                .contains('tools')
                .trigger('mouseenter')
                .get('#gatsby-focus-wrapper > div > div > div > div:nth-child(1) > div > a:nth-child(1)', {force: true})
                .click()
            cy
                .contains('tools')
                .trigger('mouseleave')

            cy
                .should('be.visible', '#cameras')

        })
    })
})