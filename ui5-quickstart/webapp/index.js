sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], (XMLView) => {
    XMLView.create({
        viewName:"Quickstart.App"
    }).then(oView => oView.placeAt("content"))
})