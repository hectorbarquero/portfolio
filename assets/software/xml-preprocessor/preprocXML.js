/* barquerohr: this program converts source.xml to more readable text, which is necessary for some docs as code tools like ssg's, where the tagsets would be interpreted and throw errors. modify the placeholder symbol to suit your needs. you can manipulate these more outside of this program, but need to return them to run postprocXML.js which is the sister program, and reverts the processed to source.xml
*/

const fs = require('fs');
const path = require('path');

const sourceFile = 'source.xml';
const outputFile = 'processedSource.xml';

function preprocessXML(content) {
    // find <?? id> in source.xml
    const openingTagRegex = /<(\w+)[^>]*\bid=['"]([^'"]+)['"][^>]*>/g;
    const closingTagRegex = /<\/(\w+)>/g;

    // replace with @@ so writer can manipulate it with ctrl+f or regex. Use postprocXML to return to normal xml
    content = content.replace(openingTagRegex, '@@$1 id=\'$2\'@@');
    content = content.replace(closingTagRegex, '@@/$1@@');

    return content;
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
