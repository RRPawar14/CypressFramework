class homePage{


    getEditBox(){
       return cy.get(':nth-child(1) > .form-control')
    }
    SelectGender(){
        return cy.get('select')
    }
    getTwowayDataBinding(){
        return cy.get(':nth-child(4) > .ng-pristine')
    }
    getRadioButton(){
       return cy.get('#inlineRadio3')
    }
    getShopLink(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default homePage