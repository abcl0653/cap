using my.bookshop as my from './data-model';

extend my.Orders with {
    businessPartner : String(10);
    addressID       : String(10);
}