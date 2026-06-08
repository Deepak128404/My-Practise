import * as fs from "node:fs"

// console.log('verify line by line execution')

// fs.writeFileSync('index.js', 'console.log("this is from write file");')
// const data = fs.readFileSync('index.js', 'utf-8') 
// console.log(data);

// fs.unlinkSync('index.js')

// console.log('this work is sync main thread block')
// const updatedData = "console.log('this is from updatefunction');"

// fs.writeFileSync('index.js', updatedData)
// fs.appendFileSync('index.js', '\n//this is from the append function')

// const dataUpdated = fs.readFileSync('index.js', 'utf-8') 

// console.log(dataUpdated);

// delete
// fs.unlink('index.js', (err) => {
//     console.log(`error happened ${err.message}`)

// })

// fs.mkdirSync('folder1/folder2/', {recursive: true})

// fs.copyFileSync('index.js', 'index.ts')

// fs.unlinkSync('index.js')

// fs.mkdirSync('nodeFileSystem/')

// fs.copyFileSync('10-nodeFileSync.js', 'nodeFileSystem/10-nodeFileSync.js')

// fs.unlinkSync('10-nodeFileSync.js')


// fs.writeFileSync('11-nodeFileAsync.js', '//')
