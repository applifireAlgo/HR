Ext.define('Hrproject.view.mobileview.reportui.ReportView', {
	extend : 'Ext.panel.Panel',
	requires : [ 'Hrproject.view.mobileview.reportui.querycriteria.QueryCriteriaView',
			'Hrproject.view.mobileview.reportui.datachart.DataChartViewTab',
			'Hrproject.view.mobileview.reportui.datachart.DataChartViewPanel',
			'Hrproject.view.mobileview.reportui.ReportViewController' ,
			'Hrproject.view.mobileview.fw.DataPointPanel',
			'Hrproject.view.mobileview.googlemaps.map.MapPanel'
			],
	xtype : 'reportview',
	controller : 'reportviewController',
	layout : 'border',
	reportWidgets :["1","2","3","4"],
	//autoScroll : true,
	//margin : '3 0 5 0',

	listeners : {
		scope : 'controller',
		afterrender : 'renderReport'
	}
});
