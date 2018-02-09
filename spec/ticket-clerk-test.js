describe("#ticketClerk", function() {
  it("array [25] to return YES as there is change", function() {
    expect(ticketClerk([25])).toEqual("YES");
  });
  it("array [50] to return NO, as there is no change available", function() {
    expect(ticketClerk([50])).toEqual("NO");
  });
  it("array [25, 25] to return YES, as there is change", function() {
    expect(ticketClerk([25, 25])).toEqual("YES");
  });
  it("array [25, 25] to return YES, as there is no change available", function() {
    expect(ticketClerk([25, 50])).toEqual("YES");
  });
});

describe("#balance", function() {
  it("array [25, 25] to return 50", function() {
    expect(balance([25, 25])).toEqual(50);
  });
  it("array [25, 25] to return 50", function() {
    expect(balance([25, 75])).toEqual(100);
  });
  it("array [25, 25, 50, 50 75] to return 225", function() {
    expect(balance([25, 25, 50, 50, 75])).toEqual(225);
  });
});
