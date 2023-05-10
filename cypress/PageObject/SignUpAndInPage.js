class SignUpAndInPage
{

typeNumber()
{
    return cy.get('#ap_email')
}

typePassword()
{
    return cy.get('#ap_password')
}


}

export default SignUpAndInPage;

