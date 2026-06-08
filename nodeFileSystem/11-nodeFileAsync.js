import { EventEmitter } from "node:events";
import * as fs from "node:fs"

// console.log("verifying async work");

fs.writeFile('data.txt', 'this is from whatever', (error) => {
    if(error) error.message
    
    console.log('file written successfully');
})

// classic callbak hell
// onto the promises
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if(err) err.message

   fs.writeFile('b.txt', data, (err) => {
        fs.appendFile('b.txt', '\nDone Appending', (err) => {
            fs.unlink('data.txt', () => {
                console.log('file a deleted');
            })
        })
   })
    
})

// console.log('technically i should be at 2nd position');



