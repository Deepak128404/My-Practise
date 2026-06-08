// reference of this in function, global, browser 
// in node it's empty object, in browser it's window that's why global this it's dynamic

const bollywoodFilm =  {
    name: "Dhurandhar",
    actor: "Ranveer",

    introduce(){
        return `${this.actor} is in the film ${this.name}`
    },
    arrowIntroduce: () => ` this is inside an arror function this is:${this.name}`
}


const filmSet = {
    crew: "spot boyzzzzzz",
    preparePropx(){
        console.log(`This Inside Normal Func : ${this.crew}`)
        
        function prepareChair() {
            console.log(`This Inside Nested Func : ${this.crew}`)
        }
      prepareChair()
    
        const detachedMethod = () => {
            console.log(`This Inside Detached Method: ${this.crew}`)
        }
      detachedMethod()
    }
} 


console.log(bollywoodFilm.introduce())
// filmSet.preparePropx()
const user = {
    name: "Deepak",
    greet(){
        console.log(` user name is: ${this.name}`)
    }
}
const geet = user.greet
geet() // binding lost //continue to call-bind-apply

