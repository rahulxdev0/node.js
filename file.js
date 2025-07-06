const fs = require('fs');

const data = fs.writeFileSync('test.txt', 'Hello, World!');


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











 // In Node.js, fs stands for File System, a built-in module that provides methods for interacting with the file system on your computer. It allows you to perform operations like reading, writing, updating, deleting, and managing files and directories.