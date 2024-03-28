const fs = require('fs');

function logToFile(data) {
    const jsonData = JSON.stringify(data, null, 2);
    const timestamp = new Date().toISOString();
    const logMessage = `"${timestamp}" - ${jsonData}\n`;

    fs.appendFile('logs.json', logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
}

module.exports = {
    logToFile
};