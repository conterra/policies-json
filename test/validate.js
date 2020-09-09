const Ajv = require('ajv');

const ajv = new Ajv();

const schema = require("../schema/policies.schema.json");
const validate = ajv.compile(schema);

module.exports = function (data) {
    return validate(data);
}
