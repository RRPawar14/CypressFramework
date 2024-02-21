
import {homePage1} from "../../../pageObject1/HomePage1";
import {productLists} from "../../../pageObject1/ProductLists";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


// Given I open Ecommerce Page
Given('I open Ecommerce Page',()=>
{
    cy.visit(Cypress.env("url")+'/angularpractice/')
})
//     When I add items to cart
When('I add items to cart',function()
{
    
    homePage1.getShopLink().click()

        this.data.productName.forEach(function(element) {
            
            cy.SelectProduct(element)
        });
        productLists.goToCheckOut().click()
})
//     And Validate the total price
When('Validate the total price',function()
{   
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{

        const amount=$el.text()
        var res= amount.split(" ")
        res= res[1].trim()
        sum=Number(sum)+Number(res)
        
    }).then(function(){
        cy.log(sum)
    })
    cy.get('h3 > strong').then(function(element){

        const amount=element.text()
        var res= amount.split(" ")
        var total= res[1].trim()
        expect(Number(total)).to.equal(sum)

    })
})

//   Then select the country submit and verify Thankyou
Then('select the country submit and verify Thankyou',()=>
{
    
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('.ng-untouched > .btn').click()
    // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element){

        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})

// When I fill the form details
When('I fill the form details',function()
{
    homePage1.getEditBox().type(this.data.name)
    homePage1.SelectGender().select(this.data.gender)
})
// And validate the forms behaviour
When('validate the forms behaviour',function()
{
    homePage1.getTwowayDataBinding().should('have.value',this.data.name)
    homePage1.getEditBox().should('have.attr','minlength','2')
    homePage1.getRadioButton().should('be.disabled')
    Cypress.config('defaultCommandTimeout',8000)
})
// Then select the Shop Page
Then('select the Shop Page',()=>
{
    homePage1.getShopLink().click()
})