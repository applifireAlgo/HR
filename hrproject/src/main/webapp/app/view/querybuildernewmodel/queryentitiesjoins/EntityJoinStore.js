Ext.define('Hrproject.view.querybuildernewmodel.queryentitiesjoins.EntityJoinStore', {
    extend: 'Ext.data.Store',
    requires:['Hrproject.view.querybuildernewmodel.queryentitiesjoins.EntityJoinModel'],
    autoSync: false,
    model: 'Hrproject.view.querybuildernewmodel.queryentitiesjoins.EntityJoinModel',
    data:[]
});
