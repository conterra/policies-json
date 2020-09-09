## field-restriction-type Type

`object` ([Details](policies-definitions-field-restriction-type.md))

# undefined Properties

| Property                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                |
| :---------------------------- | ------------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                 | Not specified | Required | cannot be null | [service policies](policies-definitions-field-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/field-restriction-type/properties/type")                 |
| [hiddenfields](#hiddenfields) | `array`       | Required | cannot be null | [service policies](policies-definitions-field-restriction-type-properties-hiddenfields.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/field-restriction-type/properties/hiddenfields") |

## type




`type`

-   is required
-   Type: unknown
-   cannot be null
-   defined in: [service policies](policies-definitions-field-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/field-restriction-type/properties/type")

### type Type

unknown

### type Constraints

**constant**: the value of this property must be equal to:

```json
"field"
```

## hiddenfields

List of field names as defined for a map service layer or table.


`hiddenfields`

-   is required
-   Type: `string[]`
-   cannot be null
-   defined in: [service policies](policies-definitions-field-restriction-type-properties-hiddenfields.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/field-restriction-type/properties/hiddenfields")

### hiddenfields Type

`string[]`
