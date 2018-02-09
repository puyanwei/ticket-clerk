describe("#TicketClerk", function() {
  beforeEach(function() {
    ticketClerk = new TicketClerk();
  });
  describe("#entry", function() {
    it("shows a hash of the money in the till, which starts with zero of each denominator", function() {
      expect(ticketClerk.till).toEqual({ 25: 0, 50: 0, 100: 0 });
    });
    it("shows a hash of the money in the till, which has one of each denominator", function() {
      ticketClerk.entry([25, 50, 100]);
      expect(ticketClerk.till).toEqual({ 25: 1, 50: 1, 100: 1 });
    });
  });
});
// My steps;
// 1. create function that keeps track of notes in till
// 2. create function that gives out change
// 3. create function that updates the till
// 4. create function that determines whether till can give change and return YES or NO
