using northbreeze from '../db/data-model.cds';

service Breeze {
    entity Products as projection on northbreeze.Products;
    entity Suppliers as projection on northbreeze.Suppliers ;
    @readonly  entity Categories as projection on northbreeze.Categories;    
}
service Restricted {
    entity Orders as projection on northbreeze.Orders
    excluding { createdAt, createdBy};
}
