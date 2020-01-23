sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    // "sap/ui/model/resource/ResourceModel"
    "./controller/HelloDialog"
], (UIComponent, JSONModel, HelloDialog) => UIComponent.extend("sap.ui.demo.walkthrough.Component", {
    metadata: {
        manifest:"json"
    },
    init: function() {
        // call init function of the parent
        UIComponent.prototype.init.apply(this, arguments)
        
        // Set Data models
        this.setModel(new JSONModel(
                {recipient:{name:"World"}}
            )
        )

        // // Set resource models // ---This is automatically done by the framework - 2020.01.11
        // this.setModel( new ResourceModel({
        //     bundleName:"sap.ui.demo.walkthrough.i18n.i18n"
        // }), "i18n")
        
        // Set Dialog
        this._helloDialog = new HelloDialog(this.getRootControl())
    },

    exit: function() {
        this._helloDialog.destroy()
        delete this._helloDialog
    },

    openHelloDialog: function() {
        this._helloDialog.open()
    }
}) )