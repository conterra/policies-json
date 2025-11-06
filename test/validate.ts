import { Ajv, ValidateFunction } from "ajv";
import betterAjvErrors from "@stoplight/better-ajv-errors";
import policySchema from "../schema/policies.schema.json";

const ajv = new Ajv({
    // for vscode schema extensions
    strict: false,
    discriminator: true,
});

const validatePolicyImpl = ajv.compile(policySchema);

export interface OkResult {
    valid: true;
    messages?: never;
}

export interface ErrorResult {
    valid: false;
    messages: string;
}

export type ValidateResult = OkResult | ErrorResult;

export function validatePolicy(data: unknown): ValidateResult {
    if (validatePolicyImpl(data)) {
        return { valid: true };
    }
    return getErrorResult(policySchema, data, validatePolicyImpl);
}

function getErrorResult(schema: unknown, data: unknown, fn: ValidateFunction): ErrorResult {
    const output = betterAjvErrors(schema, fn.errors, {
        propertyPath: [],
        targetValue: data,
    });

    if (output.length === 0) {
        throw new Error("Unexpected schema errors: expected at least one error.");
    }

    const messages = output.map((o) => o.error).join("\n");
    return {
        valid: false,
        messages,
    };
}
