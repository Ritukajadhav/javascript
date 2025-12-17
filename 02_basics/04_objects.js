//singleton

const user = {}
user.id = "1234abc"
user.name = "Himani"
user.isLoggedIn = false

// console.log(user)

const user2 = {
    email:"abc@g.com",
    fullname:{
        userfullname:{
            firstname: "Himani",
            lastname: "Singh"
        }
    }
}

console.log(user2.fullname.userfullname)

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

const obj3 = Object.assign({},obj1,obj2)
//orrrrrrrrrrrrrrrrrrrrrrrrrrr use spread

const obj4 = {...obj1, ...obj2}
console.log(obj4)


console.log(obj3)

// *************************************

//deconstructing object

const company ={
    Ename: "IBM",
    JobRole : "data scientist",
    CTC: 1000000
}
const{Ename}=company
console.log(Ename)

//or in react 
// const job = ({company})=>{

// }

