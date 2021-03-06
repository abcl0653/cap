using northbreeze from '../db/data-model.cds';

service Breeze {
    entity Products as projection on northbreeze.Products;
    entity Suppliers as projection on northbreeze.Suppliers ;
    @readonly  entity Categories as projection on northbreeze.Categories;    
    function hello(to:String) returns String;
}
service Restricted {
    entity Orders as projection on northbreeze.Orders
    excluding { createdAt, createdBy};
}
