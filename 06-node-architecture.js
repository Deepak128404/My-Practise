// const fs = require('node:fs')
// setTimeout(() => console.log('timer'), 0);

// setImmediate(() => console.log('immediate'));


// No I/O, no callbacks// it's difficult to predict the outcome of the above code, that's why it depends

// PREDICTABLE: setTimeout always first
// Output: ALWAYS setTimeout → setImmediate
// PREDICTABLE: Inside I/O callback
// fs.readFile('file.txt', () => {
    
    //   setTimeout(() => console.log('timer'), 0);
    //   setImmediate(() => console.log('immediate'));
    // });
    
    // setTimeout(() => {
    // setImmediate(() => console.log('immediate'));
    // }, 0);

    //From Stack OverFlow


// setTimeout(function() {
//   setTimeout(function() {
//     console.log('setTimeout')
//   }, 0);
//   setImmediate(function() {
//     console.log('setImmediate')
//   });
// });


// console.log('1. Sync');

// process.nextTick(() => {
//   console.log('2. nextTick');
// });

// Promise.resolve().then(() => {
//   console.log('3. Promise');
// });

// setTimeout(() => {
//   console.log('4. setTimeout');
// }, 0);

// console.log('5. Sync');


// setTimeout(() => {
//   console.log('1. setTimeout');
//   process.nextTick(() => console.log('2. nextTick in setTimeout'));
//   Promise.resolve().then(() => console.log('3. Promise in setTimeout'));
// }, 0);


// Starvation Process Never Reaches EventLoop

// function recursive() {
//   process.nextTick(recursive);
// }

// recursive();

// setTimeout(() => {
//   console.log('This never runs!');
// }, 0);

//  Starvation Process Never Reaches EventLoop
function recursive() {
  Promise.resolve().then(recursive);
}

recursive();

// setTimeout(() => {
//   console.log('This never runs!');
// }, 0);



process.on('SIGINT', () => {
    console.log('Received SIGINT. Terminating gracefully...');
    // Add code here to perform cleanup tasks
    process.exit(0);
});
 