var ticketClerk = function(array) {
  if (array[0] === 25) {
    return "YES";
  }
  return "NO";
};

var balance = function(array) {
  return array.reduce((a, b) => a + b, 0);
};
