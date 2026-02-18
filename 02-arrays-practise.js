// let superHeroes = ['batman', 'superman', 'spiderman', 2]
// console.log(superHeroes.pop())
// console.log(superHeroes);

// let superName = "Super"
// let arraySuperName = Array.from(superName)
// console.log(arraySuperName);
// arraySuperName[0] = arraySuperName[0].toLocaleLowerCase()
// console.log(arraySuperName);
// // superName = arraySuperName.toString()
// superName = arraySuperName.join('') //takes an array returns a string
// console.log(typeof superName);
// console.log(superName);

// stringSuperName[0] = 'd'
// New Array quirk

// const arr = Array(3) // creates 3 empty arrays
// console.log(arr.length);

// const arrOfThree = Array.of(3) // wraps 3 inside the array
// console.log(arrOfThree);

// let heroesObj = { name: "superman", comic: "dc"}
// console.log(heroesObj);
// let heroesArr = Array.from(heroesObj)
// console.log(Array.isArray(heroesArr));
// console.log(heroesArr);

// let arr1 = [undefined, undefined]
// console.log(arr1.map(() => 1))  // [1, 1]  ✅ properties exist

// let arr2 = Array(2)
// console.log(arr2.map(() => 1))  // [empty × 2]  ❌ no properties to iterate over!