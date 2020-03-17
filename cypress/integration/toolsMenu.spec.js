describe('when tools menu is selected', () => {
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
                .wait(2000)
                .trigger('mouseover')
                .wait(2000)
                .get('#gatsby-focus-wrapper > div > div > div > div:nth-child(1) > div > a:nth-child(1)')
                .click()
            cy
                .contains('tools')
                .trigger('mouseout')

            cy
                .get('#cameras')
                .isInViewportFully()

        })
    })

    context('and when app is selected', () => {
        it('should show app screen', () => {
            cy
                .contains('tools')
                .wait(2000)
                .trigger('mouseover')
                .wait(2000)
                .get('#gatsby-focus-wrapper > div > div > div> div:nth-child(1) > div > a:nth-child(2)')
                .click()
            cy
                .contains('tools')
                .trigger('mouseout')

            cy
                .wait(2000)
                .get('#app')
                .wait(2000)
                .isInViewportFully()

        })
    })
})