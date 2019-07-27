// Code your solution in this file
function findMatching (collection, name) {
    const newCollection = [];
    for (const driver of collection) {
        if (driver.toLowerCase() === name.toLowerCase()) {
            debugger;
            newCollection.push(driver);
        }
    }
    return newCollection;
}

function fuzzyMatch (collection, letters) {
    const newCollection = [];
    for (const driver of collection) {
        if (driver.match(`^${letters}`)) {
            newCollection.push(driver);
        }
    }
    return newCollection;
}

function matchName(collection, name) {
    const newCollection = [];
    for (const driver of collection) {
        if (driver.name.toLowerCase() === name.toLowerCase()) {
            newCollection.push(driver);
        }
    }
    return newCollection;
}
