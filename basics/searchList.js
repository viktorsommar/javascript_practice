const inStock = [
  'pizza',
  'cookie',
  'eggs',
  'apples',
  'milk',
  'cheese',
  'bread',
  'lettuce',
  'carrots',
  'broccoli',
  'potatoes',
  'crackers',
  'onions',
  'tofu',
  'limes',
  'cucumbers'
]

const search = prompt('Search for a product.')
let message;

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`
} else if ( inStock.includes(search.toLowerCase()) ) {
  message = `Yes, we have <strong>${search.toLowerCase()}</strong>. It's #${inStock.indexOf(search)+1} on the list.`
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`
}

document.querySelector('main').innerHTML = `<p>${message}</p>`


// Multidimensional Arrays

const grades = [
  [80, 90, 100, 95],
  [80, 90, 100, 95],
  [80, 90, 100, 95]
]

grades[0][3] // 95 of the first inner array