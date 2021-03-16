# Releasing Steps

. Select target `<version>`.
. Update version in `package.json`
. Update `README.md` `$schema` URL to `https://raw.githubusercontent.com/conterra/policies-json/<version>/schema/policies.schema.json`
. Update `./schema/policies.schema.json` `$id` to to `https://raw.githubusercontent.com/conterra/policies-json/<version>/schema/policies.schema.json`
. Merge changes of `dev` branch into `master`
. Create Tag `<version>` on `master`
