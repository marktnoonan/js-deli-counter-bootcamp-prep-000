var katzDeliLine = []

function takeANumber(deliLine, name) {
  deliLine.push(name);
  const placeInLine = deliLine.length;
  return `Welcome, ${name}. You are number ${placeInLine} in line.`
}

function nowServing() {
  if (!katzDeliLine.length) {
    return "the line is empty"
  }
}