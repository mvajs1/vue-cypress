describe("Create Event", () => {
    it("should create a new event", () => {
        // Navigate to the homepage
        cy.visit("/");
        // Go to the create event form
        cy.get("a[href='/create-event']").click();
        // Fill-in the form
        cy.get("#event-name").type("Happy Music Event");
        cy.get("#event-venue").type("Some famous place");
        cy.get("#event-date-month").select("5");
        cy.get("#event-date-day").select("12");
        cy.get("#event-date-year").select("2025");
        cy.get('#ticket-quantity').type("100");
        cy.get("textarea[name='event-notes']").type("Don't miss out");
        cy.get("input[name='event-image']").check("./assets/event-3.jpg", {force: true});
        // Submit the form
        cy.get("#create-btn").click();
        // Assert that a new event has been created
        cy.contains("Event Details").should("be.visible");
    })

    it.only("should dispatch create event directly from Vuex store", () => {
        cy.visit("/");

        cy.window().then(window => {
            cy.fixture("create-event.json").then(payload => {
                window.__app__
                    .$store.dispatch("createEvent", payload)
            });
        });
    });
});
