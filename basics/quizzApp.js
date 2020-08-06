const questions = [
  {question: "What's the capital of Sweden?", answer: "stockholm"}, 
  {question: "What's the capital of France?", answer: "paris"}, 
  {question: "What's the capital of Italy?", answer: "rome"}
]

const correct = []
const incorrect = []
let correctAnswers = 0;
let wrongAnswers = 0
let answer = '';

for (let i = 0; i < questions.length; i++) {
  let question = questions[i].question
  let answer = questions[i].answer
  let response = prompt(question)

  if (response == answer) {
    correctAnswers++;
    correct.push(question)
  } else {
    wrongAnswers++
    incorrect.push(question)
  }
}

function createListItems( arr ) {
  let items = ''
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`
  }
  return items
}

let html = `
<h2>You got ${correctAnswers} out of 3 questions right!</h2>

<h3>You got these questions right:</h3>
<ol>
  ${createListItems(correct)}
</ol>

<h3>You got these questions wrong:</h3>
<ol>
  ${createListItems(incorrect)} 
</ol>
`

document.querySelector('main').innerHTML = html