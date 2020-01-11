sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], Controller, MessageToast => { return Controller.extend("sap.ui.demo.walkthrough.controller.App",{
    onShowHello: function()  { alert("Hello!") }//MessageToast.show("Hello World!") 
})
})