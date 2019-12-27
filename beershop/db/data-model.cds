namespace my.beershop;
using { User, Country, managed } from '@sap/cds/common';

entity Beer {
  key ID : Integer;
  SORT: String;
  BREWERY: String;
}
