// Code your solution here
function findMatching(array, name) {
  const matchingDrivers = array.filter(
    (driver) => driver.toUpperCase() === name.toUpperCase()
  );
  return matchingDrivers;
}

function fuzzyMatch(array, letters) {
  const matchingLetters = array.filter((name) => {
    return name.indexOf(letters) === 0;
  });
  return matchingLetters;
}

function matchName(array, name) {
  const matchingDriverName = array.filter(
    (nameAndHome) => nameAndHome.name === name
  );
  return matchingDriverName;
}
