const path = require('path');
const fs = require('fs');

const patnText = path.join(__dirname, 'text.txt');
const readFile = fs.createReadStream(patnText, 'utf8');
readFile.on('data', data => console.log(data)); 

