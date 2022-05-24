const fs = require('fs');
const path = require('path');
const process = require('process');
const {stdin, stdout, stderr} = process;

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const pathFile = path.resolve(__dirname, 'text.txt');
const createFile = fs.createWriteStream(pathFile);
const readFile = fs.createReadStream(pathFile, 'utf-8');

const rl = readline.createInterface({ input, output });

stdout.write('Введите текст\n');

rl.on('line', (data) => {
  let dataString = data.toString();
  if(dataString.includes('exit')){
    stdout.write('Всего хорошего\n');
    rl.close();
 } else {
   createFile.write(dataString);
 }
});

rl.on('SIGINT', () => {
  stdout.write('Всего хорошего\n');
  rl.close();
});

