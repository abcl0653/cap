using my.bookshop as my from '../db/extended';
using API_BUSINESS_PARTNER as BUPA_API from './external/csn/API_BUSINESS_PARTNER';

service CatalogService {
  entity Books @readonly as projection on my.Books;
  entity Authors @readonly as projection on my.Authors;
  // entity Orders @insertonly as projection on my.Orders;
  @cds.persistence.skip
  entity Addresses as projection on BUPA_API.A_BusinessPartnerAddressType {
    key BusinessPartner as businessPartner,
    key AddressID as addressId,
    Country as country,
    CityName as cityName,
    StreetName as streetName,
  }

  entity Orders as select from my.Orders mixin {
    address : Association to Addresses 
    on address.businessPartner = businessPartner
    and address.addressId = addressID;
  } into {
    *, address
  }
}
