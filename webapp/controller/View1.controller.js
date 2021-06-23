sap.ui.define([
    "sap/ui/core/mvc/Controller"
    
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("Bancolombia.invoces.controller.View1", {
			onInit: function () {

            //Vamos a crear una instancia del Modelo
                const oJSONModel = new sap.ui.model.json.JSONModel();
                //Vamos a obtener la instancia de la vista
                const oView = this.getView();
                //Vamos a cargar los datos que estan en la ruta al Modelo
                oJSONModel.loadData("./model/SelectionScreenMenu.json");
                //Vamos crear un modelo llamado selectionScreen 
                oView.setModel(oJSONModel, "selectionScreen");
            },
            
            onFilter: function(oEvent){

            }

            ,
            
            onClearFilter: function(){

                //Primero es Acceder a la instancia del Controlador
                //Segundo es Acceder a la instancia de la vista
                //Tercero es Acceder a la instancia del Modelo
                //Almacenamos eso en una constante
                const oModelSel =this.getView().getModel("selectionScreen");
                //Actualizar una propiedad de ese modelo instanciado.
                oModelSel.setProperty("/ShipName", "");
                oModelSel.setProperty("/CountryKey", "");
                

            }
		});
	});
