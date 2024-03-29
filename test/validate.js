const Ajv = require('ajv');
const schema = require("../schema/policies.schema.json");
const ajv = new Ajv({
    // for vscode schema extensions
    strict: false
});
const validate = ajv.compile(schema);

module.exports = function (data) {
    return validate(data);
}
