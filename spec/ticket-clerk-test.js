describe("#TicketClerk", function() {
  beforeEach(function() {
    var ticketClerk = new TicketClerk();
  });
  describe("#entry", function() {
    it("shows a hash of the money in the till", function() {
      expect(ticketClerk.entry([25, 50, 100]).toEqual({ 25: 1, 50: 1, 75: 1 }));
    });
  });
});

// My steps;
// 1. create function that keeps track of notes in till
// 2. create function that gives out change
// 3. create function that updates the till
// 4. create function that determines whether till can give change and return YES or NO
