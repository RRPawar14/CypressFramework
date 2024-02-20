class productList{

    goToCheckOut(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}

export default productList