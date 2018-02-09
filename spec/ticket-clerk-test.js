describe("#TicketClerk", function() {
  beforeEach(function() {
    ticketClerk = new TicketClerk();
  });
  describe("#entry", function() {
    it("shows a hash of the money in the till, which starts with zero of each denominator", function() {
      expect(ticketClerk.till).toEqual({ 25: 0, 50: 0, 100: 0 });
    });
  });

  describe("#fiftyNote", function() {
    it("entering 50 with nothing in the till returns false", function() {
      expect(ticketClerk.fiftyNote()).toBe(false);
    });
    it("giving 50 deducts a 25 note and adds in a 50 note", function() {
      ticketClerk.till = { 25: 1, 50: 0, 100: 0 };
      ticketClerk.fiftyNote();
      expect(ticketClerk.till).toEqual({ 25: 0, 50: 1, 100: 0 });
    });
  });

  describe("#hundredNote", function() {
    it("entering 100 with nothing in the till returns false", function() {
      expect(ticketClerk.hundredNote()).toBe(false);
    });
    it("giving 100 deducts a 50 note and a 25 note, and adds in a 100 note", function() {
      ticketClerk.till = { 25: 2, 50: 2, 100: 0 };
      ticketClerk.hundredNote();
      expect(ticketClerk.till).toEqual({ 25: 1, 50: 1, 100: 1 });
    });
    it("giving 100 deducts a three 25 notes, and adds in a 100 note", function() {
      ticketClerk.till = { 25: 6, 50: 0, 100: 0 };
      ticketClerk.hundredNote();
      expect(ticketClerk.till).toEqual({ 25: 3, 50: 0, 100: 1 });
    });
  });
});

// My steps;
// 1. create function that keeps track of notes in till
// 2. create function that gives out change
// 3. create function that updates the till
// 4. create function that determines whether till can give change and return YES or NO
