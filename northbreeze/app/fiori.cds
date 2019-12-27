using from '../srv/service';

annotate northbreeze.Suppliers with @(
    UI: {
        SelectionFields:[],
        LineItem: [
            {Value: ID},
            {Value: name},
            {Value: country}
        ],
        HeaderInfo:{
            TypeNamePlural: '{i18n>TypeNamePluralSuppliers}'
        }
    }
);

annotate northbreeze.Suppliers with {
    ID @(
        title: '{i18n>ID}',
        description: '{i18n>ID}'
    );

    name @(
        title: '{i18n>Name}',
        description: '{i18n>Name}'
    );

    country @(
        title: '{i18n>Country}',
        description: '{i18n>Country}'
    );
}

annotate northbreeze.Categories with @(
    UI: {
        SelectionFields:[],
        LineItem: [
            {Value: ID, Label: 'ID'},
            {Value: name, Label: 'Category Name'},
            {Value: description, Label: 'Category Description'},
        ],
        HeaderInfo:{
            TypeNamePlural: 'Categories'
        }
    }
);

annotate northbreeze.Products with @(
    UI: {
        SelectionFields:[],
        LineItem: [
            {Value: ID, Label: 'ID'},
            {Value: name, Label: 'Product Name'},
            {Value: unitquantity, Label: 'Unit Quantity'},
            {Value: unitprice, Label: 'Unit Price'},
            {Value: unitsinstock, Label: 'Units In Stock'},
            {Value: discontinued, Label: 'Discontinued'},
        ],
        HeaderInfo:{
            TypeNamePlural: 'Products'
        }
    }
);