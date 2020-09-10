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
        assert.isFalse(validate(require("./json/properties-invalid-number-values.json")));
    });
    it("should not accept a properties section with keys starting with number values", function () {
        assert.isFalse(validate(require("./json/properties-invalid-starting-number.json")));
    });
    it("should not accept a properties section with keys using invalid keys", function () {
        assert.isFalse(validate(require("./json/properties-invalid-character-in-key.json")));
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
    it("should accept a spatial restriction without operation field", function () {
        assert.isTrue(validate(require("./json/restrictions-spatial-operation-optional.json")));
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
    it("should not accept a policy with empty layer value", function () {
        assert.isFalse(validate(require("./json/policies-layers-no-empty-value.json")));
    });
    it("should not accept a policy with empty layer array", function () {
        assert.isFalse(validate(require("./json/policies-layers-no-empty-array.json")));
    });
    it("should not accept a policy with empty role value", function () {
        assert.isFalse(validate(require("./json/policies-roles-no-empty-value.json")));
    });
    it("should not accept a policy with empty role array", function () {
        assert.isFalse(validate(require("./json/policies-roles-no-empty-array.json")));
    });
    it("should not accept a policy with missing roles property", function () {
        assert.isFalse(validate(require("./json/policies-roles-required.json")));
    });
    it("should not accept a policy with missing layers property", function () {
        assert.isFalse(validate(require("./json/policies-layers-required.json")));
    });
    it("should accept a policy with empty restrictions array", function () {
        assert.isTrue(validate(require("./json/policies-restrictions-can-be-empty-array.json")));
    });
    it("should not accept a policy with empty restrictions value", function () {
        assert.isFalse(validate(require("./json/policies-restrictions-no-empty-value.json")));
    });
    it("should accept a policy using ${key} expressions", function () {
        assert.isTrue(validate(require("./json/policies-property-replacement-allowed.json")));
    });
});
