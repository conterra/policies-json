## additionalProperties Type

`object` ([abstract restriction](policies-definitions-abstract-restriction.md))

all of

-   [Untitled undefined type in service policies](policies-definitions-abstract-restriction-allof-0.md "check type definition")
-   [Untitled undefined type in service policies](policies-definitions-abstract-restriction-allof-1.md "check type definition")
-   [Untitled undefined type in service policies](policies-definitions-abstract-restriction-allof-2.md "check type definition")

# abstract restriction Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                             |
| :------------ | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Required | cannot be null | [service policies](policies-definitions-abstract-restriction-properties-restrictiontype.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/restrictions-property-type/properties/type") |

## type




`type`

-   is required
-   Type: `string` ([restriction.type](policies-definitions-abstract-restriction-properties-restrictiontype.md))
-   cannot be null
-   defined in: [service policies](policies-definitions-abstract-restriction-properties-restrictiontype.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/restrictions-property-type/properties/type")

### type Type

`string` ([restriction.type](policies-definitions-abstract-restriction-properties-restrictiontype.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | ----------- |
| `"spatial"` |             |
| `"field"`   |             |
| `"feature"` |             |
