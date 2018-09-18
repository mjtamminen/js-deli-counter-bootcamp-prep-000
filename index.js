var line = []
var lineTotal = []


function takeANumber(line) {
  line.push(lineTotal.length+1)
  lineTotal.push(lineTotal.length+1)
  return `Welcome, your number is ${lineTotal.length}.`
}

console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(nowServing(line))
console.log(nowServing(line))
console.log(nowServing(line))
console.log(takeANumber(line))
console.log(nowServing(line))

function nowServing(line) {
  if (line.length===0) {
    return "There is nobody waiting to be served!"
  }
  else {return `Currently serving ${line.shift()}.`}
}

function currentLine(line) {
  var everyone = []
  if (line.length===0) {
    return "The line is currently empty." 
  }
  else {for (let i = 0; i < line.length; i++) {
  everyone.push(`${i + 1}. ${line[i]}`)  
  }
  return `The line is currently: ${everyone.join(', ')}`
  }
}

console.log(currentLine(["Hans", "Mary", "Joseph"]))
console.log(currentLine(["Hans", "Mary", "Joseph"]))