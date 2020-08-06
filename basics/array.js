const planets = [ 'Mercury', 'Venus', 'Earth', 'Mars' ];

console.log( planets[0] )

planets.push( 'Jupiter ' )

planets.pop() // Removes the last element and returns it
planets.shift() // Removes the first element and returns it


const mathStudents = [
  'Marty',
  'Jennifer',
  'Lorraine',
  'Goldie'
];

const scienceStudents = [
  'Emmett',
  'Clara',
  'Needles',
  'Strickland'
];

const students = [...scienceStudents, ...mathStudents] // spread operator (...)
console.log(students)


const names = ['Viktor', 'Jules', 'Louise', 'Astrid']
for ( let i = 0; i < names.length; i++ ) {
  console.log( names[i] )
}

function createListItems(arr) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${arr[i]}</li>`
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(names)}
  </ol>`

// Array methods
// join(): Joins the array object as a string
// include(): Search for an object in the array and return true or false 