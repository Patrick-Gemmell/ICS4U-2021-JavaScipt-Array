// Created By: Patrick Gemmell
// Created On: May 2021
// This program generates a list of 10 random numbers between 1 and 99
//   then finds the minimum and maximum number in the list.

// This function finds the minimum number in a list
/**
 * This function finds the min number from the list.
 * @param {int} minNumberList
 * @return {int}
 */
function findMinValue(minNumberList) {
  // Looping through the list to find the minimum value
  let minNumber = minNumberList[0];
  for (let counter = 0; counter < 10; counter ++) {
    if (minNumber > minNumberList[counter]) {
      minNumber = minNumberList[counter];
    } else {
      continue;
    }
  }

  // Returning the minimum number
  return minNumber;
}

// This function finds the maximum number in a list
/**
 * This function finds the max number from the list.
 * @param {int} maxNumberList
 * @return {int}
 */
function findMaxValue(maxNumberList) {
  // Looping through the list to find the maximum value
  let maxNumber = maxNumberList[0];
  for (let counter = 0; counter < 10; counter ++) {
    if (maxNumber < maxNumberList[counter]) {
      maxNumber = maxNumberList[counter];
    } else {
      continue;
    }
  }

  // Returning the maximum number
  return maxNumber;
}

// Initializing the list
const NUMBER_LIST = [];

// Generating random numbers between 1 and 99 and adding them to a list
console.log('List of Numbers:');
for (let counter = 0; counter < 10; counter++) {
  const randomNumber = Math.floor(Math.random() * ((99 - 1)) + 1) + 1;
  NUMBER_LIST[counter] = randomNumber;
  console.log(NUMBER_LIST[counter]);
}

// Process
const MIN_VALUE = findMinValue(NUMBER_LIST);
const MAX_VALUE = findMaxValue(NUMBER_LIST);

// Output
console.log();
console.log('The minimum number in the list is', MIN_VALUE);
console.log();
console.log('The maximum number in the list is', MAX_VALUE);
