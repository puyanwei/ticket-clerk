describe("#ticketClerk", function() {
  it("array [25] to return YES", function() {
    expect(ticketClerk([25])).toEqual("YES");
  });
  it("array [50] to return NO, as there is no change available", function() {
    expect(ticketClerk([50])).toEqual("NO");
  });
});

describe("#balance", function() {
  it("array [25, 25] to return 50", function() {
    expect(balance([25, 25])).toEqual(50);
  });
});
