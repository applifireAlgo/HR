Ext.define('Hrproject.hrproject.shared.demo.model.employee.DepartmentTypeModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "deptTypeCode",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "deptTypeDesc",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "deptTypeHelp",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "deptTypeIcon",
          "type": "string",
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