var ticketClerk = function(array) {
  if (array.length === 1) {
    if (array[0] === 25) {
      return "YES";
    }
    return "NO";
  }
  for (var i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return "NO";
    }
    return "YES";
  }
};

var balance = function(array) {
  return array.reduce((a, b) => a + b, 0);
};
