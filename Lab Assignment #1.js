// Import the 'fs' (file system) module
const fs = require('fs');

// Path to the text file
const filePath = 'Dev.txt';

// Use the 'readFile' method for non-blocking operation
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    // Output the file content to the terminal
    console.log('File content:\n', data);
});