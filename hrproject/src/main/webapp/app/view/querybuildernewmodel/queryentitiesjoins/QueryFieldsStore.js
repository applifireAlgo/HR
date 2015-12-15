Ext.define('Hrproject.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsStore', {
    extend: 'Ext.data.Store',
    requires:['Hrproject.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsModel'],
    autoSync: false,
    model: 'Hrproject.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsModel',
    filters: []
  
});
