var line = []


function takeANumber(line,name) {
  line.push(name)
  return `Welcome, your number is ${line.length}.`
}

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