/// <reference types="cypress" />

context('Delete User', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('can delete a user', () => {
    // Récupération de la taille du tableau
    let tableLength = 0
    cy.get('table tbody').find('tr').then(elm => tableLength = elm.length)

    // Suppression d'un utilisateur
    cy.get('table tbody tr:last').find('button.red').click()

    // Vérification que la taille du tableau a bien diminué
    cy.get('table tbody').find('tr').then(elm => {
      expect(elm.length).to.equal(tableLength - 1)
    })

  })
})