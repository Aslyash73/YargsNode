
const { crearArchivo } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');
           
console.clear();
console.log('base: yargs', argv.b);

crearArchivo(argv.b, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.log(err));












// const [, , arg3 = 'base=5']= process.argv;
// const [, base = 5]= arg3.split('=');
// console.log(base);

// const base= 6;


// crearArchivo(base)
// .then(nombreArchivo  => console.log(nombreArchivo, 'creado'))
// .catch(err => console.log(err));



