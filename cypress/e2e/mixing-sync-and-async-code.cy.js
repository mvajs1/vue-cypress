describe("Mixing Synchronous and Asynchronous Code", () => {
  it("should navigate to events list after cancelling an event", () => {
    cy.visit("/create-event");
    // Fill-in the create event form
    cy.get("#event-name").type("Sample Event");
    cy.get("#event-venue").type("Sample Venue");
    cy.get("#event-date-month").select("5");
    cy.get("#event-date-day").select("12");
    cy.get("#event-date-year").select("2025");
    cy.get('#ticket-quantity').type("100");
    // Submit the form
    cy.get("#create-btn").click();

  });
});
