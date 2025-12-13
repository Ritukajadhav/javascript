/* arrays in js are of mixed type 
and it is resizable
accesing element is same as java
array-copy operation creates shallow copy - copy of an object whose properties share same ref point
deep copy do not share same ref point


*/

const myarr = [1,34,25,67,43,90,87]

// or
const myarr2 = new Array(23,43,6,43,21)

console.log(myarr[3])


// Array methods

myarr.push(8)
myarr.pop() // pops last element in the array
// unshift() shif() not much useful

//check whether element is available or not
//returns index of value

console.log(myarr.includes(9)) //false output
console.log(myarr.indexOf(6)) // -1
console.log(myarr)

// slice returns range of array without affecting original array, splice returns part of array nd deletes that part from main array

