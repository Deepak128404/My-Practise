// let and const have block level scope
// let home = "wow HoMe" // string
// let homeHasTv = true; //bool
// let homeTenentsBackgroundVerified = true;
// let hasAccess = false;
// let homeMemberCount = 8; //number
// let homeid = undefined; //undefined
// let homeLocation = null; // null intentionally empty
// console.debug()
// console.group()
// console.groupEnd()

// Performance test:
// Result: Ideally Same JS Parser Removes the '_' and after that it's treated as 100000 so no performance issue

// console.time('Without separator');
// for (let i = 0; i < 10000000; i++) {
//   let x = 100000 * 2;
// }
// console.timeEnd('Without separator');

// console.time('With separator');
// for (let i = 0; i < 10000000; i++) {
//   let x = 100_000 * 2;
// }
// // console.timeEnd('With separator');
// let id = null;
// console.log(typeof id); //typeof null returns object 

// let tenentsObject = {
//     tName: "xyz",
//     tId: "null",
//     tmembers: 13,
//     tMemberDetails: [{
//         name: "superman",
//         age: 13,
//     }, {
//         name: "batman",
//         age: 19
//     },{
//         name: "aquaman",
//         age: 28
//     } ]
// }

// console.log(tenentsObject.tMemberDetails[0].name);
// console.log(Array.isArray(tenentsObject.tMemberDetails)); //check for is array

// let copyOfTenentsObject = { ...tenentsObject} // Shallow Copy

// copyOfTenentsObject.tMemberDetails[0].name = "Hero_Name"
// console.log(tenentsObject);

// let copyOfTenentsObjectStc = structuredClone(tenentsObject) // Deep Copy
// copyOfTenentsObjectStc.tMemberDetails[0].name = "Hero_Name"
// console.log(tenentsObject); // No Error Silent Fail
// let id = "101"
// let numId = parseInt(id)
// console.log(typeof numId);

let home = "wow HoMe" // string
// console.log(home.includes("HoMe"));
home[4] = "h" // strings are immutable anothe silent fail
console.log(home);
console.log(home.length);
let cloneHome = home.split()
console.log(cloneHome);
console.log(typeof cloneHome[0]);
