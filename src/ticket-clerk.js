var TicketClerk = function() {
  this.till = { 25: 0, 50: 0, 100: 0 };
};

TicketClerk.prototype.entry = function(array) {
  // for (var i = 0; i < array.length; i++) {
  //   if (array[i] === 25) {
  //     this.till[25]++;
  //   }
  //   if (array[i] === 50) {
  //     this.fiftyNote();
  //   }
  //   if (array[i] === 100) {
  //     this.hundredNote();
  //   }
  // }
  array.forEach(function(note) {
    if (note === 25) {
      this.till[25]++;
    }
    if (note === 50) {
      fiftyNote();
    }
    if (note === 100) {
      hundredNote();
    }
    hundredNote();
  });
};

TicketClerk.prototype.fiftyNote = function() {
  if (this.till[25] > 0) {
    this.till[25]--;
    this.till[50]++;
  }
  return false;
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
  return false;
};
