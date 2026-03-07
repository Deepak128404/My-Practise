// console.log('1');

// setTimeout(() => console.log('2'), 0);   // macrotask

// Promise.resolve().then(() => console.log('3'));  // microtask

// console.log('4');

// console.log(typeof this)

// const user = {
//     name: "Deepak",
//     greet(){
//         console.log(this.name)
//     }
// }
// const geet = user.greet
// geet() binding lost

// function greet(){
//     console.log(this.name)
// }

// const user = {name: "Deepak"}

// greet.call(user)

// const bound = greet.bind(user)

// bound()


// function User (name){
//     this.name = name
// }
// User.prototype.greet = function(){
//     console.log(`Hi I'm  ${this.name}`)
// }

// const u1 = new User("john");
// const u2 = new User("don")
// const u3 = new User("don2")

// u2.greet()
// u3.greet()