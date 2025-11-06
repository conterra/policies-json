import { validatePolicy, ValidateResult } from "./validate";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("policies.schema.json", function () {
    it("should accept an empty file", function () {
        expect(validatePolicy(getJson("./json/empty.json")).valid).toBe(true);
    });
    it("should accept an empty policies array", function () {
        expect(validatePolicy(getJson("./json/empty-policies.json")).valid).toBe(true);
    });
    it("should accept a properties section", function () {
        expect(validatePolicy(getJson("./json/properties.json")).valid).toBe(true);
    });
    it("should not accept a properties section with number values", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/properties-invalid-number-values.json")))
        ).toMatchInlineSnapshot(`""numbersNotAllowed" property type must be string"`);
    });
    it("should not accept a properties section with keys starting with number values", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/properties-invalid-starting-number.json")))
        ).toMatchInlineSnapshot(
            `""properties" property must match pattern "^[A-Za-z][A-Za-z0-9_-]*$"\n"properties" property property name must be valid"`
        );
    });
    it("should not accept a properties section with keys using invalid keys", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/properties-invalid-character-in-key.json")))
        ).toMatchInlineSnapshot(
            `""properties" property must match pattern "^[A-Za-z][A-Za-z0-9_-]*$"\n"properties" property property name must be valid"`
        );
    });
    it("should not accept a missing restriction type", function () {
        expect(getErrors(validatePolicy(getJson("./json/restrictions-missing-type.json")))).toMatchInlineSnapshot(
            `""my-restriction" property tag "type" must be string"`
        );
    });
    it("should not accept a unknown restriction type", function () {
        expect(getErrors(validatePolicy(getJson("./json/restrictions-unknown-type.json")))).toMatchInlineSnapshot(
            `""type" property must be equal to one of the allowed values: "spatial", "field", "feature", "readonly""`
        );
    });
    it("should not accept a restriction with id starting with a number", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/restrictions-illegal-id-first-not-a-number.json")))
        ).toMatchInlineSnapshot(
            `""restrictions" property must match pattern "^[A-Za-z][A-Za-z0-9_-]*$"\n"restrictions" property property name must be valid"`
        );
    });
    it("should not accept a restriction with illegal character like '$'", function () {
        expect(getErrors(validatePolicy(getJson("./json/restrictions-illegal-character.json")))).toMatchInlineSnapshot(
            `""restrictions" property must match pattern "^[A-Za-z][A-Za-z0-9_-]*$"\n"restrictions" property property name must be valid"`
        );
    });
    it("should accept a spatial restriction", function () {
        expect(validatePolicy(getJson("./json/restrictions-spatial.json")).valid).toBe(true);
    });
    it("should not accept unsupported operation field values in spatial restrictions", function () {
        expect(getErrors(validatePolicy(getJson("./json/restrictions-spatial-within.json")))).toMatchInlineSnapshot(
            `""operation" property must be equal to one of the allowed values\n"operation" property must match pattern "^\\$\\{[A-Za-z][A-Za-z0-9_.-]*\\}$"\n"operation" property must match exactly one schema in oneOf"`
        );
    });
    it("should accept a spatial restriction without operation field", function () {
        expect(validatePolicy(getJson("./json/restrictions-spatial-operation-optional.json")).valid).toBe(true);
    });
    it("should accept a spatial restriction with a relative url", function () {
        expect(validatePolicy(getJson("./json/restrictions-spatial-relative-url.json")).valid).toBe(true);
    });
    it("should not accept a spatial restriction with unknown property", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/restrictions-spatial-unknown-property.json")))
        ).toMatchInlineSnapshot(`"Property "notknown" is not expected to be here"`);
    });
    it("should not accept a spatial restriction with missing required property", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/restrictions-spatial-missing-required.json")))
        ).toMatchInlineSnapshot(
            `""only-features-from-california" property must have required property "featurequery""`
        );
    });
    it("should accept a spatial restriction with 'imageoperation' property", function () {
        expect(validatePolicy(getJson("./json/restrictions-spatial-imageoperation.json")).valid).toBe(true);
    });
    it("should accept a field restriction", function () {
        expect(validatePolicy(getJson("./json/restrictions-field.json")).valid).toBe(true);
    });
    it("should accept a field restriction using 'allowedFields'", function () {
        expect(validatePolicy(getJson("./json/restrictions-field-allowed.json")).valid).toBe(true);
    });
    it("should not accept a field restriction that mixes both forms", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/restrictions-field-allowed-and-hidden.json")))
        ).toMatchInlineSnapshot(
            `"Property "allowedfields" is not expected to be here\nProperty "hiddenfields" is not expected to be here\n"hide-title" property must match exactly one schema in oneOf"`
        );
    });
    it("should not accept a field restriction with unknown property", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/restrictions-field-unknown-property.json")))
        ).toMatchInlineSnapshot(
            `"Property "notknown" is not expected to be here\n"hide-title" property must have required property "allowedfields"\n"hide-title" property must match exactly one schema in oneOf"`
        );
    });
    it("should not accept a field restriction with missing required property", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/restrictions-field-missing-required.json")))
        ).toMatchInlineSnapshot(
            ` ""hide-title" property must have required property "hiddenfields"\n"hide-title" property must have required property "allowedfields"\n"hide-title" property must match exactly one schema in oneOf"`
        );
    });
    it("should accept a feature restriction", function () {
        expect(validatePolicy(getJson("./json/restrictions-feature.json")).valid).toBe(true);
    });
    it("should not accept a feature restriction with unknown property", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/restrictions-feature-unknown-property.json")))
        ).toMatchInlineSnapshot(`"Property "notknown" is not expected to be here"`);
    });
    it("should not accept a feature restriction with missing required property", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/restrictions-feature-missing-required.json")))
        ).toMatchInlineSnapshot(`""only-features-from-germany" property must have required property "query""`);
    });
    it("should accept a readonly restriction", function () {
        expect(validatePolicy(getJson("./json/restrictions-readonly.json")).valid).toBe(true);
    });

    it("should not accept a readonly restriction with unknown property", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/restrictions-readonly-unknown-property.json")))
        ).toMatchInlineSnapshot(`"Property "notknown" is not expected to be here"`);
    });
    it("should accept a simple policy with layer and role", function () {
        expect(validatePolicy(getJson("./json/policies.json")).valid).toBe(true);
    });
    it("should accept a simple policy with layers '*' and role", function () {
        expect(validatePolicy(getJson("./json/policies-any.json")).valid).toBe(true);
    });
    it("should accept a simple policy with layer intervals and role", function () {
        expect(validatePolicy(getJson("./json/policies-intervals.json")).valid).toBe(true);
    });
    it("should not accept a policy with empty layer value", function () {
        expect(getErrors(validatePolicy(getJson("./json/policies-layers-no-empty-value.json")))).toMatchInlineSnapshot(
            `""0" property must not have fewer than 1 characters\n"0" property must match pattern "^\\$\\{[A-Za-z][A-Za-z0-9_.-]*\\}$"\n"0" property must match a schema in anyOf\n"0" property must be equal to one of the allowed values\n"0" property must match a schema in anyOf"`
        );
    });
    it("should not accept a policy with empty layer array", function () {
        expect(getErrors(validatePolicy(getJson("./json/policies-layers-no-empty-array.json")))).toMatchInlineSnapshot(
            `""0" property must not have fewer than 1 characters\n"0" property must match pattern "^\\$\\{[A-Za-z][A-Za-z0-9_.-]*\\}$"\n"0" property must match a schema in anyOf\n"0" property must be equal to one of the allowed values\n"0" property must match a schema in anyOf"`
        );
    });
    it("should not accept a policy with empty role value", function () {
        expect(getErrors(validatePolicy(getJson("./json/policies-roles-no-empty-value.json")))).toMatchInlineSnapshot(
            `""0" property must not have fewer than 1 characters\n"0" property must match pattern "^\\$\\{[A-Za-z][A-Za-z0-9_.-]*\\}$"\n"0" property must match a schema in anyOf\n"0" property must be equal to one of the allowed values\n"0" property must match a schema in anyOf"`
        );
    });
    it("should not accept a policy with empty role array", function () {
        expect(getErrors(validatePolicy(getJson("./json/policies-roles-no-empty-array.json")))).toMatchInlineSnapshot(
            `""roles" property must not have fewer than 1 items"`
        );
    });
    it("should not accept a policy with missing roles property", function () {
        expect(getErrors(validatePolicy(getJson("./json/policies-roles-required.json")))).toMatchInlineSnapshot(
            `""0" property must have required property "roles""`
        );
    });
    it("should not accept a policy with missing layers property", function () {
        expect(getErrors(validatePolicy(getJson("./json/policies-layers-required.json")))).toMatchInlineSnapshot(
            `""0" property must have required property "layers""`
        );
    });
    it("should accept a policy with empty restrictions array", function () {
        expect(validatePolicy(getJson("./json/policies-restrictions-can-be-empty-array.json")).valid).toBe(true);
    });
    it("should not accept a policy with empty restrictions value", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/policies-restrictions-no-empty-value.json")))
        ).toMatchInlineSnapshot(`""0" property must not have fewer than 1 characters"`);
    });
    it("should accept a policy using ${key} expressions", function () {
        expect(validatePolicy(getJson("./json/policies-property-replacement-allowed.json")).valid).toBe(true);
    });
    it("should accept a fallback policy", function () {
        expect(validatePolicy(getJson("./json/fallback-policy.json")).valid).toBe(true);
    });
    it("should not accept a fallback policy with roles key", function () {
        expect(getErrors(validatePolicy(getJson("./json/fallback-policy-with-roles.json")))).toMatchInlineSnapshot(
            `"Property "roles" is not expected to be here"`
        );
    });
    it("should accept fallback policies", function () {
        expect(validatePolicy(getJson("./json/fallback-policies.json")).valid).toBe(true);
    });
    it("should accept fallback policies and a single fallback policy", function () {
        expect(getErrors(validatePolicy(getJson("./json/fallback-policy-and-policies.json")))).toMatchInlineSnapshot(
            `"Object must not be valid"`
        );
    });
    it("should accept userinfoservice extension", function () {
        expect(validatePolicy(getJson("./json/extensions-userinfoservice.json")).valid).toBe(true);
    });
    it("should not accept userinfoservice extension with not allowed header name", function () {
        expect(
            getErrors(validatePolicy(getJson("./json/extensions-userinfoservice-wrong-headername.json")))
        ).toMatchInlineSnapshot(
            `""headers" property must match pattern "^[A-Za-z0-9_-]+$"\n"headers" property property name must be valid"`
        );
    });
});

function getJson(filename: string) {
    try {
        const path = resolve(__dirname, filename);
        const text = readFileSync(path, "utf-8");
        const data = JSON.parse(text);
        return data;
    } catch (e) {
        throw new Error(`Failed to read json from '${filename}': ${(e as any).message}`, { cause: e });
    }
}

function getErrors(result: ValidateResult): string | undefined {
    return result.valid ? "" : result.messages;
}
