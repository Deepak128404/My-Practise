const orders = [
  { dishName: "Butter Chicken", spicy: false, price: 320, quantity: 2 },
  { dishName: "Veg Biryani", spicy: true, price: 250, quantity: 1 },
  { dishName: "Chicken Kolhapuri", spicy: true, price: 350, quantity: 1 },
  { dishName: "Masala Dosa", spicy: false, price: 120, quantity: 2 },
  { dishName: "Veg Manchurian", spicy: false, price: 200, quantity: 1 },
  { dishName: "Chole Bhature", spicy: true, price: 150, quantity: 2 },
];
// Array of Objects
// orders.forEach((order, index) => {
//     return console.log(`dishname: ${order.dishName} && index: ${index}`)
// })

// orders.forEach((order) => console.log(typeof order.price))
// converting evey order.dishname to empty string

// orders.forEach((order, index) => {
//     return order.dishName = ""
// })

// Map Always Returns a New array 

// const dishAndPrice = orders.map(order => `dishName: ${order.dishName} && dishPrice: ${order.price}$`)
// console.log(dishAndPrice);

// Filter 
// const spicyOrders = orders
//                     .filter((order) => order.spicy)
//                     .forEach((order) => console.log(order.dishName))
                   
// const totalPrice = orders.reduce((total, order) => {
//     return total = total + order.price
// }, 0)

// console.log(totalPrice);
// basic reduce example done

const categoryOrder = orders.reduce((object, order) => {
    let category = order.spicy? "spicy": "regular"
    object[category].push(order.dishName)
    return object
}, {spicy:[], regular:[]})
console.log(categoryOrder);

/* ################################ DRY RUN ######################################
    1st Iteration object = {spicy: [], regular: ['butter Chicken']}
    2nd Iteration object = {spicy: ['veg biryani], regular; ['butter chicken']}
    and so on
    
*/