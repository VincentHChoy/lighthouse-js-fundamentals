

function buildLine(length) {
  var line = '';
  for (let i = 1; i <= length; i++) {
    line += '* ';
  }
  return line + '\n'
}


function buildTriangle(width) {
  var triangle = '';
  for (i = 1; i <= width; i++) {
    triangle += buildLine(i);
  }
  return triangle;
}
console.log(buildTriangle(10))

