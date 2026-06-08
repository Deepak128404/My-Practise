// {call, bind, apply} used to modify this
// every function has their own call,bind,apply
// call 

const kitchenService = function (ingredients, dishName) {
    console.log(`${this.name} kitchen services is preparing ${dishName} with ${ingredients}`)
}

const animeKitchen = {
    name: "Anime"
}
const gokuKitchen = {
    name: "Goku"
}
const onePieceKitchen = {
    name: "Nami"
}
const arrayArguments = ["Rice", "Sushi"]
kitchenService.call(animeKitchen,"rice","sushi")
kitchenService.apply(gokuKitchen, arrayArguments)
const refOfBind = kitchenService.bind(onePieceKitchen, "Biryani", "Chicken")
refOfBind()
// refOfBind("Biryani", "Chicken")