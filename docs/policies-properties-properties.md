## properties Type

`object` ([properties](policies-properties-properties.md))

## properties Examples

```json
{
  "propName": "propValue"
}
```

# properties Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                                                                                                                |
| :-------------------- | ------ | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Additional Properties | Merged | Optional | cannot be null | [service policies](policies-properties-properties-additionalproperties.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/properties/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:




-   is optional
-   Type: merged type ([Details](policies-properties-properties-additionalproperties.md))
-   cannot be null
-   defined in: [service policies](policies-properties-properties-additionalproperties.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/properties/additionalProperties")

### additionalProperties Type

merged type ([Details](policies-properties-properties-additionalproperties.md))

one (and only one) of

-   [Untitled string in service policies](policies-properties-properties-additionalproperties-oneof-0.md "check type definition")
