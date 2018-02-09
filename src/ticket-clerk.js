var TicketClerk = function() {
  this.till = { 25: 0, 50: 0, 100: 0 };
};

TicketClerk.prototype.entry = function(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 25) {
      this.till[25]++;
    }
    if (array[i] === 50) {
      this.till[50]++;
    }
    if (array[i] === 100) {
      this.till[100]++;
    }
  }
};

TicketClerk.prototype.fiftyNote = function(note) {
  if (note === 50 && this.till[25] > 0) {
    this.till[25]--;
    this.till[50]++;
    return true;
  }
  return false;
};
