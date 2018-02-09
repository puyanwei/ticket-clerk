describe("#TicketClerk", function() {
  beforeEach(function() {
    ticketClerk = new TicketClerk();
  });
  describe("#entry", function() {
    it("shows a hash of the money in the till, which starts with zero of each denominator", function() {
      expect(ticketClerk.till).toEqual({ 25: 0, 50: 0, 100: 0 });
    });
    it("adding one 25, one 50 and one 100 notes returns 25:1, 50:1, 100:1", function() {
      ticketClerk.entry([25, 50, 100]);
      expect(ticketClerk.till).toEqual({ 25: 1, 50: 1, 100: 1 });
    });
    it("adding four 25's, two 50's and one 100 notes returns 25:4, 50:2, 100:1", function() {
      ticketClerk.entry([25, 50, 100, 25, 25, 50, 25]);
      expect(ticketClerk.till).toEqual({ 25: 4, 50: 2, 100: 1 });
    });
  });
});
// My steps;
// 1. create function that keeps track of notes in till
// 2. create function that gives out change
// 3. create function that updates the till
// 4. create function that determines whether till can give change and return YES or NO
