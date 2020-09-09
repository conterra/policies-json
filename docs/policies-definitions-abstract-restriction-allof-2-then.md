## then Type

`object` ([Details](policies-definitions-abstract-restriction-allof-2-then.md))

# undefined Properties

| Property        | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                      |
| :-------------- | ------------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | Not specified | Required | cannot be null | [service policies](policies-definitions-feature-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/feature-restriction-type/properties/type")   |
| [query](#query) | `string`      | Required | cannot be null | [service policies](policies-definitions-feature-restriction-type-properties-query.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/feature-restriction-type/properties/query") |

## type




`type`

-   is required
-   Type: unknown
-   cannot be null
-   defined in: [service policies](policies-definitions-feature-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/feature-restriction-type/properties/type")

### type Type

unknown

### type Constraints

**constant**: the value of this property must be equal to:

```json
"feature"
```

## query

For 'feature' type. A definition expression (WHERE clause).


`query`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [service policies](policies-definitions-feature-restriction-type-properties-query.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/feature-restriction-type/properties/query")

### query Type

`string`

### query Examples

```json
"country = 'Germany'"
```
