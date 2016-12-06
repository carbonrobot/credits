const lzma = require('lzma');
const urlsafe = require('urlsafe-base64');

function pack(data, callback) {
    const result = lzma.compress(data, 9);
    //callback(null, urlsafe.encode(result));
    callback(null, urlsafe.encode(Buffer.from(result)));
}

function unpack(data, callback) {
    // //const buffer = new Buffer(data, 'base64');
    // const buffer = urlsafe.decode(data);
    // zlib.unzip(buffer, function (err, result) {
    //     if (error) callback(error);
    //     else callback(null, result.toString('ascii'));
    // });
}

module.exports = {
    pack: pack,
    unpack: unpack
};

// TODO implement unpack