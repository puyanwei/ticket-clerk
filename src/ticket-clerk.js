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
