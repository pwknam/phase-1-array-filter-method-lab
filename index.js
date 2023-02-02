function findMatching(drivers, name) {
    const matchingName = drivers.filter(function (driver) {
        let lowerCaseDriver = driver.toLowerCase();
        let lowerCaseName = name.toLowerCase();
        if (lowerCaseDriver === lowerCaseName)
            return driver
    })
    return matchingName
}

function fuzzyMatch(drivers, letters) {
    const matchingLetters = drivers.filter(function (driver) {
        let slicedDriver = driver.slice(0, letters.length)
        if (slicedDriver === letters) {
            return driver
        }
    })
    return matchingLetters
}

function matchName(drivers, argumentName) {
    const matchingDriver = drivers.filter(function(driver){
        if (driver.name === argumentName){
            return driver
        }
    })
    return matchingDriver
}