describe("Intercept Events", () => {
    before(() => {
        cy.intercept("GET", "/api/event", 
        { fixture: "events-list.json" }).as("interceptEvents");
    })
    
    it("should intercept events", () => {
        cy.visit("/");
        cy.wait("@interceptEvents");
    })
})