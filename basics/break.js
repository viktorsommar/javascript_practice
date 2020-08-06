const secretWord = 'tomato'
let message = 'Access denied :('

for ( let i = 5; i >= 1; i-- ) {
  let guess = prompt(`Enter the secret word. You have ${i} tries.`)
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world'
    break; // immediatly ends the loop if the guess is correct
  }
}

alert(message)


const tMinus = 10
let message = 'Liftoff!'

for ( let i = tMinus; i >= 1; i--) {
  let status = prompt(`T-Minus ${i}... Continue? (Y/N)`)
  if ( status === null || status.toLowerCase() === 'n' ) {
    message = 'Abort launch!'
    break
  }
}

alert(message)