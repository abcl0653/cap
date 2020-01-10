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