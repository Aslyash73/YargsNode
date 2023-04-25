
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })

                .check((argv, options)=> {
                    if(isNaN(argv.b)){
                        throw 'mi amigo Efrain y mi amigo Esteban <(°-°)> (=^.^=)'
                    }
                    return true;
                })
                .argv;

                
console.clear();
console.log(argv);
console.log('base: yargs', argv.b);

crearArchivo(argv.b, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));












// const [, , arg3 = 'base=5']= process.argv;
// const [, base = 5]= arg3.split('=');
// console.log(base);

// const base= 6;


// crearArchivo(base)
// .then(nombreArchivo  => console.log(nombreArchivo, 'creado'))
// .catch(err => console.log(err));



