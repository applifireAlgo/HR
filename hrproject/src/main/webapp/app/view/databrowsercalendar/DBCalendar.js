Ext.define('Hrproject.view.databrowsercalendar.DBCalendar', {
	extend : 'Hrproject.view.databrowsercalendar.DBCalendarView',
	requires : [ 'Hrproject.view.databrowsercalendar.DBCalendarController',
	             'Hrproject.view.databrowsercalendar.DBCalendarView'],
	controller : 'databrowsercalendar',
	items : [ ],
	listeners : {
		afterrender : 'loadData',
		scope : "controller"
	}
});
