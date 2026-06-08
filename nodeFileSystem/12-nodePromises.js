import console from "node:console";
import * as fs from "node:fs/promises"

async function main() {
   try {
     const data = await fs.readFile('b.txt', 'utf-8')
     console.log(data);
     
     await fs.copyFile('b.txt', 'c.txt')
     await fs.appendFile('c.txt', "\n This is from append async")
     await fs.unlink('b.txt')
   } catch (error) {
        console.error(error.message)
   }
}
main()

