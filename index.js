'use strict';

const defaultLimit = 1000000;

/**
 * Return random number
 * @param {number} max - maximum value
 * @return {number} random number in range
 */
function getRandomNumber(max) {
  return parseInt(Math.floor(Math.random() * Math.floor(max)));
}

/**
 * Numeric compare function
 * @param {number} a - first number to compare
 * @param {number} b - second number to compare
 * @return {number} sort value
 */
function sortNumber(a,b) {
    return a - b;
}

/**
 * Function to duplicates from an array
 * @author Kevin Reynolds <kevin@sensationmultimedia.co.uk>
 * @param {integer} limit - size of comparison array
 * @return {Void}
 */
function getDupes(limit=defaultLimit) {
  // Check for valid command line input
  let getLimit = parseInt(limit);

  if(isNaN(getLimit)) {
    getLimit = defaultLimit;
    console.log(`WARNING: given limit not a number. Using ${getLimit} instead`);
  }


  // Setup list
  const list = Array.from(
    { length: parseInt(limit) + 1 }, 
    count => getRandomNumber(limit)
  ); 

  // Sort to make searching easier
  list.sort(sortNumber);

  const duplicates = [];
  let current = null;
  let lastAdded = null; // prevent duplicate duplicates
  list.forEach(number => {
    if(number === current && number !== lastAdded) {
      duplicates.push(number);
      lastAdded = number;
    } else {
      current = number;
    }
  });

  console.log('List:', list);
  console.log('Duplicates:', duplicates);
}

// Get limit from console args
const limit = process.argv[2];
getDupes(limit);
