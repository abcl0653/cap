sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function(ManagedObject, Fragment) {
    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {
        constructor: function (oView) {
            this._oView = oView
        },
        
        exit: function () {
            delete this._oView
        },

        open: function() {
            let oView = this._oView
            if (!this.byId("helloDialog")) {
                Fragment.load({
                    id: oView.getId(),
                    name:"sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: this
                }).then(oDialog => {
                    oView.addDependent(oDialog)
                    oDialog.open()
                })
            } else {
                this.byId("helloDialog").open()
            }
        }
    })
})