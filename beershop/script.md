# Note from Marius Obert

1. Init the project

```bash
npx @sap/cds init --modules db,srv --insecure --mta --db-technology hana beershop
```

2. Init the project

```bash
npm install shx
npm install sqlite3 --save-dev
```

3. Add to `package.json`:

```json
"deploy:cds": "cds deploy",
"build:mta": "cds build/all && shx cp db/csv/",
"deploy:cf": "npm run build:mta && cf deploy"
```

```json
"db": {
    "kind":"sqlite",
    "module":["db","srv"],
    "credentials":{
        "database": "beershop.db"
    },
    "[production]":{
        "kind": "hana"
    }
}
```

4. Update HANA version db/src/.hdiconfig

`"plugin_version": "12.1.0"`

5. `db/data-model.cds`

```
namespace my.beershop

entity Beer {
    key ID: Integer;
    SORT : String;
    BREWERY : String;
}