describe("#TicketClerk", function() {
  beforeEach(function() {
    ticketClerk = new TicketClerk();
  });
  describe("#entry", function() {
    it("shows a hash of the money in the till", function() {
      ticketClerk.entry([25]);
      expect(ticketClerk.till).toEqual({ 25: 1, 50: 0, 100: 0 });
    });
  });
});
// My steps;
// 1. create function that keeps track of notes in till
// 2. create function that gives out change
// 3. create function that updates the till
// 4. create function that determines whether till can give change and return YES or NO
