var TicketClerk = function() {
  this.till = { 25: 0, 50: 0, 100: 0 };
};

TicketClerk.prototype.sell = function(array) {
  array.forEach(note => {
    if (this.canMakeChange()) {
      this.giveChange(note);
    } else {
      return "NO";
    }
    return "YES";
  });
};

TicketClerk.prototype.canMakeChange = function(note) {
  if (note === 50) {
    return this.till[25] > 0;
  }
  if (note === 100) {
    return this.canGiveFiftyTwentyFive() || this.canGiveThreeTwentyFives();
  }
  return true;
};

TicketClerk.prototype.giveChange = function(note) {
  if (note === 25) {
    this.till[25]++;
  }
  if (note === 50) {
    this.till[25]--;
    this.till[50]++;
  }
  if (note === 100 && this.canGiveFiftyTwentyFive()) {
    this.till[25]--;
    this.till[50]--;
    this.till[100]++;
  }
  if (note === 100 && this.canGiveThreeTwentyFives()) {
    this.till[25] -= 3;
    this.till[100]++;
  }
};

TicketClerk.prototype.canGiveThreeTwentyFives = function() {
  return this.till[25] > 2;
};

TicketClerk.prototype.canGiveFiftyTwentyFive = function() {
  return this.till[25] > 0 && this.till[50] > 0;
};
