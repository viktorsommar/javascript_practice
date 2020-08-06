/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correctAnswers = 0

// 2. Store the rank of a player

let playerRank;

// 3. Select the <main> HTML element

document.querySelector('main').innerHTML
/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

question1 = prompt('What is the capital of Sweden?')
question2 = prompt('What is the capital of France?')
question3 = prompt('What is the capital of Canada?')
question4 = prompt('What is the capital of Germany?')
question5 = prompt('What is the capital of Italy?')

if (question1.toLowerCase() === 'stockholm') {
  correctAnswers += 1
}

if (question2.toLowerCase() === 'paris') {
  correctAnswers +=1 
}

if (question3.toLowerCase() === 'ottawa') {
  correctAnswers +=1 
}

if (question4.toLowerCase() === 'berlin') {
  correctAnswers +=1 
}

if (question5.toLowerCase() === 'rome') {
  correctAnswers +=1 
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( correctAnswers === 5 ) {
  playerRank = 'Gold'
} else if ( correctAnswers >= 3 ) {
  playerRank = 'Silver'
} else if ( correctAnswers >= 2 ) {
  playerRank = 'Bronze'
} else {
  playerRank = 'No crown'
}
    

// 6. Output results to the <main> element

document.querySelector('main').innerHTML = `
<h2>You got ${correctAnswers} out 5 questions right!</h2>
<p>You earned the crown: <strong>${playerRank}</strong></p>`