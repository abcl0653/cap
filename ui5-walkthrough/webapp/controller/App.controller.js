sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],(Controller, MessageToast, JSONModel, ResourceModel) => 
    Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        // Controller extension definition Map
        // onShowHello: function() {alert("Hello UI5")}
        // onShowHello: () => MessageToast.show("Hello, Message"),
        onShowHello: function() {
            let oBundle = this.getView().getModel("i18n").getResourceBundle()
            let sRecipient = this.getView().getModel().getProperty("/recipient/name")
            let sMsg = oBundle.getText("helloMsg", [sRecipient,'!!'])
            MessageToast.show(sMsg) 
        },
        // onInit: () => console.log(this)
        onInit: function() {this.getView().setModel(new JSONModel(
                    {recipient:{name:"World"}}
                )
            )
            this.getView().setModel( new ResourceModel({
                bundleName:"sap.ui.demo.walkthrough.i18n.i18n"
            }), "i18n")
        }
    })
)