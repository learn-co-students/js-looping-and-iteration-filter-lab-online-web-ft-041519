// Code your solution in this file

function findMatching(arrayse, names) {
    
    return arrayse.filter(function (num) { return num.toUpperCase() === names.toUpperCase(); });
    
}

function fuzzyMatch(arrayse, names) {

    let partial = names.length

    return arrayse.filter(function (num) { 

        return num.slice(0, partial).toUpperCase() === names.toUpperCase(); });

}

function matchName(arrayse, names) {
    return arrayse.filter(function (num) { return num.name === names; });
}
