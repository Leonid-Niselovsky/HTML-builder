const fs = require('fs');
const path = require('path');

let pathToFile = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFile, { withFileTypes: true }, (err, data) => {
    if (err) throw err;
    else {
        data.forEach((some) => {
            if (some.isFile()) {
              pathToFile = path.join(__dirname, 'secret-folder', some.name);
              fs.stat(pathToFile, (first, second) => {
                if (first) throw first;
                const size = (second.size / 1024).toFixed(3) + 'kb';
                console.log(`${some.name.slice(0, some.name.lastIndexOf(path.extname(some.name)))} - ${path.extname(some.name).slice(1)} - ${size}`);
                })
            }
        })
    }
})
  
