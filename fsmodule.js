const fs=require('fs')
const a=fs.readFileSync('file.txt')
console.log(a.toString())//for reading the content
console.log("Finished reading file")