function sumTwoSmallestNumbers(numbers) {  
  //Code here
  
  let sorted = numbers.sort(function(a,b){return a-b});
  
  let sum = sorted[0] + sorted[1];
  
  return sum; 
}


console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));