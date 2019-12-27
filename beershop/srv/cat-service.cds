using { my.beershop, sap.common } from '../db/data-model';

service CatalogService {
  entity Beer @readonly as projection on beershop.Beer;
}