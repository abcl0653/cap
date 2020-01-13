sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => UIComponent.extend("sap.ui.demo.walkthrough.Component", {
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

        // // Set resource models
        // this.setModel( new ResourceModel({
        //     bundleName:"sap.ui.demo.walkthrough.i18n.i18n"
        // }), "i18n")
    }
}) )