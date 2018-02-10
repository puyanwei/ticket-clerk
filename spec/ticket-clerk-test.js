describe("#TicketClerk", function() {
  beforeEach(function() {
    ticketClerk = new TicketClerk();
  });
  // describe("#sell", function() {
  //   it("shows a hash of the money in the till, which starts with zero of each denominator", function() {
  //     expect(ticketClerk.till).toEqual({ 25: 0, 50: 0, 100: 0 });
  //   });
  //   it("entering 25, 25, 50 should end up with one 25 and one 50 in the till", function() {
  //     ticketClerk.sell([25, 25, 50]);
  //     expect(ticketClerk.till).toEqual({ 25: 1, 50: 1, 100: 0 });
  // });
  // it("entering 25, 25, 50 should return 'YES' as it can return change", function() {
  //   expect(ticketClerk.sell([25, 25, 50])).toEqual("YES");
  // });
  // });

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

  describe("#hundredNote", function() {
    // it("entering 100 with nothing in the till returns 'NO'", function() {
    //   expect(ticketClerk.hundredNote()).toEqual("NO");
    // });
    it("giving 100 deducts a 50 note and a 25 note, and adds in a 100 note", function() {
      ticketClerk.till = { 25: 2, 50: 2, 100: 0 };
      ticketClerk.hundredNote();
      expect(ticketClerk.till).toEqual({ 25: 1, 50: 1, 100: 1 });
    });
  });

  describe("#hundredNoteTwenties", function() {
    it("giving 100 deducts a three 25 notes, and adds in a 100 note", function() {
      ticketClerk.till = { 25: 6, 50: 0, 100: 0 };
      ticketClerk.hundredNoteTwenties();
      expect(ticketClerk.till).toEqual({ 25: 3, 50: 0, 100: 1 });
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
