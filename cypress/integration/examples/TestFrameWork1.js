
import HomePage from "../pageObject1/HomePage1"
import ProductList from "../pageObject1/ProductLists"

describe('TestFrameWork', function(){
    
    before(function(){
         cy.fixture('example').then(function(data){
            this.data=data
            
         })
    })
    it('TestCase1',function(){

       let homePage =new HomePage()
       const productList =new ProductList()
        cy.visit(Cypress.env("url")+'/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.SelectGender().select(this.data.gender)
        homePage.getTwowayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getRadioButton().should('be.disabled')
        homePage.getShopLink().click()
    
        Cypress.config('defaultCommandTimeout',8000)
        this.data.productName.forEach(function(element) {
            
            cy.SelectProduct(element)
        });
        productList.goToCheckOut().click()
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
})















// command used to view result on cloud dashboard
// npx cypress run --record --key 5269a288-7cbf-4fa1-a115-6f92552a0318 --spec cypress/integration/examples/*.js --headed --browser chrome