const myString = {
  string: 'Programming with Treehouse is fun!',
  countWords: function(string){
    return this.string.split(" ").length
  }
}

console.log(myString.string.split(' ').length)

let numWords = myString.countWords(this.string)
console.log(numWords)

myString.characters = myString.string.length
console.log(myString.characters)
console.log(myString)