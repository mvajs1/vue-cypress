describe('Navigation', () => {
  it('should have events list link that navigates to the events list page', () => {
    // navigate to the homepage
    cy.visit("/");
    // check events list link is visible
    cy.get("a[href='/events-list']").should("be.visible");
    // click on the events list link
    cy.get("a[href='/events-list']").click();
    // check events list page is opened
    cy.get("h2").contains("Events List").should("be.visible");
  })
})