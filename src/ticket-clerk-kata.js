till = { 25: 0, 50: 0, 100: 0 };

var tickets = function(array) {
  for (var i = 0; i < array.length; i++) {
    if (canMakeChange(array[i])) {
      giveChange(array[i]);
    } else {
      return "NO";
    }
  }
  return "YES";
};

var canMakeChange = function(note) {
  if (note === 25) {
    return true;
  }
  if (note === 50) {
    return till[25] > 0;
  }
  if (note === 100) {
    return canGiveFiftyTwentyFive() || canGiveThreeTwentyFives();
  }
};

var giveChange = function(note) {
  if (note === 25) {
    till[25]++;
  }
  if (note === 50) {
    till[25]--;
    till[50]++;
  }
  if (note === 100 && canGiveFiftyTwentyFive()) {
    till[25]--;
    till[50]--;
    till[100]++;
  }
  if (note === 100 && canGiveThreeTwentyFives()) {
    till[25] -= 3;
    till[100]++;
  }
};

var canGiveThreeTwentyFives = function() {
  return till[25] > 2;
};

var canGiveFiftyTwentyFive = function() {
  return till[25] > 0 && till[50] > 0;
};
