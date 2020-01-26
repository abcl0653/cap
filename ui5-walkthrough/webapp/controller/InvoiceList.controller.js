sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"    
], (Controller, JSONModel, formatter) => Controller.extend("sap.ui.demo.walkthrough.InvoiceList", {
        formatter: formatter,
        onInit: function() {
            let oViewModel = new JSONModel({currency:"EUR"})
            this.getView().setModel(oViewModel,"view")
        }
}))