const {mostrarImc} = require('./helpers/calculo.js');
const {argv} = require('./config/yargs.js');
const colors = require('colors');

let peso = argv.p;
let altura = argv.e;

mostrarImc(peso, altura)
    .then( (msg) => console.log(colors.blue(msg)) )
    .catch( (err) => console.log( `ERROR: ${colors.red(err)}` ) );