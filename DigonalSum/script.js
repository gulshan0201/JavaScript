var array = [
  [1,2,3,4], 
  [3,4,5,6], 
  [3,5,7,8], 
  [7,8,9,1],
];

var sum = 0;
function diginalSum(matrix){
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
      if(i === j){
        sum = sum + matrix[i][j]
      }
    }
  }
  return sum;
}
var x = diginalSum(array);
console.log(x);

document.getElementById('ans').innerHTML = "The answer is " + document.write(x)
