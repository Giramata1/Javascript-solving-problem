//remove duplicate number by using array
functionRemoveDuplicatearrays(arrays){
uniquearrays=array.map(JSNO.stringfy);
  filter.string=(value,self,index)=> self.index of(value===index);
  const arrays=([1,2,2,3,3,6,11]);
  const result=(RemoveDuplicate(arrays);
  console.log(result);
}
//output:[1,2,3,6,11]
// string reversed.
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: "olleh"


//Find the Maximum Number
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([13, 28, 27, 1005, 54, 19])); // Output: 1005

 // to Check the  Number is Prime


function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(11)); // Output: true
console.log(isPrime(8)); // Output: false
