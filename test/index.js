const { assert } = require("chai");
const validate = require("./validate");

describe("policies.schema.json", function () {
    it("should accept an empty object", function () {
        assert.isTrue(validate(require("./json/empty.json")));
    });
    it("should accept an empty policies array", function () {
        assert.isTrue(validate(require("./json/empty-policies.json")));
    });
    it("should accept a properties section", function () {
        assert.isTrue(validate(require("./json/properties.json")));
    });
    it("should not accept a properties section with number values", function () {
        assert.isFalse(validate(require("./json/properties-invalid-numbers.json")));
    });
});
