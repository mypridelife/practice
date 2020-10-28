const fs = require('fs')

const buffer = fs.readFileSync('../../assets/uploads/1_1573182777277.txt')
const text = String(buffer)
console.log(text)
