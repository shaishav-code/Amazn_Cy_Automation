/// <reference types="cypress" />
import HomePage from "../PageObject/HomePage"
import SignUpAndInPage from "../PageObject/SignUpAndInPage"


describe('Sign up test suite', () => {
  it('Sign in attempt', () => {
    const signUpAndInPage=new SignUpAndInPage()
    cy.visit('https://www.amazon.in/')
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
  
      cy.get('#ap_password').type('  ')
      
  })
})

it('Forgot password', () => {
  cy.visit('https://www.amazon.in/')
  cy.get('#nav-link-accountList-nav-line-1').click()
  cy.wait(10000)
  cy.get('#ap_email').type('9979592492')
  cy.get('.a-button-inner > #continue').click()
 cy.get('#auth-fpp-link-bottom').click()

 cy.get('#continue').click().then(function()
 {
       console.log('Verification required')
   }
   )


 
    // signUpAndInPage.typeNumbqer().type(this.data.numbers)
    

})
})