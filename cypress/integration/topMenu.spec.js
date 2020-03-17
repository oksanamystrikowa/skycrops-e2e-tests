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
                .get('#gatsby-focus-wrapper > div > main > div')
                .isInViewportFully()

        })
    })
    context('and when translation button is selected', () => {
        it('should content be translated', () => {
            cy
                .get('#gatsby-focus-wrapper > div > div > div > div > div > p')
                .wait(2000)
                .trigger('mouseover')
                .wait(2000)
                .get('#gatsby-focus-wrapper > div > div > div > div > div > button:nth-child(1)')
                .eq(0)
                .click()
                .get('#gatsby-focus-wrapper > div > div > div > div > div > p').eq(0)
                .invoke('text')
                .then(text => expect(text).to.eq('pl'))
                

        })
    })

})