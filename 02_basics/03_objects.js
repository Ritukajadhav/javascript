//two types- singleton and object.create


//object literals
// we can define key:value pair in objects unlike array where we have only indexes 

const mysym = Symbol("key1")
const JsUser = {
    name: "Himani", //by default system considers key as string
    age: 18,
    [mysym] : "mykey1", //must be written in []. else it will act as a string datatype
    location: "Pune",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"] 
}

console.log(JsUser.email) //abc@gmail.com
console.log(JsUser['email']) //another method to access. ame output
console.log(typeof JsUser[mysym])

//Object.freeze() used to values.. value cant be changed after this

//function

JsUser.greeting = function(){
    console.log("hello user")
}
JsUser.greetingtwo = function(){
    console.log(`hello user ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo());
 