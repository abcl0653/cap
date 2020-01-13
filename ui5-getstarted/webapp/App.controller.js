sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
], (Controller, MessageToast, JSONModel) => {
    return Controller.extend("Quickstart.App", {
        onPress : function () {
            MessageToast.show("Hello UI5!")
            this.byId("app").to(this.byId("intro"))
        },
        onInit : function () {
            this.getView().setModel(new JSONModel({
                features: [
                    "Enterprise-Ready Web Toolkit",
					"Powerful Development Concepts",
					"Feature-Rich UI Controls",
					"Consistent User Experience",
					"Free and Open Source",
					"Responsive Across Browsers and Devices"
                ]
            }))
        },
        onChange : function (oEvent) {
            
        }
    })
})