sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => Controller.extend("sap.ui.demo.walkthrough.InvoiceList", {
        onInit: function() {
            let oViewModel = new JSONModel({currency:"EUR"})
            this.getView().setModel(oViewModel,"view")
        }
}))