const fs = require('fs');

// Function to read a file asynchronously
function readFileAsync(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    });
}

// Function to aggregate data from multiple files asynchronously using callbacks
function aggregateData(files, callback) {
    let aggregatedData = '';

    let remainingFiles = files.length;

    files.forEach((file) => {
        readFileAsync(file, (err, data) => {
            if (err) {
                callback(err);
                return;
            }
            aggregatedData += data + '\n'; // Append newline after each file's data
            remainingFiles--;

            if (remainingFiles === 0) {
                callback(null, aggregatedData);
            }
        });
    });
}

// Usage
const files = ['file1.txt', 'file2.txt', 'file3.txt'];

aggregateData(files, (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Aggregated data: \n', data);
});
