function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
};

function fuzzyMatch(drivers, string) {
    const stringLength = string.length;
    return drivers.filter(driver => driver.slice(0, stringLength) === string);
};

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
};
