// Code your solution in this file
function findMatching(array, name) {
    let matchingDrivers = []
    for (const element of array) {
        if (element.toLowerCase() == name.toLowerCase()) {
            matchingDrivers.push(element)
        }
      }
    return matchingDrivers
}

function fuzzyMatch(array, name) {
    let matchingDrivers = []
    for (const element of array) {
        const elementArray = element.split("")
        const nameArray = name.split("")
        if (elementArray[0] === nameArray[0] && elementArray[1] === nameArray[1]) {
            matchingDrivers.push(element)
        }
      }
    return matchingDrivers
}

function matchName(obj, name) {
    let match = obj.filter(function (driver) { return driver.name === name })
    return match
}