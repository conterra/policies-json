## service policies Type

`object` ([service policies](policies.md))

# service policies Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                          |
| :---------------------------- | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#$schema)           | `string` | Optional | cannot be null | [service policies](policies-properties-schema.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/$schema")            |
| [policies](#policies)         | `array`  | Optional | cannot be null | [service policies](policies-properties-policies.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/policies")         |
| [properties](#properties)     | `object` | Optional | cannot be null | [service policies](policies-properties-properties.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/properties")     |
| [restrictions](#restrictions) | `object` | Optional | cannot be null | [service policies](policies-properties-restrictions.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/restrictions") |

## $schema




`$schema`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [service policies](policies-properties-schema.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/$schema")

### $schema Type

`string`

## policies




`policies`

-   is optional
-   Type: `object[]` ([policy](policies-properties-policies-policy.md))
-   cannot be null
-   defined in: [service policies](policies-properties-policies.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/policies")

### policies Type

`object[]` ([policy](policies-properties-policies-policy.md))

## properties

Enumeration of properties. Can by referenced as '${property_name}' in other values.


`properties`

-   is optional
-   Type: `object` ([properties](policies-properties-properties.md))
-   cannot be null
-   defined in: [service policies](policies-properties-properties.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/properties")

### properties Type

`object` ([properties](policies-properties-properties.md))

### properties Examples

```json
{
  "propName": "propValue"
}
```

## restrictions

Enumeration of restrictions by name. Can be referenced by policies.


`restrictions`

-   is optional
-   Type: `object` ([restrictions](policies-properties-restrictions.md))
-   cannot be null
-   defined in: [service policies](policies-properties-restrictions.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/restrictions")

### restrictions Type

`object` ([restrictions](policies-properties-restrictions.md))

### restrictions Examples

```json
{}
```

```json
{
  "field_restriction_id": {
    "type": "field",
    "hiddenfields": [
      "someField",
      "someOtherField"
    ]
  },
  "spatial_restriction_id": {
    "type": "spatial",
    "featuretypeurl": "https://myserver:6443/arcgis/rest/services/folder1/service1/FeatureServer/0",
    "featurequery": "state = 'California'",
    "operation": "intersect"
  },
  "feature_restriction_id": {
    "type": "feature",
    "query": "country = 'Germany'"
  }
}
```

# service policies Definitions

## Definitions group policy-layers-type

Reference this group by using

```json
{"$ref":"https://raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policy-layers-type"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group policy-roles-type

Reference this group by using

```json
{"$ref":"https://raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policy-roles-type"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group policy-restrictions-type

Reference this group by using

```json
{"$ref":"https://raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policy-restrictions-type"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group policies-item-type

Reference this group by using

```json
{"$ref":"https://raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type"}
```

| Property                      | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                     |
| :---------------------------- | ------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [layers](#layers)             | `array` | Required | cannot be null | [service policies](policies-definitions-policy-properties-layers-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/layers")                |
| [roles](#roles)               | `array` | Required | cannot be null | [service policies](policies-definitions-policy-properties-roles-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/roles")                  |
| [restrictions](#restrictions) | `array` | Optional | cannot be null | [service policies](policies-definitions-policy-properties-restrictions-id-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/restrictions") |

### layers

List of layer ID to grant access to as defined by a map service.


`layers`

-   is required
-   Type: `string[]` ([layer id](policies-definitions-layers-array-layer-id.md))
-   cannot be null
-   defined in: [service policies](policies-definitions-policy-properties-layers-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/layers")

#### layers Type

`string[]` ([layer id](policies-definitions-layers-array-layer-id.md))

#### layers Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

#### layers Examples

```json
[
  "0",
  "1"
]
```

### roles

List of role IDs that should be able to access the defined layers.


`roles`

-   is required
-   Type: an array of merged types ([Details](policies-definitions-roles-array-items.md))
-   cannot be null
-   defined in: [service policies](policies-definitions-policy-properties-roles-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/roles")

#### roles Type

an array of merged types ([Details](policies-definitions-roles-array-items.md))

#### roles Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

#### roles Examples

```json
[
  "my-role"
]
```

### restrictions

List of restrictions IDs defined in the top-level 'restrictions' array of this file.


`restrictions`

-   is optional
-   Type: `string[]` ([restriction id](policies-definitions-restrictions-id-array-restriction-id.md))
-   cannot be null
-   defined in: [service policies](policies-definitions-policy-properties-restrictions-id-array.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/policies-item-type/properties/restrictions")

#### restrictions Type

`string[]` ([restriction id](policies-definitions-restrictions-id-array-restriction-id.md))

#### restrictions Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

#### restrictions Examples

```json
[
  ""
]
```

## Definitions group restrictions-property-type

Reference this group by using

```json
{"$ref":"https://raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/restrictions-property-type"}
```

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                             |
| :------------ | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Required | cannot be null | [service policies](policies-definitions-abstract-restriction-properties-restrictiontype.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/restrictions-property-type/properties/type") |

### type




`type`

-   is required
-   Type: `string` ([restriction.type](policies-definitions-abstract-restriction-properties-restrictiontype.md))
-   cannot be null
-   defined in: [service policies](policies-definitions-abstract-restriction-properties-restrictiontype.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/restrictions-property-type/properties/type")

#### type Type

`string` ([restriction.type](policies-definitions-abstract-restriction-properties-restrictiontype.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | ----------- |
| `"spatial"` |             |
| `"field"`   |             |
| `"feature"` |             |

## Definitions group field-restriction-type

Reference this group by using

```json
{"$ref":"https://raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/field-restriction-type"}
```

| Property                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                |
| :---------------------------- | ------------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                 | Not specified | Required | cannot be null | [service policies](policies-definitions-field-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/field-restriction-type/properties/type")                 |
| [hiddenfields](#hiddenfields) | `array`       | Required | cannot be null | [service policies](policies-definitions-field-restriction-type-properties-hiddenfields.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/field-restriction-type/properties/hiddenfields") |

### type




`type`

-   is required
-   Type: unknown
-   cannot be null
-   defined in: [service policies](policies-definitions-field-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/field-restriction-type/properties/type")

#### type Type

unknown

#### type Constraints

**constant**: the value of this property must be equal to:

```json
"field"
```

### hiddenfields

List of field names as defined for a map service layer or table.


`hiddenfields`

-   is required
-   Type: `string[]`
-   cannot be null
-   defined in: [service policies](policies-definitions-field-restriction-type-properties-hiddenfields.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/field-restriction-type/properties/hiddenfields")

#### hiddenfields Type

`string[]`

## Definitions group spatial-restriction-type

Reference this group by using

```json
{"$ref":"https://raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type"}
```

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                        |
| :-------------------------------- | ------------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                     | Not specified | Required | cannot be null | [service policies](policies-definitions-spatial-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/type")                     |
| [featuretypeurl](#featuretypeurl) | `string`      | Required | cannot be null | [service policies](policies-definitions-spatial-restriction-type-properties-featuretypeurl.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/featuretypeurl") |
| [featurequery](#featurequery)     | `string`      | Required | cannot be null | [service policies](policies-definitions-spatial-restriction-type-properties-featurequery.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/featurequery")     |
| [operation](#operation)           | `string`      | Required | cannot be null | [service policies](policies-definitions-spatial-restriction-type-properties-operation.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/operation")           |

### type




`type`

-   is required
-   Type: unknown
-   cannot be null
-   defined in: [service policies](policies-definitions-spatial-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/type")

#### type Type

unknown

#### type Constraints

**constant**: the value of this property must be equal to:

```json
"spatial"
```

### featuretypeurl

For 'spatial' type. URL that points to feature service layer.


`featuretypeurl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [service policies](policies-definitions-spatial-restriction-type-properties-featuretypeurl.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/featuretypeurl")

#### featuretypeurl Type

`string`

#### featuretypeurl Examples

```json
"https://myserver:6443/arcgis/rest/services/folder1/service1/FeatureServer/0"
```

### featurequery

For 'spatial' type. A definition query that selects the features of a feature layer.


`featurequery`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [service policies](policies-definitions-spatial-restriction-type-properties-featurequery.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/featurequery")

#### featurequery Type

`string`

#### featurequery Examples

```json
"state = 'California'"
```

### operation

For 'spatial' type. One of 'intersect' or 'within'


`operation`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [service policies](policies-definitions-spatial-restriction-type-properties-operation.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/operation")

#### operation Type

`string`

#### operation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | ----------- |
| `"intersect"` |             |
| `"within"`    |             |

## Definitions group feature-restriction-type

Reference this group by using

```json
{"$ref":"https://raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/feature-restriction-type"}
```

| Property        | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                      |
| :-------------- | ------------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | Not specified | Required | cannot be null | [service policies](policies-definitions-feature-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/feature-restriction-type/properties/type")   |
| [query](#query) | `string`      | Required | cannot be null | [service policies](policies-definitions-feature-restriction-type-properties-query.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/feature-restriction-type/properties/query") |

### type




`type`

-   is required
-   Type: unknown
-   cannot be null
-   defined in: [service policies](policies-definitions-feature-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/feature-restriction-type/properties/type")

#### type Type

unknown

#### type Constraints

**constant**: the value of this property must be equal to:

```json
"feature"
```

### query

For 'feature' type. A definition expression (WHERE clause).


`query`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [service policies](policies-definitions-feature-restriction-type-properties-query.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/feature-restriction-type/properties/query")

#### query Type

`string`

#### query Examples

```json
"country = 'Germany'"
```
