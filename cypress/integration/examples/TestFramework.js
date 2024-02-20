/// <reference types="Cypress" />

import HomePage from "../PageObject/HomePage"
import ProductPage from "../PageObject/ProductPage"

describe('My first Suite', function()
{
    before(function(){
     
        cy.fixture("example").then(function(data){
            this.data=data
        })

      })

    it('my first test', function()
    {
       const homePage= new HomePage()
       const productpage= new ProductPage()

        cy.visit(Cypress.env('url')+ "/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWaydataBinding().should('have.value', this.data.name)
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2')
        homePage.getRadioButton().should('be.disabled')
        homePage.getShopTab().click()
        
        Cypress.config('defaultCommandTimeouta',10000)

        this.data.productName.forEach(function(element){
            
            cy.SelectProducts(element)
        });
        
        productpage.CheckOutButton().click()
        // var Sum=0

        // cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{

        //     const amount=$el.text()
        //     var res= amount.split(" ")
        //     res= res[1].trim()
        //     Sum= Number(Sum)+Number(res)

        // }).then(function(){
        //     cy.log(Sum)
        // })
        // cy.get("h3 strong").then(function(element){

        //     const amount=element.text()
        //     var res= amount.split(" ")
        //    var total= res[1].trim()
        //    expect(Number(total)).to.equal(Number(Sum))
            
        // })

        var sum = 0
        cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {
          const firstValue = $el.text();
          var value = firstValue.split(" ");
          value = value[1].trim();
          sum += parseInt(value)
        });
        cy.get('h3 strong').then(function(element) {
            const realValue = element.text()
            var result = realValue.split(" ")
            var totalValue = parseInt(result[1].trim())
            expect(totalValue).to.equal(sum)
        })




        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get("input[type='submit']").click()
        // cy.get('.alert').should('contain','Success')
        // cy.get('.alert').then(function(element){

        //    const actualText= element.text()
        //    if(actualText.includes('Success')){

        //     actualText.should('have.text')
        //    }
        // })
        cy.get('.alert').then(function(element){

            const actualText= element.text()
            expect(actualText.includes('Success')).to.be.true


        })




    })
})

// npx cypress run --spec cypress/integration/examples/TestFramework.js 
//  --headed --browser chrome --env url="https://rahulshettyacademy.com"




// npx cypress run --record --key 483f338d-0c23-4eb4-a540-530797e0e32a --spec cypress/integration/examples/test6.js --headed --browser chrome



            
