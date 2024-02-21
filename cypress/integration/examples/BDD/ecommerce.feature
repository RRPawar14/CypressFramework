Feature: End to end Ecommerce validation

    apllication Regression

    Scenario: Ecommerce product delivery
    Given I open Ecommerce Page
    When I add items to cart
    And Validate the total price
    Then select the country submit and verify Thankyou

    Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
    And validate the forms behaviour
    Then select the Shop Page
    