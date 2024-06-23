// barquerohr: this program reverts processedSource.xml to regular xml by replacing the placeholder symbols with tagsets. It runs a check after to see if output = input

const fs = require('fs');
const path = require('path');
const diff = require('diff');

const ANSI_COLOR_CODES = {
    'reset': '\x1b[0m',
    'red': '\x1b[31m',
    'green': '\x1b[32m'
};

function preprocessXML(text) {
    const processedText = text.replace(/<variable id='(\d+)'>/g, '@@variable_$1@@');
    return processedText;
}

function postprocessXML(translatedText) {
    return translatedText.replace(/@@variable_(\d+)@@/g, '<variable id=\'$1\'>');
}

function displayMessage(message, color) {
    console.log(`${ANSI_COLOR_CODES[color]}%s${ANSI_COLOR_CODES['reset']}`, message);
}

const inputFile = 'source.xml';
const outputProcessedFile = 'processedSource.xml';
const outputFinalFile = 'finalXML.xml';
const fileExtension = path.extname(inputFile).toLowerCase();

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Cannot read file: ${err.message}`);
        return;
    }

    console.log('\nFile read successfully.\n');

    let preprocessedData;

    if (fileExtension === '.xml') {
        preprocessedData = preprocessXML(data);
        //swap your translation result here
        const translatedData = preprocessedData;
        const finalData = postprocessXML(translatedData);

        console.log('\nFinal XML:');
        console.log(finalData);

        // writes the processed data to a new file
        fs.writeFile(outputProcessedFile, finalData, 'utf8', (writeErr) => {
            if (writeErr) {
                console.error(`Error writing processed data to file: ${writeErr.message}`);
                return;
            }

            console.log(`\nProcessed data written to ${outputProcessedFile}`);

            // writes the final data to a new file
            fs.writeFile(outputFinalFile, finalData, 'utf8', (finalWriteErr) => {
                if (finalWriteErr) {
                    console.error(`Error writing final data to file: ${finalWriteErr.message}`);
                    return;
                }

                console.log(`\nFinal XML written to ${outputFinalFile}`);

                // is final XML = source XML
                fs.readFile(inputFile, 'utf8', (sourceReadErr, sourceData) => {
                    if (sourceReadErr) {
                        console.error(`Cannot read file ${inputFile}: ${sourceReadErr.message}`);
                        return;
                    }

                    if (sourceData === finalData) {
                        displayMessage('Final XML is the same as the source XML.', 'green');
                    } else {
                        const differences = diff.diffChars(sourceData, finalData);
                        console.log('\nDifferences:');
                        differences.forEach(part => {
                            const color = part.added ? 'red' : part.removed ? 'green' : 'grey';
                            process.stdout.write(`${ANSI_COLOR_CODES[color]}${part.value}`);
                        });
                        console.log(ANSI_COLOR_CODES['reset']);
                        displayMessage('Final XML differs from the source XML.', 'red');
                    }
                });
            });
        });
    } else {
        console.error('Unsupported file format. Only .xml files are supported.');
        return;
    }

    console.log(`\nPreprocessed ${fileExtension.toUpperCase()}:`);
    console.log(preprocessedData);
});
