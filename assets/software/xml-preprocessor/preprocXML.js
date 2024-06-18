const fs = require('fs');
const path = require('path');

const sourceFile = 'source.xml';
const outputFile = 'processedSource.xml';

function preprocessXML(content) {
    return content.replace(/<variable id='([^']+)'>/g, '@@variable id=\'$1\'@@');
}

function showError(message, isRed = true) {
    const color = isRed ? '\x1b[31m' : '';
    const resetColor = '\x1b[0m';
    console.error(`${color}${message}${resetColor}`);
}

const fileExtension = path.extname(sourceFile).toLowerCase();

if (!fs.existsSync(sourceFile) || fileExtension !== '.xml') {
    showError(`Error: Source file must exist and have a .xml extension.`, true);
    process.exit(1);
}

try {
    const data = fs.readFileSync(sourceFile, 'utf8');
    const modifiedContent = preprocessXML(data);
    fs.writeFileSync(outputFile, modifiedContent, 'utf8');
    console.log(`Successfully preprocessed and saved to ${outputFile}`);
} catch (error) {
    showError(`Error: ${error.message}`);
    process.exit(1);
}
