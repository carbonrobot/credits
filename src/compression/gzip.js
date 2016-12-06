const zlib = require('zlib');
const urlsafe = require('urlsafe-base64');

function pack(data, callback) {
    zlib.gzip(data, function (error, result) {
        if (error) callback(error);
        else callback(null, urlsafe.encode(result));
        //else callback(null, result.toString('base64'));
    });
}

function unpack(data, callback) {
    //const buffer = new Buffer(data, 'base64');
    const buffer = urlsafe.decode(data);
    zlib.unzip(buffer, function (err, result) {
        if (error) callback(error);
        else callback(null, result.toString('ascii'));
    });
}

module.exports = {
    pack: pack,
    unpack: unpack
};