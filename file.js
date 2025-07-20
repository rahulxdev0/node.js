const fs = require('fs');
const os = require('os');

console.log(os.cpus().length)

// Synchronous write
fs.writeFileSync('contact.txt', 'this is from sync write', );

// Asynchronous write
fs.writeFile('./contact.txt', 'this is from async write', (err) => {
    if (err) {
        console.error('Error writing file:', err);  
        return;
    }else{
        console.log('Asynchronous write complete');
    }
}); // --> It only takes an error object

// Synchronous Read
const results = fs.readFileSync('./contact.txt', 'utf-8')
console.log('Synchronous read:', results);

// Asynchronous read
fs.readFile('./contact.txt', 'utf8', (err, results) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Asynchronous read:', results);
});  // --> this function didn't return anything, it just prints the content of the file


// Synchronous append
fs.appendFileSync('./test.txt', `Appended text.\n`);

// Asynchronous append
// fs.appendFile('./test.txt', 'Appended text asynchronously.\n', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//         return;
//     }
//     console.log('Asynchronous append complete');
// });


fs.mkdirSync('newDir', { recursive: true });
console.log('Directory created successfully.');

fs.readdir('newDir', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Files in newDir:', files);
});


// copyFile
// fs.copyFileSync('contact.txt', './copy.txt');

// deleteFile
// fs.unlinkSync('copy.txt');


// stats
const stats = fs.statSync('./contact.txt');
console.log('File stats:', stats);





// Definition: A module is typically a single JavaScript file that contains functions, objects, or variables. It can be a built-in module, a third-party module (installed via npm), or a custom module created by the developer.


 // In Node.js, fs stands for File System, a built-in module that provides methods for interacting with the file system on your computer. It allows you to perform operations like reading, writing, updating, deleting, and managing files and directories.