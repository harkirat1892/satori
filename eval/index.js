var satori,
    fs;

satori = require('../index');
fs = require('fs');

(function() {
    if(process.argv.length !== 4) {
        console.log('Please specify a file path for evaluation.');
        process.exit(0);
    }

    satori.read(fs.readFileSync(process.argv[3], 'utf8'));
    process.exit(0);
})();
