'use strict';

function Compress(compressionType){
    return require('./compression/' + compressionType);
}

module.exports = Compress;
