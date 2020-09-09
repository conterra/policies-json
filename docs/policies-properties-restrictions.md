## restrictions Type

`object` ([restrictions](policies-properties-restrictions.md))

## restrictions Examples

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

# restrictions Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                                                                                                        |
| :-------------------- | ------ | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [service policies](policies-definitions-abstract-restriction.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/restrictions/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:




-   is optional
-   Type: `object` ([abstract restriction](policies-definitions-abstract-restriction.md))
-   cannot be null
-   defined in: [service policies](policies-definitions-abstract-restriction.md "https&#x3A;//raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json#/properties/restrictions/additionalProperties")

### additionalProperties Type

`object` ([abstract restriction](policies-definitions-abstract-restriction.md))

all of

-   [Untitled undefined type in service policies](policies-definitions-abstract-restriction-allof-0.md "check type definition")
-   [Untitled undefined type in service policies](policies-definitions-abstract-restriction-allof-1.md "check type definition")
-   [Untitled undefined type in service policies](policies-definitions-abstract-restriction-allof-2.md "check type definition")
