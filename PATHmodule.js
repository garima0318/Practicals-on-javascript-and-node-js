const path = require('path')
const a1=path.basename('C:\\temp\\myfile.html');
console.log(a1)//print the file name
const a2=path.dirname('C:\\temp\\myfile.html');
console.log(a2)
const a3=path.extname(__filename)//for printing the extension name
console.log(__filename,a3)//c:\Users\garim\Desktop\node js\PATHmodule.js -.js