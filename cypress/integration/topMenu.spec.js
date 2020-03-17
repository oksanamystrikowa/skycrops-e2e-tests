describe('top menu buttons', () => {
    beforeEach(() => {
        cy.visit('https://www.skycrops.co')

    })
    context('when what we do button is selected', () => {
        it('should what we do block be in the viewport', () => {
            cy
                .contains('what we do')
                .click()
                .get('#whatWeDo > div')
                .wait(2000)
                .isInViewportFully()

        })
    })
    context('and when team button is selected', () => {
        it('should team block be in the viewport', () => {
            cy
                .contains('team')
                .click()
                .get('#team > div > div')
                .wait(2000)
                .isInViewportFully()

        })
    })
    context('and when calculator button is selected', () => {
        it('should calculator block be in the viewport', () => {
            cy
                .contains('calculator')
                .click()
                .wait(2000)
                .get('#gatsby-focus-wrapper > div > main > div > div > div > div:nth-child(1) > div')
                .isInViewportFully()

        })
    })

})