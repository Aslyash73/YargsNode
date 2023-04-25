const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })

                .check((argv, options)=> {
                    if(isNaN(argv.b)){
                        throw 'mi amigo Efrain y mi amigo Esteban <(°-°)> (=^.^=)'
                    }
                    return true;
                })
                .argv;

                module.exports = argv;