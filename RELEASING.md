# Releasing Steps

1. Merge changes of `dev` branch into `master`
2. Update README.md `$schema` sample URL to `https://raw.githubusercontent.com/conterra/policies-json/<version>/schema/policies.schema.json`
3. Update `./schema/policies.schema.json` `$id` to to `https://raw.githubusercontent.com/conterra/policies-json/<version>/schema/policies.schema.json`
4. Create Tag <version> on `master`
