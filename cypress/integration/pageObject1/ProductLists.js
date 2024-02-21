class productLists{

    goToCheckOut(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}

export default productLists;