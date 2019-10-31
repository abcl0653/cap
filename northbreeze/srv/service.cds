using northbreeze from '../db/data-model.cds';

service Breeze {
    entity Products as projection on northbreeze.Products;
    entity Suppliers as projection on northbreeze.Suppliers ;
    entity Categories as projection on northbreeze.Categories;    
}