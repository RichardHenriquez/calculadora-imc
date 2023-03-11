const argv = require('yargs')
            .option('p', {
                alias: 'peso',
                type: 'number',
                demandOption: true
            })
            .option('e', {
                alias: 'estatura',
                type: 'number',
                demandOption:true
            })


module.exports = argv;