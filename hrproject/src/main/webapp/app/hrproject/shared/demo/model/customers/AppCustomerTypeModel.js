Ext.define('Hrproject.hrproject.shared.demo.model.customers.AppCustomerTypeModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "appcustTypeId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "customerType",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "defaults",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "sequenceId",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "versionId",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "entityAudit",
          "reference": "EntityAudit"
     }, {
          "name": "primaryDisplay",
          "type": "string",
          "defaultValue": ""
     }]
});