Ext.define('Hrproject.view.querybuildernewmodel.querystructure.QueryStructureStore', {
    extend: 'Ext.data.Store',
    requires:['Hrproject.view.querybuildernewmodel.querystructure.QueryStructureModel'],
    autoSync: false,
    model: 'Hrproject.view.querybuildernewmodel.querystructure.QueryStructureModel',
    filters: []
  
});
