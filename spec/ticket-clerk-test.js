describe("#TicketClerk", function() {
  beforeEach(function() {
    ticketClerk = new TicketClerk();
  });
  describe("#entry", function() {
    it("shows a hash of the money in the till, which starts with zero of each denominator", function() {
      expect(ticketClerk.till).toEqual({ 25: 0, 50: 0, 100: 0 });
    });
    // it("adding one 25, one 50 and one 50 notes returns 25:1, 50:1, 100:1", function() {
    //   ticketClerk.entry([25, 50, 25]);
    //   expect(ticketClerk.till).toEqual({ 25: 1, 50: 0, 100: 1 });
    // });
    // it("adding four 25's, two 50's and one 100 notes returns 25:4, 50:2, 100:1", function() {
    //   ticketClerk.entry([25, 50, 100, 25, 25, 50, 25]);
    //   expect(ticketClerk.till).toEqual({ 25: 4, 50: 2, 100: 1 });
    // });
  });
  describe("#fiftyNote", function() {
    it("entering 50 with nothing in the till returns false", function() {
      expect(ticketClerk.fiftyNote()).toBe(false);
    });
    it("deducts a 25 note and adds in a 50", function() {
      ticketClerk.till = { 25: 1, 50: 0, 100: 0 };
      ticketClerk.fiftyNote();
      expect(ticketClerk.till).toEqual({ 25: 0, 50: 1, 100: 0 });
    });
  });

  describe("#hundredNote", function() {
    it("entering 100 with nothing in the till returns false", function() {
      expect(ticketClerk.hundredNote()).toBe(false);
    });
  });
});

// My steps;
// 1. create function that keeps track of notes in till
// 2. create function that gives out change
// 3. create function that updates the till
// 4. create function that determines whether till can give change and return YES or NO
