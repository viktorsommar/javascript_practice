function getRandom(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1
  return randomNumber;
}

console.log(getRandom(6))


