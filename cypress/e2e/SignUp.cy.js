/// <reference types="Cypress" />
import HomePage from "../PageObject/HomePage"
import SignUpAndInPage from "../PageObject/SignUpAndInPage"

beforeEach(function(){
  cy.fixture('example').then(function(data)
  {
      this.data=data 
  })
})

describe('Sign up Page Test Suites',function()
{
 
  it('Sign up attempt', function()  {
    const homePage=new HomePage()
    const signUpAndInPage=new SignUpAndInPage()

    cy.visit(this.data.url)
    cy.get('.nav-signin-tooltip-footer > .nav-a').click()

    
    cy.get('#continue').click().then(function()
    {
      cy.get('#continue').click().should('not.have.value').then(function()
      {
          console.log('Enter your name')
          console.log('Enter your mobile number')
          console.log('Enter your password')

      }
      )
    })

    cy.get('#ap_customer_name').type('Jay')

    // cy.get('.a-dropdown-prompt').select('.a-dropdown-link.a-active')

    cy.get('#ap_phone_number').type('ABCD!@#$+-')

    cy.get('#continue').click().then(function()
    {
      cy.get('#continue').click().should('not.have.value').then(function()
      {
          console.log('The mobile number you entered does not seem to be valid')
      })
     } )
    

    cy.get('#ap_phone_number').clear().type('9979592492')

    cy.get('#ap_email').type('abc123..')
    cy.get('#continue').click().then(function()
    {
      cy.get('#continue').click().should('not.have.value').then(function()
      {
          console.log('Enter a valid email address')
      })
     } )

    cy.get('#ap_email').clear().type('legendawesome2@gmail.com')
    
    cy.get('#ap_password').type('ABC123$$9988')

    cy.get('#continue').click().then(function()
    {
      cy.get('#continue').click().should('not.have.value').then(function()
      {
          console.log('There was a problem')
      })
     }) 


    })

    it('Search product without Login', function()  {
      const homePage=new HomePage()
      const signUpAndInPage=new SignUpAndInPage()
  
      cy.visit(this.data.url)
      cy.get('#twotabsearchtextbox').type('Medikit')
      cy.get(':nth-child(1) > .s-suggestion-container > .s-suggestion').click()
      // cy.get('#p_90\/6741118031 > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').check({ force: true })
      // cy.get('#p_89\/Noise > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click()
      cy.get('#low-price').type('999')
      cy.get('#high-price').type('4999')
      cy.get('.a-button-input').click()

      // cy.get('.nav-signin-tooltip-footer > .nav-a').click()
  
      })
  })