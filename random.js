

// Returns a random number between two numbers.

// @params {number} lower - The lowest number value.
// @params {number} upper - The highest number value.
// @return {number} The random number value.

const getRandomNumber = (upper, lower) => {
  const randomNumber = Math.floor( Math.random() * (upper - lower + 1 )) + lower;
  return randomNumber
  console.log(`${randomNumber} is between ${lower} and ${upper}!`)
}

getRandomNumber(10, 5)
console.log(`${randomNumber} is between ${lower} and ${upper}!`)


// Call the function and pass it different values
