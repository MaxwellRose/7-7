document.getElementById('button').addEventListener('click', calculate)

let numb1 = 0
let numb2 = 0
let count = 0
let answer = 0

function calculate () {
  answer = 0
  numb1 = document.getElementById('num').value
  numb2 = document.getElementById('num1').value
  numb1 = parseInt(numb1)
  numb2 = parseInt(numb2)

  for (count = 0; count < numb1; count++)  
   { answer = answer + numb2 }
   document.getElementById('answer').innerHTML = answer
}
