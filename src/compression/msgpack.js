const msgpack = require('msgpack-lite');

function pack(data, callback) {
    callback(null, msgpack.encode(data).toString('base64'));
}

function unpack(data, callback) {
    const buffer = new Buffer(data, 'base64');
    callback(null, msgpack.decode(buffer));
}

module.exports = {
    pack: pack,
    unpack: unpack
};

// TODO: needs to be url safe 64