describe('My first Suite', function()
{

    it('my first test', function()
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // Window:alert
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })















        
    })


    })
