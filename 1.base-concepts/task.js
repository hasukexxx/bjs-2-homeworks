"use strict"
function solveEquation(a,b,c) {
  let d = b**-4*a*c;
  let arr = [];
  if (d < 0) {
    arr = [];
  }
  else if (d === 0) {
    arr = [-b/(2*a)];
  } 
  else {
    arr = [(-b + Math.sqrt(d) )/(2*a),(-b - Math.sqrt(d) )/(2*a)];
  }
  return arr;
}

console.log(solveEquation(1,5,4))



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}