// Code your solution in this file
function findMatching(collection, name){
  const newArray = [];
  for (const driver of collection) {
    if (driver.toLowerCase() === name.toLowerCase()){
      newArray.push(driver);
    }
  }
  return newArray
}

function fuzzyMatch(collection, letters){
  const newArray = [];
  for (const driver of collection){
    if (driver.match(`^${letters}`)){
      newArray.push(driver);
    }
  }
  return newArray
}

function matchName(collection, name){
  const newArray = [];
  for (const driver of collection){
    if (driver.name.toLowerCase() === name.toLowerCase()){
      newArray.push(driver);
    }
  }
  return newArray
}
