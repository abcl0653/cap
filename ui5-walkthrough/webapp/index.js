<<<<<<< HEAD
sap.ui.define([
    // "sap/m/Text"
    "sap/ui/core/mvc/XMLView"
], XMLView => XMLView.create({viewName: "sap.ui.demo.walkthrough.view.App"})
.then(oView => oView.placeAt("content"))
)
=======
// sap.ui.define([
//     "sap/m/Text"
// ],  (Text) => new Text({
//     text: "HelloWorld"
// }).placeAt("content"))

sap.ui.define(["sap/ui/core/mvc/XMLView"], XMLView => {
    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
    }).then(oView => oView.placeAt("content"))
})
>>>>>>> 8323a04c0e57edf19e9f8ab914e1a3222f8c3157
