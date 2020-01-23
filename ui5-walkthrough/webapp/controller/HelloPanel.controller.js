sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],(Controller, MessageToast, Fragment) => 
    Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        // Controller extension definition Map
        // onShowHello: function() {alert("Hello UI5")}
        // onShowHello: () => MessageToast.show("Hello, Message"),
        onShowHello: function() {
            let oBundle = this.getView().getModel("i18n").getResourceBundle()
            let sRecipient = this.getView().getModel().getProperty("/recipient/name")
            let sMsg = oBundle.getText("helloMsg", [sRecipient,'!!'])
            MessageToast.show(sMsg) 
        },

        onOpenDialog: function() {
            this.getOwnerComponent().openHelloDialog()
        },

        onCloseDialog: function() {
            this.byId("helloDialog").close()
        }
    })
)