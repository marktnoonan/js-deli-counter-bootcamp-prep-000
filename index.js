var katzDeliLine = []

function takeANumber(deliLine, name) {
  deliLine.push(name);
  const placeInLine = deliLine.length;
  return `Welcome, ${name}. You are number ${placeInLine} in line.`
}

function nowServing(deliLine) {
  if (!deliLine.length) {
    return "There is nobody waiting to be served!"
  } 
  const serving = deliLine[0]
  deliLine.unshift()
  return `Currently serving ${serving}.`
}

