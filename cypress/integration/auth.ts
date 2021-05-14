describe('', () => {
  it('nav to login', () => {
    cy.visit('http://localhost:3000')
    cy.contains('button', 'Login', { matchCase: false })
  })

  it('nav to app after signup', () => {
    cy.intercept('POST', '/auth/v1/signup', { fixture: 'signUpResp' }).as('signUp')
    cy.visit('http://localhost:3000/auth/signup')
    cy.get('[placeholder=Username]').type('test@test.com')
    cy.get('[placeholder=Password]').type('randompassword')
    cy.get('[placeholder="Confirm Password"]').type('randompassword')
    cy.contains('button', 'Sign Up', { matchCase: false }).click()
    cy.wait('@signUp')
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/app')
    })
  })
})