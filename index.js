'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const schema = require('./src/schema');
const compress = require('./src/compress');

fs.readFile('test.yml', 'utf8', (err, data) => {
    if (err) throw err;

    schema.validate(data, (err, result) => {
        if (err) throw err;
        
        // yaml string
        compress('gzip').pack(data, (err, packed) => {
            if (err) throw err;

            console.log(packed);
            console.log('gzip/yaml length:', packed.length);
        });

        // yaml -> json string
        compress('gzip').pack(JSON.stringify(result), (err, packed) => {
            if (err) throw err;

            console.log(packed);
            console.log('gzip/json length:', packed.length);
        });

        // msgpack
        compress('msgpack').pack(result, (err, packed) => {
            if (err) throw err;

            console.log(packed);
            console.log('mspk/json length:', packed.length);
        });

        // lzma
        compress('lzma').pack(JSON.stringify(result), (err, packed) => {
            if (err) throw err;

            console.log(packed);
            console.log('lzma/json length:', packed.length);
        });
    });

});