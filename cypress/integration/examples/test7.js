/// <reference types="Cypress" />

describe('My first Suite', function()
{

    it('my first test', function()
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')

















        
    })


    })
