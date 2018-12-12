sap.ui.controller("zcountry.Country", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcountry.Country
*/
	onInit: function() {
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.loadData("model/countryList.json");
        
        this.getView().setModel(oModel);
        
        // property binding
        var oItem = this.getView().byId("iditem1");
        oItem.bindProperty("text", "/countryCollection/0/name");
        
        // Element binding
        var oCombo = this.getView().byId("idCombo2");
        oCombo.bindElement("/countryCollection");
        
        //Aggregation binding
        var oCombo2 = this.getView().byId("idCombo3");       
        oCombo2.bindAggregation("items", "/countryCollection", new sap.ui.core.Item({ text : "{name}"}));
        
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcountry.Country
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcountry.Country
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcountry.Country
*/
//	onExit: function() {
//
//	}

});