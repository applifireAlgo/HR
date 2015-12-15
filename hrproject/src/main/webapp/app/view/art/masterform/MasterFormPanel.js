Ext.define('Hrproject.view.art.masterform.MasterFormPanel',
{
	extend :'Ext.form.Panel',
	xtype: 'masterFormPanel',
	itemId : 'masterFormPanel',
	
	requires: ['Hrproject.view.art.masterform.MasterFormModel','Hrproject.view.art.masterform.MasterFormViewModel','Hrproject.view.art.masterform.MasterFormPanelController'],

	//viewModel: 'masterFormViewModel',
	
	controller: 'masterFormPanelController'

});
	