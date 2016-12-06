'use strict';

const Joi = require('joi');
const yaml = require('js-yaml');

const allowedCharacters = /\w/i;

const sectionSchema = Joi.object().keys({
    name: Joi.string().regex(allowedCharacters).min(3).max(30).required(),
    humans: Joi.array().items(Joi.string().regex(allowedCharacters)),
    sections: Joi.array().items(Joi.lazy(() => sectionSchema))
});

const docSchema = Joi.object().keys({
    version: Joi.string().regex(allowedCharacters).min(2).max(2).required(),
    sections: Joi.array().items(sectionSchema)
});

module.exports.validate = function validate(doc, callback){
    const jsdoc = yaml.safeLoad(doc);
    return Joi.validate(jsdoc, docSchema, callback);
};