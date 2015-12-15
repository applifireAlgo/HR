Ext.define('Hrproject.view.reportui.ReportView', {
	extend : 'Ext.panel.Panel',
	requires : [ 'Hrproject.view.reportui.querycriteria.QueryCriteriaView',
			'Hrproject.view.reportui.datachart.DataChartViewTab',
			'Hrproject.view.reportui.datachart.DataChartViewPanel',
			'Hrproject.view.reportui.ReportViewController' ,
			'Hrproject.view.fw.MainDataPointPanel',
			'Hrproject.view.googlemaps.map.MapPanel'
			],
	xtype : 'reportview',
	controller : 'reportviewController',
	layout : 'border',
	reportWidgets :["1","2","3","4"],
	//autoScroll : true,
	//margin : '3 0 5 0',
	height:500,
	width:1000,
	listeners : {
		scope : 'controller',
		afterrender : 'renderReport'
	}
});
