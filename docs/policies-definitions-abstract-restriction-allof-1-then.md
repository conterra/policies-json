## then Type

`object` ([Details](policies-definitions-abstract-restriction-allof-1-then.md))

# undefined Properties

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                        |
| :-------------------------------- | ------------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                     | Not specified | Required | cannot be null | [service policies](policies-definitions-spatial-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/type")                     |
| [featuretypeurl](#featuretypeurl) | `string`      | Required | cannot be null | [service policies](policies-definitions-spatial-restriction-type-properties-featuretypeurl.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/featuretypeurl") |
| [featurequery](#featurequery)     | `string`      | Required | cannot be null | [service policies](policies-definitions-spatial-restriction-type-properties-featurequery.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/featurequery")     |
| [operation](#operation)           | `string`      | Required | cannot be null | [service policies](policies-definitions-spatial-restriction-type-properties-operation.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/operation")           |

## type




`type`

-   is required
-   Type: unknown
-   cannot be null
-   defined in: [service policies](policies-definitions-spatial-restriction-type-properties-type.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/type")

### type Type

unknown

### type Constraints

**constant**: the value of this property must be equal to:

```json
"spatial"
```

## featuretypeurl

For 'spatial' type. URL that points to feature service layer.


`featuretypeurl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [service policies](policies-definitions-spatial-restriction-type-properties-featuretypeurl.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/featuretypeurl")

### featuretypeurl Type

`string`

### featuretypeurl Examples

```json
"https://myserver:6443/arcgis/rest/services/folder1/service1/FeatureServer/0"
```

## featurequery

For 'spatial' type. A definition query that selects the features of a feature layer.


`featurequery`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [service policies](policies-definitions-spatial-restriction-type-properties-featurequery.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/featurequery")

### featurequery Type

`string`

### featurequery Examples

```json
"state = 'California'"
```

## operation

For 'spatial' type. One of 'intersect' or 'within'


`operation`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [service policies](policies-definitions-spatial-restriction-type-properties-operation.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/definitions/spatial-restriction-type/properties/operation")

### operation Type

`string`

### operation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | ----------- |
| `"intersect"` |             |
| `"within"`    |             |
