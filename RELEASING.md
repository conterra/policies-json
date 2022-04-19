# Releasing Steps

1. Select target `<version>`.
1. Update version in `package.json`
1. Update `README.md` `$schema` URL to `https://raw.githubusercontent.com/conterra/policies-json/<version>/schema/policies.schema.json`
1. Update `./schema/policies.schema.json` `$id` to to `https://raw.githubusercontent.com/conterra/policies-json/<version>/schema/policies.schema.json`
1. Merge changes of `dev` branch into `master`
1. Create Tag `<version>` on `master`
