/// <reference types="cypress" />

context('Add User', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
    cy.get('body').first().find('button').click()
    cy.location('pathname').should('include', 'user/new')
  })

  it('can add a user', () => {
    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#email').type('jdoe@gmail.com')

    cy.get('#firstName').should('have.value', 'John')
    cy.get('#lastName').should('have.value', 'Doe')
    cy.get('#email').should('have.value', 'jdoe@gmail.com')

    cy.get('button').click()
    cy.location('pathname').should('include', '/')
  })
})