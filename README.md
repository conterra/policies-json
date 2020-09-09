# Policies Schema

The policies schema defines the [JSON schema](https://json-schema.org/) used for service access policies in security.manager.

Referencing the [policies schema definition file](./schema/policies.schema.json) in policies JSON files serves two purposes:

1. **Validation** of policies JSON regarding
   * structure
   * types of values
   * allowed patterns for values
2. Provide **editing support**, eg. in Visual Studio Code, like
   * code suggest
   * type documentation
   * type examples

An instance of the schema may look like this:

```json
{
    "$schema": "https://raw.githubusercontent.com/conterra/policies-json/master/schema/policies.schema.json",
    "policies": [
        {
            "layers": ["0", "1", "2"],
            "roles": ["${guests}", "enhancedSecurity_authenticated"],
            "restrictions": ["area51"]
        }
    ],
    "properties": {
        "guests": "41477fa98f444444855e1e0b7b132b45"
    },
    "restrictions": {
        "area51": {
            "type": "spatial",
            "featuretypeurl": "https://gis.example.com:6443/arcgis/rest/services/RestricionAreas/FeatureServer/0",
            "featurequery": "area_name = '51'",
            "operation": "intersect"
        },
        "secret_data": {
            "type": "field",
            "hiddenfields": ["PLANET_OF_BIRTH", "IQ", "HUMAN_NAME"]
        }
    }
}
```

Please see the created schema documentation for more details [Documentation](./docs/policies.md).
