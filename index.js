// Code your solution in this file!
// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of the above two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function: returns a fare multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. fareDoubler: uses createFareMultiplier to double fare
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler: uses createFareMultiplier to triple fare
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers: applies one of the driver-returning functions
function selectDifferentDrivers(drivers, driverSelectorFunction) {
  return driverSelectorFunction(drivers);
}
