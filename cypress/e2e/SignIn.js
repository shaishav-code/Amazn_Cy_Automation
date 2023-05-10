/// <reference types="Cypress" />
import HomePage from "../PageObject/HomePage"
import SignUpAndInPage from "../PageObject/SignUpAndInPage"
beforeEach(function(){
  cy.fixture('example').then(function(data)
  {
      this.data=data 
  })
})

  it('Test case 1: Signup Test Case Negative', function()  
  {
   
    cy.visit(this.data.url)

    cy.get('#nav-link-accountList-nav-line-1').click()
    
    cy.get('.a-button-inner > #continue').click().then(function()
    {
      cy.get('.a-button-inner > #continue').click().should('not.have.value').then(function()
      {
          console.log('Enter your email or mobile phone number')
      }
      )
    })
    cy.get('#ap_email').type('9979592492')
    // signUpAndInPage.typeNumber().type(this.data.numbers)
    cy.get('.a-button-inner > #continue').click()
    
    cy.get('#signInSubmit').click().then(function()
    {
      cy.get('#signInSubmit').click().should('not.have.value').then(function()
      {
          console.log('Enter your password')
      }
      )


    })


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

  })
