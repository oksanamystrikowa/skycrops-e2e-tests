/// <reference types = "cypress"/>
describe('Scrolling', () => {
    describe('when page is loaded', () => {
        before(() => {
            cy.visit('https://www.skycrops.co')
        })

        it('SHOULD NOT footer be on viewport', () => {
            cy.contains('All rights reserved').isFullyNotInViewport()
        })

        it('SHOULD header be on viewport', () => {
            cy.get('#gatsby-focus-wrapper > div > main > div > div > h1').isFullyInViewport()
        })

        describe('and when scrolled to the bottom', () => {
            before(() => {
                cy.scrollTo('bottom', {
                    duration: 3000
                })
            })

            it('SHOULD footer be on viewport', () => {
                cy.contains('All rights reserved').isFullyInViewport()
            })

            it('SHOULD NOT header be on viewport', () => {
                cy.get('#gatsby-focus-wrapper > div > main > div > div > h1').isFullyNotInViewport()
            })
        })
    })
})