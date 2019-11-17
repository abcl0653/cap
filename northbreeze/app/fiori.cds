using from '../srv/service';

annotate northbreeze.Suppliers with @(
    UI: {
        SelectionFields:[],
        LineItem: [
            {Value: ID, Label: 'ID'},
            {Value: name, Label: 'Supplier Name'},
            {Value: country, Label: 'Country'},
        ],
        HeaderInfo:{
            TypeNamePlural: 'Suppliers'
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