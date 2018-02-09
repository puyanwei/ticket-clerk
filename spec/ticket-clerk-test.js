describe("#ticketClerk", function() {
  it("array [25] to return true", function() {
    expect(ticketClerk([25])).toBe(true);
  });
  it("array [50] to return false, as there is no change available", function() {
    expect(ticketClerk([50])).toBe(false);
  });
});
