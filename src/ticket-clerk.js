var TicketClerk = function() {
  this.till = { 25: 0, 50: 0, 100: 0 };
};

TicketClerk.prototype.entry = function(array) {
  array.forEach(note => {
    if (note === 25) {
      this.till[25]++;
    }
    if (note === 50) {
      if (this.fiftyNote() === false) {
        return false;
      }
    }
    if (note === 100) {
      if (this.hundredNote() === false) {
        return false;
      }
    }
    return "YES";
  });
};

TicketClerk.prototype.fiftyNote = function() {
  if (this.till[25] > 0) {
    this.till[25]--;
    this.till[50]++;
  }
  return "NO";
};

TicketClerk.prototype.hundredNote = function() {
  if (this.till[25] > 0 && this.till[50] > 0) {
    this.till[25]--;
    this.till[50]--;
    this.till[100]++;
  }
  if (this.till[25] > 2) {
    this.till[25] -= 3;
    this.till[100]++;
  }
  return "NO";
};
