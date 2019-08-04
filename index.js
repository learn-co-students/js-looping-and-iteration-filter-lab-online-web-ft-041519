// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver[0] === string[0]);
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}
