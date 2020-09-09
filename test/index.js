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
    it("should not accept a missing restriction type", function () {
        assert.isFalse(validate(require("./json/restrictions-missing-type.json")));
    });
    it("should not accept a custom restriction type", function () {
        assert.isFalse(validate(require("./json/restrictions-spatial-unknown-property.json")));
    });
    it("should not accept a restriction with id starting with a number", function () {
        assert.isFalse(validate(require("./json/restrictions-illegal-id-first-not-a-number.json")));
    });
    it("should not accept a restriction with illegal character like '$'", function () {
        assert.isFalse(validate(require("./json/restrictions-illegal-character.json")));
    });
    it("should accept a spatial restriction", function () {
        assert.isTrue(validate(require("./json/restrictions-spatial.json")));
    });
    it("should not accept a spatial restriction with unknown property", function () {
        assert.isFalse(validate(require("./json/restrictions-spatial-unknown-property.json")));
    });
    it("should not accept a spatial restriction with missing required property", function () {
        assert.isFalse(validate(require("./json/restrictions-spatial-missing-required.json")));
    });
    it("should accept a field restriction", function () {
        assert.isTrue(validate(require("./json/restrictions-field.json")));
    });
    it("should not accept a field restriction with unknown property", function () {
        assert.isFalse(validate(require("./json/restrictions-field-unknown-property.json")));
    });
    it("should not accept a field restriction with missing required property", function () {
        assert.isFalse(validate(require("./json/restrictions-field-missing-required.json")));
    });
    it("should accept a feature restriction", function () {
        assert.isTrue(validate(require("./json/restrictions-feature.json")));
    });
    it("should not accept a feature restriction with unknown property", function () {
        assert.isFalse(validate(require("./json/restrictions-feature-unknown-property.json")));
    });
    it("should not accept a feature restriction with missing required property", function () {
        assert.isFalse(validate(require("./json/restrictions-feature-missing-required.json")));
    });
    it("should accept a simple policy with layer and role", function () {
        assert.isTrue(validate(require("./json/policies.json")));
    });
});
