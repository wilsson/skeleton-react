describe('App', () => {
  it('Frontpage can be opened', () => {
    cy.visit('http://localhost:3000')
    cy.contains('create react app')
  })
})
