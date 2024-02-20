/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('My first Suite', function()
{

    it('my first test', function()
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(6000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

















        
    })


    })
