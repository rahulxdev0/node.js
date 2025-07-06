const fs = require('fs');

// Synchronous write
// fs.writeFileSync('test.txt', 'Hello, World!', );

// Asynchronous write
fs.writeFile('./test.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('Asynchronous write complete');
});

// Synchronous Read
const results = fs.readFileSync('./contact.txt', 'utf-8')
console.log('Synchronous read:', results);

// Asynchronous read
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Asynchronous read:', data);
});


// Synchronous read
const fileContent = fs.readFileSync('test.txt', 'utf8');
console.log('File content:', fileContent);

const value = fs.appendFileSync('test.txt', '\nAppended text.');
console.log('File after append:', value);

fs.mkdirSync('newDir', { recursive: true });
console.log('Directory created successfully.');

fs.readdir('newDir', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Files in newDir:', files);
});






// Definition: A module is typically a single JavaScript file that contains functions, objects, or variables. It can be a built-in module, a third-party module (installed via npm), or a custom module created by the developer.




 // In Node.js, fs stands for File System, a built-in module that provides methods for interacting with the file system on your computer. It allows you to perform operations like reading, writing, updating, deleting, and managing files and directories.