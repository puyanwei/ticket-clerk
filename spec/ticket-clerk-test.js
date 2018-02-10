describe("#TicketClerk", function() {
  beforeEach(function() {
    ticketClerk = new TicketClerk();
  });
  describe("#initialize", function() {
    it("shows a hash of the money in the till, which starts with zero of each denominator", function() {
      expect(ticketClerk.till).toEqual({ 25: 0, 50: 0, 100: 0 });
    });
  });

  fdescribe("#sell", function() {
    it("entering 25, 25, 50 should return 'YES' as it can give change", function() {
      ticketClerk.sell([25, 25, 50]);
      expect(ticketClerk.sell).toEqual("YES");
    });
    it("entering 50, 25, 50 should return 'NO' as it cannot give change", function() {
      ticketClerk.sell([50, 25, 50]);
      expect(ticketClerk.sell).toEqual("NO");
    });
  });

  describe("#canMakeChange", function() {
    it("returns true if note is 50 and there is change", function() {
      ticketClerk.till = { 25: 3, 50: 0, 100: 0 };
      expect(ticketClerk.canMakeChange(50)).toBe(true);
    });
    it("returns false if note is 50 and there is no change", function() {
      ticketClerk.till = { 25: 0, 50: 0, 100: 0 };
      expect(ticketClerk.canMakeChange(50)).toBe(false);
    });
    it("returns true if note is 100 and there is change of one 50 and one twenty-give", function() {
      ticketClerk.till = { 25: 2, 50: 2, 100: 0 };
      expect(ticketClerk.canMakeChange(100)).toBe(true);
    });
    it("returns true if note is 100 and there is change of three twenty-fives", function() {
      ticketClerk.till = { 25: 3, 50: 0, 100: 0 };
      expect(ticketClerk.canMakeChange(100)).toBe(true);
    });
    it("returns false if note is 100 and there no change", function() {
      ticketClerk.till = { 25: 2, 50: 0, 100: 0 };
      expect(ticketClerk.canMakeChange(100)).toBe(false);
    });
  });

  describe("#canGiveFiftyTwentyFive", function() {
    it("returns true if there are more then one fifty and one twenty-five", function() {
      ticketClerk.till = { 25: 3, 50: 1, 100: 0 };
      expect(ticketClerk.canGiveFiftyTwentyFive()).toBe(true);
    });
    it("returns false if there are not more then one fifty and one twenty-five", function() {
      ticketClerk.till = { 25: 3, 50: 0, 100: 0 };
      expect(ticketClerk.canGiveFiftyTwentyFive()).toBe(false);
    });
    it("returns false if there are not more then one fifty and one twenty-five", function() {
      ticketClerk.till = { 25: 0, 50: 1, 100: 0 };
      expect(ticketClerk.canGiveFiftyTwentyFive()).toBe(false);
    });
  });

  describe("#canGiveThreeTwentyFives", function() {
    it("returns true if there are more then two twenty-fives", function() {
      ticketClerk.till = { 25: 3, 50: 1, 100: 0 };
      expect(ticketClerk.canGiveThreeTwentyFives()).toBe(true);
    });
    it("returns false if there are not more then two twenty-fives", function() {
      ticketClerk.till = { 25: 2, 50: 1, 100: 0 };
      expect(ticketClerk.canGiveThreeTwentyFives()).toBe(false);
    });
  });

  describe("#giveChange", function() {
    it("adds a 25 note to the till", function() {
      ticketClerk.giveChange(25);
      expect(ticketClerk.till).toEqual({ 25: 1, 50: 0, 100: 0 });
    });
    it("adds a 50 to the till, and deducts a 25 note", function() {
      ticketClerk.till = { 25: 3, 50: 0, 100: 0 };
      ticketClerk.giveChange(50);
      expect(ticketClerk.till).toEqual({ 25: 2, 50: 1, 100: 0 });
    });
    it("adds a 100 to the till, and deducts a fifty and a twenty-five note", function() {
      ticketClerk.till = { 25: 2, 50: 1, 100: 0 };
      ticketClerk.giveChange(100);
      expect(ticketClerk.till).toEqual({ 25: 1, 50: 0, 100: 1 });
    });
    it("adds a 100 to the till, and deducts three twenty-five notes", function() {
      ticketClerk.till = { 25: 4, 50: 0, 100: 0 };
      ticketClerk.giveChange(100);
      expect(ticketClerk.till).toEqual({ 25: 1, 50: 0, 100: 1 });
    });
  });
});

// My steps;
// 1. create function that keeps track of notes in till
// 2. create function that gives out change
// 3. create function that updates the till
// 4. create function that determines whether till can give change and return YES or NO
