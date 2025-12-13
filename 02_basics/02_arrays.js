/* to merge two arrays use concat.
if we push arr2 to arr1 then whole aar2 will act as an element in arr1
*/

const arr1 = ["SPM","ISR","HCI","OS"]
const arr2 = ["OOP","DSA","ML","AI"]

// arr1.push(arr2)
// console.log(arr1) //[ 'SPM', 'ISR', 'HCI', 'OS', [ 'OOP', 'DSA', 'ML', 'AI' ] ]
// ****************************************************************************************************


// concat
console.log(arr1.concat(arr2))

/*[
  'SPM', 'ISR',
  'HCI', 'OS',
  'OOP', 'DSA',
  'ML',  'AI'
]*/