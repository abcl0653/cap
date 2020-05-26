sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => Controller.extend(
    "Quickstart.App",{
        onPress: () => MessageToast.show("Hello App!")
    }
))