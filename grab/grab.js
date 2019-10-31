const
    axios = require('axios'),
    fs = require('fs'),
    json2csv = require('json2csv').parse,
    buildURL = (entity, token) =>
        'https://services.odata.org/V3/Northwind/Northwind.svc/ENTITY?$format=json&$skiptoken=TOKEN'
            .replace(/ENTITY/, entity)
            .replace(/TOKEN/, token * 20),

    range = x => [...Array(x).keys()],
    entities = {
        Products: {
            tokens: 4,
            fields: [
                { label:"ID", value:"ProductID"},
                { label:"name", value:"ProductName"},
                { label:"supplier_ID", value:"SupplierID"},
                { label:"category_ID", value:"CategoryID"},
                { label:"unitquantity", value:"QuantityPerUnit"},
                { label:"unitprice", value:"UnitPrice"},
                { label:"unitsinstock", value:"UnitsInStock"},
                { label:"unitsonorder", value:"UnitsOnOrder"},
                { label:"reorderlevel", value:"ReorderLevel"},
                { label:"discontinued", value:"Discontinued"},
            ]
        },
        Suppliers: {
            tokens: 1,
            fields: [
                { label: "ID", value: "SupplierID" },
                { label: "name", value: "CompanyName" },
                { label: "country", value: "Country" },
            ]
        },
        Categories: {
            tokens: 1,
            fields: [
                { label: "ID", value: "CategoryID" },
                { label: "name", value: "CategoryName" },
                { label: "description", value: "Description" },
            ]
        },
    },
    is = x => val => x == val,
    onlySuppliers = is('Suppliers'),
    onlyProducts = is('Products'),
    grab =
        entity => axios.all(range(entities[entity].tokens).map(x => axios.get(buildURL(entity, x))))
            .then(xs => xs.reduce((a, x) => a.concat(x.data.value), []))


Object.
    keys(entities)
    // .filter(onlySuppliers)
    // .filter(onlyProducts)
    .forEach(entity => grab(entity)
        // .then(JSON.stringify)
        // .then(console.log)
        .then(xs => json2csv(xs, { fields: entities[entity].fields }))
        .then(csv => fs.writeFileSync(`data/northbreeze-${entity}.csv`, csv))
    )