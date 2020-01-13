sap.ui.define(['sap/ui/core/mvc/XMLView'], 
    XMLview => XMLview.create({viewName: "Quickstart.App"})
    .then( oView => oView.placeAt("content") )
    )