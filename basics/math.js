const secsPerMin = 60
const minsPerHour = 60
const hoursPerDay = 24
const daysPerWeek = 7
const weeksPerYear = 52

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay
console.log(`There are ${secondsPerDay} seconds in a day.`)

const yearsAlive = 28
const secondsAlive = secsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear * yearsAlive
console.log(`I have been alive for more than ${secondsAlive} seconds!`)