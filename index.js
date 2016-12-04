

// test yaml
// gzip
// encode base64 url compact

const fs = require('fs');
var zlib = require('zlib');

fs.readFile('test.yml', 'utf8', (err, data) => {
    if (err) throw err;

    console.log('raw');
    //console.log(data);

    zlib.gzip(data, function (error, result) {
        if (error) throw error;

        console.log('compressed');
        console.log(result);

        var b64 = result.toString('base64');
        console.log('base64');
        console.log(b64);

        console.log('length', b64.length);

        // unpack
        var buffer = new Buffer(b64, 'base64');
        zlib.unzip(buffer, function(err, result){
            if (error) throw error;

            console.log('unpacked');
            //console.log(result.toString('ascii'));
        });


    });

});
