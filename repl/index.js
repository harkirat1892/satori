var satori,
    readline;

satori = require('../index');
readline = require('readline');

(function() {
    var rl;

    rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('\u03BB> ');
    rl.prompt();

    rl.on('line', function(line) {
        if(line === ':quit') { rl.close(); }

        console.log('=> ' + satori.read(line));
        rl.prompt();
    }).on('close', function() { process.exit(0); });
})();
