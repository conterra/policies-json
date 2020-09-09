## items Type

`object` ([policy](policies-definitions-policy.md))

## items Examples

```json
{}
```

```json
{
  "layers": [
    ""
  ],
  "roles": [
    ""
  ]
}
```

# policy Properties

| Property                      | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :---------------------------- | ------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [layers](#layers)             | `array` | Required | cannot be null | [service policies](policies-definitions-layers-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/layers")                |
| [roles](#roles)               | `array` | Required | cannot be null | [service policies](policies-definitions-roles-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/roles")                  |
| [restrictions](#restrictions) | `array` | Optional | cannot be null | [service policies](policies-definitions-restrictions-id-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/restrictions") |

## layers

List of layer ID to grant access to as defined by a map service.


`layers`

-   is required
-   Type: `string[]` ([layer id](policies-definitions-layers-array-layer-id.md))
-   cannot be null
-   defined in: [service policies](policies-definitions-layers-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/layers")

### layers Type

`string[]` ([layer id](policies-definitions-layers-array-layer-id.md))

### layers Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### layers Examples

```json
[
  "0",
  "1"
]
```

## roles

List of role IDs that should be able to access the defined layers.


`roles`

-   is required
-   Type: an array of merged types ([Details](policies-definitions-roles-array-items.md))
-   cannot be null
-   defined in: [service policies](policies-definitions-roles-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/roles")

### roles Type

an array of merged types ([Details](policies-definitions-roles-array-items.md))

### roles Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### roles Examples

```json
[
  "my-role"
]
```

## restrictions

List of restrictions IDs defined in the top-level 'restrictions' array of this file.


`restrictions`

-   is optional
-   Type: `string[]` ([restriction id](policies-definitions-restrictions-id-array-restriction-id.md))
-   cannot be null
-   defined in: [service policies](policies-definitions-restrictions-id-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/restrictions")

### restrictions Type

`string[]` ([restriction id](policies-definitions-restrictions-id-array-restriction-id.md))

### restrictions Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### restrictions Examples

```json
[
  ""
]
```
