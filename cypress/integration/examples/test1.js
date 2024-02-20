describe('My first Suite', function()
{

    it('my first test', function()
    {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productLocater')
        cy.get('@productLocater').find('.product').should('have.length',4)
        cy.get('@productLocater').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('RP')
        }
        )

        

        cy.get('@productLocater').find('.product').each(($e1, index, $list) => {

            const textVeg= $e1.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $e1.find('button').click()
            }

        })




        cy.get('.brand').then(function(LogElement)
        {
            cy.log(LogElement.text())
        }
        )
        // cy.log(logo.text())
        cy.get('.brand').should('have.text','GREENKART')



    })


    })
