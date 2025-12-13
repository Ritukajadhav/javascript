"use strict" // treat further JS code as a newer version

// alert(3+2) this will give error bcz we r using node nd not browser

/*
console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")
*/

/* primitive datatypes
number ranges 2^53
string => ""
bigint
undefined
boolean => true false
symbol => used for unique values
null => standalone value.. if we try to print (typeof null) it will print object

object
*/

let age = 20;
let username = "Ruvi"
let num = null
let isLogged = false
let state

console.table([age,username,num,isLogged,state])
console.log(typeof num)// returns object
console.log(typeof isLogged)